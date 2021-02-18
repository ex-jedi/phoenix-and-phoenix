<?php include('../perch/runtime.php'); ?>
<?php perch_layout('main-header'); ?>
<main class="main-content about-us-main-content" id="main-content">
            <h3>Nav</h3>
            <?php perch_pages_navigation(array(
                'from-path' => '/portfolio',
                'template' => 'portfolio_menu.html',
                'levels'    => 1,
                'siblings' => false));
            ?>
</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('main-footer-end'); ?>
<!-- TODO: Remove debug -->
<!-- <?php PerchUtil::output_debug(); ?> -->
