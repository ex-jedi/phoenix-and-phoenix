<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>
<?php perch_layout('portfolio-project-header'); ?>
<main class="main-content about-us-main-content" id="main-content">
<?php perch_pages_breadcrumbs(); ?>

  <?php perch_content_custom('Portfolio Project Content', []); ?>
</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('main-footer-end'); ?>
<!-- TODO: Remove debug -->
<!-- <?php PerchUtil::output_debug(); ?> -->
