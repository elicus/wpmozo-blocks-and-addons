<?php
/**
 * Define all blocks of plugin.
 *
 * @link       https://elicus.com
 * @since      1.0.0
 *
 * @package    WPMozo_Addons_For_Gutenberg
 * @subpackage WPMozo_Addons_For_Gutenberg/includes
 */

/**
 * This class responsible for defining all blocks of the plugin.
 *
 * @since      1.0.0
 * @package    WPMozo_Addons_For_Gutenberg
 * @subpackage WPMozo_Addons_For_Gutenberg/includes
 * @author     Elicus <hello@elicus.com>
 */
class WPMozo_Addons_Gutenberg_Blocks {

    /**
     * The single instance of the class.
     *
     * @since 1.0.0
     * @access protected
     * @var WPMozo_Addons_Gutenberg_Blocks $_instance The instances of this class.
     */
    protected static $_instance = null;

    /**
     * The instance of this class.
     *
     * Ensures only one instance of WPMozo_Addons_Gutenberg_Blocks is loaded or can be loaded.
     *
     * @since 1.0.0
     * @return WPMozo_Addons_Gutenberg_Blocks - Main instance.
     */
    public static function instance() {
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

	/**
	 * Get all blocks class name.
	 *
	 * @since 1.0.0
	 * @return array The array of all block classes.
	 */
	public function get_blocks() {

        $blocks = array(
            'beforeafterslider' => 'Beforeafterslider',
            'contenttoggle' => 'Contenttoggle',
            'fancyheading' => 'Fancyheading',
            'instagram' => 'Instagram',
        );

        return $blocks;
	}

    /**
     * Register all blocks.
     *
     * @since 1.0.0
     */
    public function register_blocks() {

        require_once  WPMOZO_ADDONS_GUTENBERG_INC_DIR_PATH . 'class-wpmozo-addons-gutenberg-block.php';
        $blocks = $this->get_blocks();

        foreach ($blocks as $block_key => $block) {
            
            $path = sprintf( 
                '%1$sclass-wpmozo-addons-for-gutenberg-block-%2$s.php',
                WPMOZO_ADDONS_GUTENBERG_BLOCKS_DIR_PATH,
                $block_key
            );
            $class_name = sprintf( 'WPMozo_Addons_Gutenberg_Block_%1$s', $block );

            require_once  $path;

            $block_object = $class_name::instance();
            $block_object->register();
            
        }

    }

}
