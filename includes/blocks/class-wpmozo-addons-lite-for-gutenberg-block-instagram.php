<?php
/**
 * Define methods for before after slider block.
 *
 * @link       https://elicus.com
 * @since      1.0.0
 *
 * @package    WPMozo_Addons_For_Gutenberg
 * @subpackage WPMozo_Addons_For_Gutenberg/includes
 */

/**
 * This class responsible for defining all methods for before after slider block.
 *
 * @since      1.0.0
 * @package    WPMozo_Addons_For_Gutenberg
 * @subpackage WPMozo_Addons_For_Gutenberg/includes
 * @author     Elicus <hello@elicus.com>
 */
class WPMozo_Addons_Lite_Gutenberg_Block_Instagram extends WPMozo_Addons_Lite_Gutenberg_Block {

    /**
     * The name of block.
     *
     * @since 1.0.0
     * @access protected
     * @var string $block_name The name of block.
     */
    protected $block_name = 'instagram';

    /**
     * The single instance of the class.
     *
     * @since 1.0.0
     * @access protected
     * @var WPMozo_Addons_Gutenberg_Block $_instance The instances of this class.
     */
    protected static $_instance = null;

    /**
     * The instance of this class.
     *
     * Ensures only one instance of WPMozo_Addons_Gutenberg_Block is loaded or can be loaded.
     *
     * @since 1.0.0
     * @return WPMozo_Addons_Gutenberg_Block - Main instance.
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

    }

}
