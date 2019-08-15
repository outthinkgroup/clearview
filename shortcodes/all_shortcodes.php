<?php

class CV_Shortcodes{
  public function __construct() {
    $this->load_shortcodes();
  }
  private function load_shortcodes(){
    
    include( dirname( __FILE__ ) . '/form_gate.php');
    include( dirname( __FILE__ ) . '/get_date.php');
    
  }
}
new CV_Shortcodes();
?>