<?php
/**
 * Define methods for before after slider block.
 *
 * @link       https://elicus.com
 * @since      1.0.0
 *
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 */

/**
 * This class responsible for defining all methods for before after slider block.
 *
 * @since      1.0.0
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 * @author     Elicus <hello@elicus.com>
 */
class WPMozo_Blocks_And_Addons_Block_Beforeafterslider extends WPMozo_Blocks_And_Addons_Block {

	/**
	 * The name of block.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @var string $block_name The name of block.
	 */
	protected $block_name = 'before-after-slider';

	/**
	 * The single instance of the class.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @var WPMozo_Blocks_And_Addons_Block $_instance The instances of this class.
	 */
	protected static $_instance = null;

	/**
	 * The instance of this class.
	 *
	 * Ensures only one instance of WPMozo_Blocks_And_Addons_Block is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @return WPMozo_Blocks_And_Addons_Block - Main instance.
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

		$this->scripts[] = array(
			'handle' => $this->plugin_name . '-event-move',
			'src'    => WPMOZO_BLOCKS_AND_ADDONS_ASSETS_DIR_URL . 'js/jqueryEventMove/jquery_event_move.js',
			'deps'   => array( 'jquery' ),
			'ver'    => time(),
		);

		$this->scripts[] = array(
			'handle' => $this->plugin_name . '-imagesloaded',
			'src'    => WPMOZO_BLOCKS_AND_ADDONS_ASSETS_DIR_URL . 'js/imagesLoaded/imagesloaded.pkgd.min.js',
			'deps'   => array( 'jquery' ),
			'ver'    => time(),
		);

		$this->scripts[] = array(
			'handle' => $this->plugin_name . '-twentytwenty-script',
			'src'    => WPMOZO_BLOCKS_AND_ADDONS_ASSETS_DIR_URL . 'js/jqueryTwentyTwenty/jquery_twentytwenty.min.js',
			'deps'   => array( 'jquery', $this->plugin_name . '-event-move' ),
			'ver'    => time(),
		);

		$this->styles[] = array(
			'handle' => $this->plugin_name . '-twentytwenty-style',
			'src'    => WPMOZO_BLOCKS_AND_ADDONS_ASSETS_DIR_URL . 'css/twentytwenty/twentytwenty.css',
			'deps'   => array(),
			'ver'    => time(),
		);

		$this->args = array(
			'script_handles' => array(
				$this->plugin_name . '-event-move',
				$this->plugin_name . '-imagesloaded',
				$this->plugin_name . '-twentytwenty-script',
			),
			'style_handles'  => array(
				$this->plugin_name . '-twentytwenty-style',
				$this->plugin_name . '-before-after-slider-style',
			),
		);

	}

}
