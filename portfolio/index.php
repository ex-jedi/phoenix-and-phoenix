<?php include('../perch/runtime.php'); ?>
<?php perch_layout('main-header'); ?>
<main class="main-content about-us-main-content" id="main-content">
<section class="portfolio-section portfolio-index-section">
    <?php perch_content("Portfolio Index Subheading"); ?>
    <?php perch_pages_navigation(array(
        'from-path' => '/portfolio',
        'hide-extensions' => true,
        'template' => 'portfolio_menu.html',
        'levels'    => 1,
        'siblings' => false));
    ?>
</section>
<?php perch_content("Illustration Portfolio Section"); ?>
<?php perch_content("Contact Section"); ?>
</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('portfolio-footer-end'); ?>

