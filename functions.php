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
define( 'CHILD_THEME_CLEARVIEW2018_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'clearview2018-theme-font', "https://fonts.googleapis.com/css?family=Lato&display=swap", 'all' );
	wp_enqueue_style( 'clearview2018-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_CLEARVIEW2018_VERSION, 'all' );
	wp_enqueue_style( 'clearview2018-main-css', get_stylesheet_directory_uri() . 'dist/main.css', array(''), CHILD_THEME_CLEARVIEW2018_VERSION, 'all' );
	wp_enqueue_script( 'clearview2018-main-js', get_stylesheet_directory_uri() . 'dist/main.js', array(''), CHILD_THEME_CLEARVIEW2018_VERSION, true );

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );