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



/* adds logo to login  */
function my_login_logo() { ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/full-logo.svg);
		width:100%;
		background-size: contain;
		background-repeat: no-repeat;
        	padding-bottom: 30px;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );

//gets all shortcodes
function require_shortcodes_on_init(){
	require(dirname( __FILE__ ) . '/shortcodes/all_shortcodes.php');
}
add_action('init', 'require_shortcodes_on_init');

 //cutomize the main menu to add the buttons
function add_search_form($items, $args) {
	if( $args->theme_location == 'primary' ){
	$items .= '</ul><ul class="cv-util-nav">'
					.	'<li class="menu-item flex-end">'
					. '<div class="menu-item__button-row">'
					. '<a class="cv-btn cv-btn--transparent">Client Login</a>'
					. '<a class="cv-btn">Get a Demo</a>'
					. '</div>'
					. '</li>';
	}
return $items;
}
add_filter('wp_nav_menu_items', 'add_search_form', 10, 2);
