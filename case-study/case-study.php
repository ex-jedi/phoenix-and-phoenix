<?php include('../perch/runtime.php'); ?>
<?php perch_layout('main-header'); ?>
<main class="main-content about-us-main-content" id="main-content">

    <?php
    perch_content_custom('Products', array(
         'page' => '/portfolio.php',
         'template' => 'product_detail.html',
         'filter' => 'slug',
         'match' => 'eq',
         'value' => perch_get('s'),
         'count' => 1,
    ));
    ?>

</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('main-footer-end'); ?>
<!-- TODO: Remove debug -->
<?php PerchUtil::output_debug(); ?>
