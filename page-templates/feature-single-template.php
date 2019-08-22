<?php
/* 
Template Name: Feature Single
*/
global $post;
$id = $post->ID;
$parent = wp_get_post_parent_id( $id );
?>
<div class="feature-single__wrapper--sidebar" data-state="">
  <?php
get_header();
?>
<main class="feature-single-page" data-pageid="<?php echo $id; ?>">
    
    <div class="feature-single__article">
      <section class="article__hero">
        <div class="hero__wrapper">
          <div class="hero__content">
            <h1><?php echo the_title(); ?></h1>
            <a href="#" class="cv-btn get_a_demo_trigger">Get A Demo</a>
          </div>
          <div class="hero__image">
            <!-- this should pullin the featured image -->
            <img src="/wp-content/uploads/2019/08/straightpurpledashboard-screens.png" alt="artistic rendering of dashboards"/>
          </div>
        </div>
      </section>
      <section class="article__content">
        <div class="content__wrapper">
          <?php echo apply_filters('the_content', $post->post_content); ?>
        </div>

      </section>
      
    </div>
  </main>
  <div class="feature-single__sidebar"  data-stick="false"><!-- wrapper --> <!-- will recieve data-sticky -->
    <div class="sidebar__wrapper">
      <div class="sidebar__logo">
        <div class="site-title"><a href="<?php echo get_site_url();?>">
      <?php echo bloginfo('name'); ?>
    </a></div>
      </div>
      <h3>InFocus Features</h3><!-- may need to be editable -->
      <ul class="sidebar__list">
      <?php   
        /* may need to change the order to be editable */
        $args = array(
          'post_parent' => $parent,
          'post_type' => 'page',
          'posts_per_page' => '-1',
          'orderby'   => 'menu_order',
          'order'   =>    'DESC'
        );
        $sub_pages = get_posts($args);
        foreach($sub_pages as $sub_page){
          ?>
          <li><a href="<?php echo get_permalink($sub_page->ID); ?>" class="list__link"><?php echo $sub_page->post_title; ?></a></li>
          <?php 
        }
      ?>
      </ul>
      
    </div>
  </div> 
  <div class="sidebar__toggle">
    <button class="toggle__button">
      <div class="toggle-button__wrapper">
        <span class="toggle__arrow"></span>
      </div>    
    </button>
  </div>
  <div class="sidebar__toggle--mobile">
    <button class="toggle__button">
      <div class="toggle-button__wrapper">
        View All InFocus Features
        <span class="toggle__arrow"></span>
      </div>    
    </button>
  </div>

  <?php
get_footer();
?>
</div>