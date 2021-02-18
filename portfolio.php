<?php include('perch/runtime.php'); ?>
<?php perch_layout('main-header'); ?>
<main class="main-content about-us-main-content" id="main-content">

    <?php
    perch_content_create('Products', array(
         'template'   => 'product_detail.html',
         'multiple'    => true,
         'edit-mode' => 'listdetail',
    ));

        perch_content_custom('Products', array(
         'template' => 'product_listing.html',
    ));
    ?>

</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('main-footer-end'); ?>
<!-- TODO: Remove debug -->
<!-- <?php PerchUtil::output_debug(); ?> -->
