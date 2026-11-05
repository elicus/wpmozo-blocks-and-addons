<?php
/**
 * Pattern Library: content validation.
 *
 * Content is never trusted because it ships with a plugin. Every pattern is
 * checked before it is offered and again before it is delivered.
 * Rules: docs/pattern-library/security.md.
 *
 * @link       https://elicus.com
 * @since      n.e.x.t
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes/library
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Pattern content validator.
 *
 * @since n.e.x.t
 */
final class Mozo_Bna_Library_Validator {

	/**
	 * Version of the validation rules and of the analysis result. Raise it whenever either
	 * changes, so cached analyses are rebuilt (it is part of the cache key).
	 *
	 * @var int
	 */
	const RULES_VERSION = 2;

	/**
	 * Maximum content size in bytes.
	 *
	 * @var int
	 */
	const MAX_BYTES = 262144;

	/**
	 * Maximum number of blocks, nested blocks included.
	 *
	 * @var int
	 */
	const MAX_BLOCKS = 400;

	/**
	 * Maximum nesting depth.
	 *
	 * @var int
	 */
	const MAX_DEPTH = 10;

	/**
	 * Blocks that patterns may not use (site-specific references, raw HTML, shortcodes,
	 * third-party embeds, and the library's own placeholder).
	 *
	 * @var array
	 */
	const DENIED_BLOCKS = array(
		'core/html',
		'core/freeform',
		'core/shortcode',
		'core/block',
		'core/pattern',
		'core/template-part',
		'core/legacy-widget',
		'core/widget-group',
		'core/embed',
		'core/post-content',
		'wpmozo/pattern-library',
	);

	/**
	 * HTML elements that are never allowed, for any user.
	 *
	 * @var array
	 */
	const UNSAFE_TAGS = array( 'SCRIPT', 'IFRAME', 'FRAME', 'FRAMESET', 'OBJECT', 'EMBED', 'APPLET', 'LINK', 'BASE', 'FORM', 'NOSCRIPT' );

	/**
	 * Unsafe URL schemes, checked on every attribute value after decoding and removing
	 * whitespace and control characters. The exact no-op `javascript:void(0)` (WPMozo
	 * buttons save it when no URL is set) is the only exception.
	 *
	 * @var string
	 */
	const UNSAFE_SCHEME = '/^(?:javascript|vbscript|data):/';

	/**
	 * The allowed no-op link value (compacted, lowercase).
	 *
	 * @var string
	 */
	const NOOP_LINK = '/^javascript:void\(0\);?$/';

	/**
	 * Content of <style> elements that is never allowed.
	 *
	 * @var string
	 */
	const UNSAFE_CSS = '/expression\s*\(|@import|javascript\s*:|behaviou?r\s*:|-moz-binding/i';

	/**
	 * Block comment attribute values that are never allowed: braces or style tags
	 * (they could close the block's generated CSS rule) and CSS execution tricks.
	 *
	 * @var string
	 */
	const UNSAFE_ATTRIBUTE_CSS = '/[{}]|<\/?\s*style\b|expression\s*\(|@import|-moz-binding/i';

	/**
	 * Attribute names treated as URLs.
	 *
	 * @var string
	 */
	const URL_ATTRIBUTE = '/(?:url|href|link|src)$/i';

	/**
	 * Validate pattern content (tokens already resolved).
	 *
	 * @param string $content Block markup.
	 * @return array {
	 *     @type bool     $valid                    Whether the content may be offered.
	 *     @type string[] $errors                   Error codes (empty when valid).
	 *     @type string[] $blocks                   Block names used, sorted, unique.
	 *     @type int      $block_count              Number of blocks.
	 *     @type int      $depth                    Deepest nesting level.
	 *     @type int      $bytes                    Content size.
	 *     @type bool     $requires_unfiltered_html True when saving it without the unfiltered_html
	 *                                              capability would change it (WordPress strips it).
	 * }
	 */
	public function validate( $content ) {
		$result = array(
			'valid'                    => false,
			'errors'                   => array(),
			'blocks'                   => array(),
			'block_count'              => 0,
			'depth'                    => 0,
			'bytes'                    => is_string( $content ) ? strlen( $content ) : 0,
			'requires_unfiltered_html' => false,
		);

		if ( ! is_string( $content ) || '' === trim( $content ) ) {
			$result['errors'][] = 'empty';
			return $result;
		}
		if ( $result['bytes'] > self::MAX_BYTES ) {
			$result['errors'][] = 'too_large';
			return $result;
		}
		if ( ! $this->is_safe_markup( $content ) ) {
			$result['errors'][] = 'unsafe_markup';
		}

		$blocks = parse_blocks( $content );
		$names  = array();
		$this->walk( $blocks, 1, $result, $names );
		if ( 0 === $result['block_count'] ) {
			$result['errors'][] = 'no_blocks';
		}
		if ( $result['block_count'] > self::MAX_BLOCKS ) {
			$result['errors'][] = 'too_many_blocks';
		}
		if ( $result['depth'] > self::MAX_DEPTH ) {
			$result['errors'][] = 'too_deep';
		}

		$names = array_keys( $names );
		sort( $names );
		$result['blocks'] = $names;

		// Run the filter WordPress applies when a user without unfiltered_html saves, and
		// compare structure (blocks, tags, attributes), not bytes: the filter also rewrites
		// harmless formatting such as "/>" to " />", which block validation accepts.
		$result['requires_unfiltered_html'] = $this->fingerprint( $content ) !== $this->fingerprint( wp_kses( $content, 'post' ) );

		$result['errors'] = array_values( array_unique( $result['errors'] ) );
		$result['valid']  = empty( $result['errors'] );
		return $result;
	}

	/**
	 * Whether the HTML is free of executable content: no unsafe elements, no event
	 * handler attributes, no unsafe URL schemes (checked on decoded values), no
	 * unsafe CSS inside <style>, and no http-equiv <meta>.
	 *
	 * @param string $content Block markup.
	 * @return bool
	 */
	private function is_safe_markup( $content ) {
		$tags = new WP_HTML_Tag_Processor( $content );
		while ( $tags->next_tag() ) {
			$tag = $tags->get_tag();
			if ( in_array( $tag, self::UNSAFE_TAGS, true ) ) {
				return false;
			}
			// Schema.org microdata uses <meta itemprop>; http-equiv can redirect or refresh.
			if ( 'META' === $tag && null !== $tags->get_attribute( 'http-equiv' ) ) {
				return false;
			}
			if ( 'STYLE' === $tag && preg_match( self::UNSAFE_CSS, (string) $tags->get_modifiable_text() ) ) {
				return false;
			}
			$names = $tags->get_attribute_names_with_prefix( '' );
			foreach ( is_array( $names ) ? $names : array() as $name ) {
				if ( 0 === strpos( $name, 'on' ) ) {
					return false;
				}
				$value = $tags->get_attribute( $name );
				if ( is_string( $value ) ) {
					$compact = strtolower( preg_replace( '/[\x00-\x20]+/', '', $value ) );
					if ( preg_match( self::UNSAFE_SCHEME, $compact ) && ! preg_match( self::NOOP_LINK, $compact ) ) {
						return false;
					}
				}
			}
		}
		return true;
	}

	/**
	 * Structural fingerprint of markup: block names and comment attributes, then every
	 * HTML tag (openers and closers) with its attribute names and decoded values.
	 *
	 * @param string $content Block markup.
	 * @return string
	 */
	private function fingerprint( $content ) {
		$parts = array();
		$this->block_shape( parse_blocks( $content ), $parts );

		$tags = new WP_HTML_Tag_Processor( $content );
		while ( $tags->next_tag( array( 'tag_closers' => 'visit' ) ) ) {
			if ( $tags->is_tag_closer() ) {
				$parts[] = '/' . $tags->get_tag();
				continue;
			}
			$item  = $tags->get_tag();
			$names = $tags->get_attribute_names_with_prefix( '' );
			$names = is_array( $names ) ? $names : array();
			sort( $names );
			foreach ( $names as $name ) {
				$value = $tags->get_attribute( $name );
				$item .= ' ' . $name . '=' . ( true === $value ? '' : (string) $value );
			}
			$parts[] = $item;
		}

		return md5( implode( "\n", $parts ) );
	}

	/**
	 * Add block names and attributes to a fingerprint.
	 *
	 * @param array $blocks Parsed blocks.
	 * @param array $parts  Fingerprint parts (by reference).
	 */
	private function block_shape( $blocks, &$parts ) {
		foreach ( $blocks as $block ) {
			if ( null === $block['blockName'] ) {
				continue;
			}
			$parts[] = $block['blockName'] . ' ' . wp_json_encode( $block['attrs'] );
			if ( ! empty( $block['innerBlocks'] ) ) {
				$this->block_shape( $block['innerBlocks'], $parts );
			}
		}
	}

	/**
	 * Walk parsed blocks.
	 *
	 * @param array $blocks Parsed blocks.
	 * @param int   $depth  Current depth.
	 * @param array $result Result (by reference).
	 * @param array $names  Block names seen (by reference).
	 */
	private function walk( $blocks, $depth, &$result, &$names ) {
		foreach ( $blocks as $block ) {
			$name = isset( $block['blockName'] ) ? $block['blockName'] : null;
			if ( null === $name ) {
				// Whitespace between blocks is fine; anything else is classic (freeform) content.
				if ( '' !== trim( isset( $block['innerHTML'] ) ? $block['innerHTML'] : '' ) ) {
					$result['errors'][] = 'freeform_content';
				}
				continue;
			}

			++$result['block_count'];
			$result['depth'] = max( $result['depth'], $depth );
			$names[ $name ]  = true;

			if ( 0 !== strpos( $name, 'core/' ) && 0 !== strpos( $name, 'wpmozo/' ) ) {
				$result['errors'][] = 'block_not_allowed';
			} elseif ( in_array( $name, self::DENIED_BLOCKS, true ) || 0 === strpos( $name, 'core-embed/' ) ) {
				$result['errors'][] = 'block_not_allowed';
			} elseif ( 'core/navigation' === $name && isset( $block['attrs']['ref'] ) ) {
				$result['errors'][] = 'block_not_allowed';
			}

			$this->check_attributes( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ? $block['attrs'] : array(), $result );

			if ( ! empty( $block['innerBlocks'] ) ) {
				$this->walk( $block['innerBlocks'], $depth + 1, $result, $names );
			}
		}
	}

	/**
	 * Check block comment attributes recursively.
	 *
	 * @param array $attrs  Attributes.
	 * @param array $result Result (by reference).
	 */
	private function check_attributes( $attrs, &$result ) {
		foreach ( $attrs as $key => $value ) {
			if ( is_array( $value ) ) {
				$this->check_attributes( $value, $result );
				continue;
			}
			if ( ! is_string( $value ) || '' === $value ) {
				continue;
			}
			$compact = strtolower( preg_replace( '/[\x00-\x20]+/', '', $value ) );
			if ( preg_match( self::UNSAFE_ATTRIBUTE_CSS, $value )
				|| ( preg_match( self::UNSAFE_SCHEME, $compact ) && ! preg_match( self::NOOP_LINK, $compact ) )
				|| ( false !== strpos( $value, '<' ) && ! $this->is_safe_markup( $value ) ) ) {
				$result['errors'][] = 'unsafe_attribute';
			}
			if ( is_string( $key ) && preg_match( self::URL_ATTRIBUTE, $key ) && ! $this->is_allowed_url( $value ) ) {
				$result['errors'][] = 'unsafe_url';
			}
		}
	}

	/**
	 * Whether a URL attribute value is allowed: fragment, site-relative path, or an
	 * http(s), mailto or tel URL that esc_url_raw() leaves unchanged.
	 *
	 * @param string $url URL.
	 * @return bool
	 */
	private function is_allowed_url( $url ) {
		if ( '#' === $url[0] || ( '/' === $url[0] && ( ! isset( $url[1] ) || '/' !== $url[1] ) ) ) {
			return true;
		}
		return esc_url_raw( $url, array( 'http', 'https', 'mailto', 'tel' ) ) === $url;
	}
}
