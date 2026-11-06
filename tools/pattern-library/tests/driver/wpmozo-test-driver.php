<?php
/**
 * Plugin Name: WPMozo Pattern Library test driver
 * Description: Test-only helper for tools/pattern-library/tests. Loaded as a must-use plugin by the test runner only. Never install it on a real site.
 *
 * It does nothing unless the runner defines WPMOZO_TEST_DRIVER and the request comes from the
 * loopback address. It is not part of the plugin: release zips contain only build/, includes/,
 * the main plugin file and the readme.
 *
 * @package WPMozo_Blocks_And_Addons
 */

defined( 'ABSPATH' ) || exit;

if ( ! defined( 'WPMOZO_TEST_DRIVER' ) || ! WPMOZO_TEST_DRIVER ) {
	return;
}

/**
 * Folder the runner mounts for logs (fatal errors, blocked HTTP requests).
 *
 * @return string
 */
function wpmozo_test_log_dir() {
	return WP_CONTENT_DIR . '/wpmozo-test-logs';
}

// Fatal errors go to the host, because a site that can't boot loses its debug log. This file loads
// before every plugin, so it sees their fatal errors too.
register_shutdown_function(
	function () {
		$e = error_get_last();
		if ( $e && in_array( $e['type'], array( E_ERROR, E_PARSE, E_COMPILE_ERROR, E_CORE_ERROR ), true ) && is_dir( wpmozo_test_log_dir() ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions, WordPress.Security -- test-only log on the host.
			file_put_contents( wpmozo_test_log_dir() . '/fatals.log', gmdate( 'c' ) . ' ' . ( isset( $_SERVER['REQUEST_URI'] ) ? $_SERVER['REQUEST_URI'] : 'cli' ) . ' | ' . $e['message'] . ' @ ' . $e['file'] . ':' . $e['line'] . "\n", FILE_APPEND );
		}
	}
);

// Keep tests local: no outbound HTTP from WordPress, and no Gravatar requests from the browser.
add_filter(
	'pre_http_request',
	function ( $pre, $args, $url ) {
		$host = wp_parse_url( $url, PHP_URL_HOST );
		if ( in_array( $host, array( '127.0.0.1', 'localhost', '::1' ), true ) ) {
			return $pre;
		}
		if ( is_dir( wpmozo_test_log_dir() ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions, WordPress.Security -- test-only log on the host.
			file_put_contents( wpmozo_test_log_dir() . '/http-blocked.log', gmdate( 'c' ) . ' ' . $url . ' | ' . ( isset( $_SERVER['REQUEST_URI'] ) ? $_SERVER['REQUEST_URI'] : 'cli' ) . "\n", FILE_APPEND );
		}
		return new WP_Error( 'wpmozo_test_offline', 'Outbound HTTP is blocked in tests.' );
	},
	1,
	3
);
add_filter(
	'pre_get_avatar_data',
	function ( $args ) {
		$args['url']          = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';
		$args['found_avatar'] = true;
		return $args;
	}
);

$wpmozo_test_remote = isset( $_SERVER['REMOTE_ADDR'] ) ? $_SERVER['REMOTE_ADDR'] : ''; // phpcs:ignore WordPress.Security
if ( ! in_array( $wpmozo_test_remote, array( '127.0.0.1', '::1' ), true ) ) {
	return;
}

// phpcs:disable WordPress.Security.NonceVerification.Recommended, WordPress.Security.ValidatedSanitizedInput -- loopback-only test helper.

// Per-request environment changes, for cache tests: a different WordPress version, or extra HTML
// allowed for posts.
if ( ! empty( $_GET['wpmozo_test_wp'] ) ) {
	$GLOBALS['wp_version'] = sanitize_text_field( wp_unslash( $_GET['wpmozo_test_wp'] ) ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride
}
if ( ! empty( $_GET['wpmozo_test_kses'] ) ) {
	add_filter(
		'wp_kses_allowed_html',
		function ( $tags, $context ) {
			if ( 'post' === $context ) {
				$tags['wpmozo-test-tag'] = array( 'class' => true );
			}
			return $tags;
		},
		10,
		2
	);
}

// A classic meta box on the edit screen (WordPress may then load the editor without the canvas iframe).
if ( ! empty( $_GET['wpmozo_test_metabox'] ) ) {
	add_action(
		'add_meta_boxes',
		function () {
			add_meta_box( 'wpmozo-test-metabox', 'Test meta box', '__return_null', null, 'normal' );
		}
	);
}

/**
 * User id for a role keyword; test users are created on first use.
 *
 * @param string $who 'admin' (user 1), 'anon', or a role name.
 * @return int
 */
function wpmozo_test_user( $who ) {
	if ( 'anon' === $who ) {
		return 0;
	}
	if ( 'admin' === $who ) {
		return 1;
	}
	$user = get_user_by( 'login', 'wpmozo-test-' . $who );
	if ( $user ) {
		return $user->ID;
	}
	$id = wp_insert_user(
		array(
			'user_login' => 'wpmozo-test-' . $who,
			'user_pass'  => wp_generate_password( 24 ),
			'role'       => $who,
			'user_email' => 'wpmozo-test-' . $who . '@example.test',
		)
	);
	return is_wp_error( $id ) ? 0 : $id;
}

add_action(
	'init',
	function () {
		if ( empty( $_GET['wpmozo_test'] ) ) {
			return;
		}
		$action = sanitize_key( $_GET['wpmozo_test'] );
		$out    = array( 'action' => $action );
		if ( ! function_exists( 'activate_plugin' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}
		switch ( $action ) {
			case 'probe':
				$log = WP_CONTENT_DIR . '/debug.log';
				$out = array_merge(
					$out,
					array(
						'wp'             => get_bloginfo( 'version' ),
						'php'            => PHP_VERSION,
						'multisite'      => is_multisite(),
						'active_plugins' => get_option( 'active_plugins' ),
						'lite_version'   => defined( 'WPMOZO_BNA_VERSION' ) ? WPMOZO_BNA_VERSION : null,
						'pro_version'    => defined( 'WPMOZO_BNA_PRO_VERSION' ) ? WPMOZO_BNA_PRO_VERSION : null,
						'did_loaded'     => did_action( 'wpmozo_bna_loaded' ),
						'features'       => function_exists( 'wpmozo_bna_integration' ) ? wpmozo_bna_integration()->features() : null,
						'wpmozo_blocks'  => array_values( preg_grep( '#^wpmozo/#', array_keys( WP_Block_Type_Registry::get_instance()->get_all_registered() ) ) ),
						'debug_log'      => file_exists( $log ) ? array_values( array_filter( array_map( 'trim', file( $log ) ) ) ) : array(),
					)
				);
				break;

			case 'rest':
				wp_set_current_user( wpmozo_test_user( sanitize_key( isset( $_GET['as'] ) ? $_GET['as'] : 'anon' ) ) );
				$request = new WP_REST_Request( 'GET', wp_unslash( isset( $_GET['route'] ) ? $_GET['route'] : '/' ) );
				if ( ! empty( $_GET['inm'] ) ) {
					$request->set_header( 'If-None-Match', wp_unslash( $_GET['inm'] ) );
				}
				$response = rest_do_request( $request );
				$out      = array_merge(
					$out,
					array(
						'status'  => $response->get_status(),
						'headers' => $response->get_headers(),
						'data'    => rest_get_server()->response_to_data( $response, false ),
					)
				);
				break;

			case 'set':
				$option = get_option( 'wpmozo-blocks-and-addons-option', array() );
				$option = is_array( $option ) ? $option : array();
				if ( isset( $_GET['keep'] ) ) {
					// Switch off every WPMozo block except these (the WebAssembly server can't serve every editor asset).
					// Blocks Lite's block panel never lists stay on: the placeholder and the internal content wrapper.
					$keep = array_filter( explode( ',', sanitize_text_field( wp_unslash( $_GET['keep'] ) ) ) );
					$all  = array();
					foreach ( array_keys( WP_Block_Type_Registry::get_instance()->get_all_registered() ) as $name ) {
						if ( 0 === strpos( $name, 'wpmozo/' ) && ! in_array( substr( $name, 7 ), $keep, true ) && ! in_array( $name, array( 'wpmozo/pattern-library', 'wpmozo/content-wraper' ), true ) ) {
							$all[] = substr( $name, 7 );
						}
					}
					$option['wpmozo_inactive_blocks'] = implode( ',', $all );
				}
				if ( isset( $_GET['library'] ) ) {
					$option['wpmozo_pattern_library'] = sanitize_key( $_GET['library'] );
				}
				update_option( 'wpmozo-blocks-and-addons-option', $option );
				if ( isset( $_GET['licence'] ) ) {
					// A test value standing for a recorded Pro activation (the Pro entitlement reads this site option).
					'' === $_GET['licence'] ? delete_site_option( 'wpmozo_blocks_and_addons_license_key' ) : update_site_option( 'wpmozo_blocks_and_addons_license_key', 'wpmozo-test-activation' );
				}
				if ( isset( $_GET['flush'] ) ) {
					global $wpdb;
					$wpdb->query( "DELETE FROM {$wpdb->options} WHERE option_name LIKE '\\_transient\\_%wpmozo\\_bna\\_lib\\_%'" ); // phpcs:ignore WordPress.DB
				}
				foreach ( array( 'administrator', 'editor', 'author', 'contributor', 'subscriber' ) as $role ) {
					wpmozo_test_user( $role );
				}
				$out['ok'] = true;
				break;

			case 'plugin':
				wp_set_current_user( 1 );
				$file = wp_unslash( isset( $_GET['file'] ) ? $_GET['file'] : '' );
				if ( 'activate' === ( isset( $_GET['do'] ) ? $_GET['do'] : '' ) ) {
					$result        = activate_plugin( $file );
					$out['result'] = is_wp_error( $result ) ? $result->get_error_code() : 'activated';
				} else {
					deactivate_plugins( $file, true );
					$out['result'] = 'deactivated';
				}
				$out['active_plugins'] = get_option( 'active_plugins' );
				break;

			case 'active':
				// Raw active_plugins: states the Plugins screen prevents (a plugin folder removed by FTP, for example).
				update_option( 'active_plugins', array_values( array_filter( explode( ',', wp_unslash( isset( $_GET['list'] ) ? $_GET['list'] : '' ) ) ) ) );
				$out['active_plugins'] = get_option( 'active_plugins' );
				break;

			case 'post':
				wp_set_current_user( 1 );
				$id          = wp_insert_post(
					array(
						'post_title'   => sanitize_text_field( wp_unslash( isset( $_GET['title'] ) ? $_GET['title'] : 'Test' ) ),
						'post_content' => wp_slash( (string) file_get_contents( 'php://input' ) ),
						'post_status'  => 'publish',
						'post_type'    => sanitize_key( isset( $_GET['type'] ) ? $_GET['type'] : 'page' ),
					),
					true
				);
				$out['id']   = is_wp_error( $id ) ? 0 : $id;
				$out['link'] = is_wp_error( $id ) ? '' : get_permalink( $id );
				break;

			case 'content':
				$post           = get_post( absint( isset( $_GET['id'] ) ? $_GET['id'] : 0 ) );
				$out['content'] = $post ? $post->post_content : null;
				break;

			case 'contract':
				// Which of the posted surfaces exist at runtime (tools/pattern-library/tests/lib/surface.cjs).
				$want = json_decode( (string) file_get_contents( 'php://input' ), true );
				$want = is_array( $want ) ? $want : array();
				wp_set_current_user( 1 );
				rest_do_request( new WP_REST_Request( 'GET', '/wpmozo/v1/library/catalog' ) );
				$seen = array(
					'functions'       => array(),
					'actions'         => array(),
					'classes'         => array(),
					'constants'       => array(),
					'post_types'      => array(),
					'taxonomies'      => array(),
					'scripts'         => array(),
					'styles'          => array(),
					'integration'     => array(),
					'features'        => function_exists( 'wpmozo_bna_integration' ) ? wpmozo_bna_integration()->features() : null,
					'registry'        => array(),
					'blocks'          => array(),
					'addon_constants' => array(),
					'dynamic_style'   => null,
				);
				foreach ( isset( $want['blocks'] ) ? (array) $want['blocks'] : array() as $name ) {
					$seen['blocks'][ $name ] = WP_Block_Type_Registry::get_instance()->is_registered( $name );
				}
				foreach ( isset( $want['addon_constants'] ) ? (array) $want['addon_constants'] : array() as $name ) {
					$seen['addon_constants'][ $name ] = defined( $name );
				}
				foreach ( isset( $want['functions'] ) ? (array) $want['functions'] : array() as $name ) {
					$seen['functions'][ $name ] = function_exists( $name );
				}
				foreach ( isset( $want['actions'] ) ? (array) $want['actions'] : array() as $name ) {
					$seen['actions'][ $name ] = did_action( $name ) > 0;
				}
				foreach ( isset( $want['constants'] ) ? (array) $want['constants'] : array() as $name ) {
					$seen['constants'][ $name ] = defined( $name );
				}
				foreach ( isset( $want['post_types'] ) ? (array) $want['post_types'] : array() as $name ) {
					$seen['post_types'][ $name ] = post_type_exists( $name );
				}
				foreach ( isset( $want['taxonomies'] ) ? (array) $want['taxonomies'] : array() as $name ) {
					$seen['taxonomies'][ $name ] = taxonomy_exists( $name );
				}
				foreach ( isset( $want['scripts'] ) ? (array) $want['scripts'] : array() as $name ) {
					$seen['scripts'][ $name ] = wp_script_is( $name, 'registered' );
				}
				foreach ( isset( $want['styles'] ) ? (array) $want['styles'] : array() as $name ) {
					$seen['styles'][ $name ] = wp_style_is( $name, 'registered' );
				}
				foreach ( isset( $want['classes'] ) ? (array) $want['classes'] : array() as $class => $methods ) {
					$item = array(
						'exists'       => class_exists( $class ),
						'final'        => null,
						'instantiable' => null,
						'methods'      => array(),
					);
					if ( $item['exists'] ) {
						$reflection           = new ReflectionClass( $class );
						$constructor          = $reflection->getConstructor();
						$item['final']        = $reflection->isFinal();
						$item['instantiable'] = $reflection->isInstantiable() && ( null === $constructor || 0 === $constructor->getNumberOfRequiredParameters() );
						foreach ( (array) $methods as $method ) {
							$item['methods'][ $method ] = $reflection->hasMethod( $method ) && $reflection->getMethod( $method )->isPublic() && $reflection->getMethod( $method )->isStatic();
						}
					}
					$seen['classes'][ $class ] = $item;
				}
				if ( function_exists( 'wpmozo_bna_integration' ) ) {
					foreach ( isset( $want['integrationMethods'] ) ? (array) $want['integrationMethods'] : array() as $method ) {
						$seen['integration'][ $method ] = is_callable( array( wpmozo_bna_integration(), $method ) );
					}
				}
				if ( class_exists( 'Mozo_Bna_Library_Registry' ) ) {
					foreach ( isset( $want['registryMethods'] ) ? (array) $want['registryMethods'] : array() as $method ) {
						$seen['registry'][ $method ] = method_exists( 'Mozo_Bna_Library_Registry', $method );
					}
				}
				if ( ! empty( $want['dynamic_style'] ) && class_exists( 'WPMOZO\\BNA\\Helpers\\Mozo_Bna_Block_Helpers' ) ) {
					// Lite's helper must load the add-on's dynamic-style.php for this slug and call its callback.
					$slug     = sanitize_key( $want['dynamic_style'] );
					$callback = str_replace( '-', '_', $slug ) . '_generate_dynamic_style';
					$type     = WP_Block_Type_Registry::get_instance()->get_registered( 'wpmozo/' . $slug );
					$attrs    = array( 'ID' => 'wpmozo-test-probe' );
					$attrs    = $type ? $type->prepare_attributes_for_render( $attrs ) : $attrs;
					$before   = function_exists( $callback );
					try {
						$output = WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers::get_block_dynamic_style( $slug, $attrs );
						$after  = function_exists( $callback );
						$file   = $after ? wp_normalize_path( ( new ReflectionFunction( $callback ) )->getFileName() ) : '';

						$seen['dynamic_style'] = array(
							'slug'       => $slug,
							'before'     => $before,
							'after'      => $after,
							'from_addon' => '' !== $file && defined( 'WPMOZO_BNA_PRO_PLUGIN_DIR' ) && 0 === strpos( $file, wp_normalize_path( WPMOZO_BNA_PRO_PLUGIN_DIR ) ),
							'file'       => $file ? basename( dirname( $file ) ) . '/' . basename( $file ) : '',
							'string'     => is_string( $output ),
							'same'       => $after && call_user_func( $callback, $attrs ) === $output,
						);
					} catch ( Throwable $e ) {
						// For example the add-on loaded but not started: its template needs classes it didn't load.
						$seen['dynamic_style'] = array(
							'slug'  => $slug,
							'error' => get_class( $e ) . ': ' . $e->getMessage(),
						);
					}
				}
				$out['seen'] = $seen;
				break;

			case 'cache':
				global $wpdb;
				$out['keys'] = $wpdb->get_col( "SELECT option_name FROM {$wpdb->options} WHERE option_name LIKE '\\_transient\\_wpmozo\\_bna\\_lib\\_%' ORDER BY option_name" ); // phpcs:ignore WordPress.DB
				break;
		}
		wp_send_json( $out );
	},
	999
);
