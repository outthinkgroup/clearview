<?php
//[cv_gated_single]
function gated_single( $atts ){
  global $post;
  ob_start();
  //out puts the column link if there is a url in the field
  if(get_field('column_link')){
    ?>
    <a style="color:white; padding:6px 15px; margin-bottom:20px;" class="blue-button" href="<?php echo get_field('column_link') ?>"> View Article</a>
    <?php
  }

  //this creates an array of the resource types assigned to this resource
  $terms = get_the_terms($post->ID,'resource_type');
  if(!$terms){
    return null;// if none are set need to escape
  }
  $term_array = array();
  foreach($terms as $term){
    $name = $term->name;
    array_push($term_array, $name);
  }
  // this checks to see if the resource has the free download resource type
  //if it does not it escapes the function
  if(in_array('Free Download', $term_array)){
 
  ?>
  <div class="resource-gate" >
  <?php
  if(isset($_COOKIE['cv_subscribed']) or !get_field('gated')){
  ?>
    <div class="resource-gate__download-wrapper">
      <div class="resource-gate__download"><a class="blue-button download__link" style="color:white" href="<?php echo get_field('download_pdf_url') ?>" >Download Resource</a></div>
    </div>
  <?php }else{ ?>
      <div class="resource-gate__form-wrapper">
        <div class="resource-gate__form">
          <h3>Fill out this form to get access to this resource</h3>
          <?php echo do_shortcode('[gravityform id='. get_field('gated_form') .' title=false description=false]'); 
          ?>
        </div>
      </>
    </div>
  <?php
  }
   ?>
  </div>
   <?php
  } 
  $output_string = ob_get_contents();
  ob_end_clean();

  return $output_string;

}
add_shortcode( 'cv_gated_single', 'gated_single' );


//function on gf submit to add cookie to user
function on_gf_submit($entry, $form){
  $form_ids_to_check = array(4,3,2);
  if(in_array($form['id'], $form_ids_to_check)){
    //create cookie
    $cookie_gate = "cv_subscribed";
    $cookie_value = "true";
    setcookie($cookie_gate, $cookie_value, time() + (86400 * 30 * 12), "/"); // 86400 = 1 day
    header("Refresh:0");
  }
}
add_action( 'gform_after_submission', 'on_gf_submit', 10, 2 );


?>