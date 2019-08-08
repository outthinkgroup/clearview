<?php
/**
 * Clearview2018 Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Clearview2018
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_CLEARVIEW2019_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'clearview2018-theme-font', "https://fonts.googleapis.com/css?family=Lato:400,400i,700,900&display=swap", 'all' );
	wp_enqueue_style( 'clearview2018-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_CLEARVIEW2019_VERSION, 'all' );
	wp_enqueue_style( 'clearview2018-main-css', get_stylesheet_directory_uri() . '/dist/main.css', CHILD_THEME_CLEARVIEW2019_VERSION, 'all' );
	wp_enqueue_script( 'clearview2018-main-js', get_stylesheet_directory_uri() . '/dist/main.js', CHILD_THEME_CLEARVIEW2019_VERSION, true );

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );


/* please remove this and add to a plugin */
/* this adds a shortcut to open up the modules column settings */
add_filter( 'fl_builder_keyboard_shortcuts', function( $shortcuts ) {
    $shortcuts['openColumnSettings'] = array(
        'label' => __( 'opens the column setting of the hovered module', 'my-plugin'),
        'keyCode' => 'c'
				);
		$shortcuts['openParentColumnSettings'] = array(
        'label' => __( 'opens the parent column setting of the hovered module', 'my-plugin'),
        'keyCode' => 'C'
        );
				
    return $shortcuts;
});
//adds js when bb is loaded
add_action( 'wp_enqueue_scripts', function() {
    // Check if Beaver Builder is active 
    if ( class_exists('FLBuilderModel') && FLBuilderModel::is_builder_active() ) {

        /**
         * Enqueue your custom JavaScript file
         *
         * Be sure to use the appropriate url reference function for whether your 
         * code is contained in a custom plugin or theme.
         *
         * Include fl-builder-min as a dependency for your script to ensure
         * Beaver Builder as well as jQuery are available when your script runs.
         */
        wp_enqueue_script('add-shortcut-open-col', 
            get_stylesheet_directory_uri() . '/dist/add-shortcuts.js', 
            array('fl-builder-min') );
    }
});