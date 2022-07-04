   <?php perch_content_create('Portfolio Project Content', array(
        'template' => 'portfolio/portfolio_project_content.html',
    ));
   ?>

<?php perch_content_create('Portfolio Project Header Content', array(
        'template' => 'portfolio/portfolio_header_content.html',
    ));
   ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="/css/main.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/main.css');?>">
	<link rel="stylesheet" href="/css/portfolio.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/portfolio.css');?>">
	<!-- Typekit  -->
	<link rel="stylesheet" href="https://use.typekit.net/xvs0zel.css">
	<!-- Perch Meta -->
	<?php
	$domain        = 'https://'.$_SERVER["HTTP_HOST"];
	$mainurl           = perch_page_url(array(
										    'hide-extensions'    => true,
										    'hide-default-doc'   => true,
										    'add-trailing-slash' => false,
										    'include-domain'     => true,
										), true);
	$mainsitename      = "phoenix & phoenix";
	$pagetitlename = " - phoenix & phoenix";
	$sharing_image = '/images/default-sharing-image.jpg';

	PerchSystem::set_var('domain',$domain);
	PerchSystem::set_var('mainurl',$mainurl);
	PerchSystem::set_var('mainsitename',$mainsitename);
	PerchSystem::set_var('pagetitlename',$pagetitlename);
	PerchSystem::set_var('sharing_image',$sharing_image);

	perch_page_attributes(array(
		'template' => 'default.html'
	));
	?>
	<?php perch_content("Analytics"); ?>
</head>
	<body class="portfolio-body">
<!-- Cookie Warning -->
<?php perch_content("Cookie Warning"); ?>
				<div class="site-wrapper portfolio-project-page-wrapper" itemscope itemtype="http://schema.org/LocalBusiness">
					<div class="sticky-footer-wrapper">
			<header class="header main-header">
				<!-- Skip to main content link  -->
				<a class="show-on-focus"  href="#main-content">Skip to main content</a>
				<div class="main-logo-wrapper">
					<a class="main-logo-wrapper" itemprop="url" href="<?php echo $domain ?>">
					<img class="hidden-main-logo" aria-hidden="true" itemprop="logo" src="/images/main-logo.png" alt="phoenix and phoenix main logo">
					<?php perch_content("Animated Main Logo"); ?>
				</a>
				</div>
					<?php perch_pages_navigation(array(
							'hide-extensions' => true,
							'levels'    => 1
					)); ?>

        <?php perch_content_custom('Portfolio Project Header Content', []); ?>
			</header>
      <?php perch_layout('nav-pull'); ?>