<?php
/**
 * Define methods for flip box block.
 *
 * @link       https://elicus.com
 * @since      1.0.0
 *
 * @package    WPMozo_Addons_Lite_For_Gutenberg
 * @subpackage WPMozo_Addons_Lite_For_Gutenberg/includes
 */

/**
 * This class responsible for defining all methods for flip box block.
 *
 * @since      1.0.0
 * @package    WPMozo_Addons_Lite_For_Gutenberg
 * @subpackage WPMozo_Addons_Lite_For_Gutenberg/includes
 * @author     Elicus <hello@elicus.com>
 */
class WPMozo_Addons_Lite_Gutenberg_Block_Flipbox extends WPMozo_Addons_Lite_Gutenberg_Block {

	/**
	 * The name of block.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @var string $block_name The name of block.
	 */
	protected $block_name = 'flip-box';

	/**
	 * The single instance of the class.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @var WPMozo_Addons_Lite_Gutenberg_Block $_instance The instances of this class.
	 */
	protected static $_instance = null;

	/**
	 * The instance of this class.
	 *
	 * Ensures only one instance of WPMozo_Addons_Lite_Gutenberg_Block is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @return WPMozo_Addons_Lite_Gutenberg_Block - Main instance.
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {

		parent::__construct();

		// rgister fontawesome style.
		$this->styles[] = array(
			'handle' => $this->plugin_name . '-fontawesome-style',
			'src'    => WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL . 'libs/fontawesome/all.min.css',
			'deps'   => array(),
			'ver'    => time(),
		);

		$this->styles[] = array(
			'handle' => $this->plugin_name . '-flip-box-style',
			'src'    => WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL . 'css/blocks/flip-box.css',
			'deps'   => array(),
			'ver'    => time(),
		);

		$this->args = array(
			'style_handles' => array(
				$this->plugin_name . '-fontawesome-style',
				$this->plugin_name . '-flip-box-style',
			),
		);

	}

}
