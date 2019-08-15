<?php
//[cv_get_date]
function go_get_date( $atts ){
  $year = date("Y");

  return $year;

}
add_shortcode( 'cv_get_date', 'go_get_date' );
?>