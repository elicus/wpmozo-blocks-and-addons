<?php
/**
 * Define methods for gutenberg block.
 *
 * @link       https://elicus.com
 * @since      1.0.0
 *
 * @package    WPMozo_Addons_Lite_For_Gutenberg
 * @subpackage WPMozo_Addons_Lite_For_Gutenberg/includes
 */

/**
 * This class responsible for defining all methods for gutenberg block.
 *
 * @since      1.0.0
 * @package    WPMozo_Addons_Lite_For_Gutenberg
 * @subpackage WPMozo_Addons_Lite_For_Gutenberg/includes
 * @author     Elicus <hello@elicus.com>
 */
abstract class WPMozo_Addons_Lite_Gutenberg_Block {

    /**
     * The unique identifier of this plugin.
     *
     * @since 1.0.0
     * @access protected
     * @var string $plugin_name The string used to uniquely identify this plugin.
     */
    protected $plugin_name;

    /**
     * The arguments of block.
     *
     * @since 1.0.0
     * @access protected
     * @var array $args The arguments.
     */
    protected $args;

    /**
     * The scripts for the block.
     *
     * @since 1.0.0
     * @access protected
     * @var array $scripts The scripts.
     */
    protected $scripts = array();

    /**
     * The styles for the block.
     *
     * @since 1.0.0
     * @access protected
     * @var array $styles The styles.
     */
    protected $styles = array();

    /**
     * The namespace of block.
     *
     * @since 1.0.0
     * @access protected
     * @var string $block_namespace The namespace of block.
     */
    protected $block_namespace = 'wpmozo';

    /**
     * The name of block.
     *
     * @since 1.0.0
     * @access protected
     * @var string $block_name The name of block.
     */
    protected $block_name;

    /**
     * Initialize the class and set its properties.
     *
     * @since 1.0.0
     */
    public function __construct() {

        $wpmozo_adfgu = wpmozo_adfgu();
        $this->plugin_name = $wpmozo_adfgu->get_plugin_name();

    }

    /**
     * Get name of block.
     * 
     * @since 1.0.0
     * @return string The name of block.
     */
    public function get_name(){
        return $this->block_name;
    }

    /**
     * Get full name of block.
     * 
     * @since 1.0.0
     * @return string The full name of block.
     */
    public function get_full_name(){
        return sprintf( '%1$s/%2$s', $this->block_namespace, $this->block_name );
    }

    /**
     * Get script handle.
     * 
     * @since 1.0.0
     * @param string $name The name of script.
     * @param string $type The type of script.
     * @return string The script handle.
     */
    public function get_script_handle( $name, $type ){

        return sprintf( '%1$s-%2$s-%3$s-%4$s',
            $this->plugin_name,
            $this->block_name,
            $name,
            $type
        );
    }

    /**
     * Initialize the block.
     * 
     * @since 1.0.0
     */
    public function init(){

        $this->register_scripts();
        $this->register_style();
        $this->after_init();

    }

     /**
     * After Initialize the block.
     * 
     * @since 1.0.0
     */
    public function after_init(){}

    /**
     * Register the scripts of block.
     * 
     * @since 1.0.0
     */
    public function register_scripts(){

        $default_args = array(
            'deps' => array(),
            'ver' => false,
            'args' => array(),
        );

        if ( ! empty( $this->scripts ) ) {
            foreach ( $this->scripts as $script_key => $script_args ) {
                $script_args = wp_parse_args( $script_args, $default_args );
                wp_register_script(
                    $script_args['handle'],
                    $script_args['src'],
                    $script_args['deps'],
                    $script_args['ver'],
                    $script_args['args']
                );
            }
        }

    }

    /**
     * Register the styles of block.
     * 
     * @since 1.0.0
     */
    public function register_style(){

         $default_args = array(
            'deps' => array(),
            'ver' => false,
            'media' => 'all',
        );

        if ( ! empty( $this->styles ) ) {
            foreach ( $this->styles as $style_key => $style_args ) {
                $style_args = wp_parse_args( $style_args, $default_args );
                wp_register_style(
                    $style_args['handle'],
                    $style_args['src'],
                    $style_args['deps'],
                    $style_args['ver'],
                    $style_args['media']
                );
            }
        }

    }

    /**
     * Register the block.
     * 
     * @since 1.0.0
     */
    public function register(){
        
        $this->init();

        $args = apply_filters( 'wpmozo_addons_lite_gutenberg_block_' . $this->get_name() . '_args', $this->args );
        $full_name = $this->get_full_name();

        register_block_type( $full_name, $args );

    }

}
