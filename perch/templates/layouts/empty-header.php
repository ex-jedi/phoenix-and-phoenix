<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="/css/main.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/main.css');?>">
	<?php $page_css_file	=  perch_page_attribute('css', array('template' => 'bits.html'), true); ?>
	<link rel="stylesheet" href="<?php echo $page_css_file ?>?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].$page_css_file);?>">
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
	<body class="<?php perch_page_attribute('bodyClass', array('template' => 'bits.html' )); ?>">
<!-- Cookie Warning -->
<?php perch_content("Cookie Warning"); ?>
				<div class="site-wrapper" itemscope itemtype="http://schema.org/LocalBusiness">
					<div class="sticky-footer-wrapper">
			<header class="header main-header">
				<!-- Skip to main content link  -->
				<a class="show-on-focus"  href="#main-content">Skip to main content</a>
				<div class="main-logo-wrapper">
					<a class="main-logo-wrapper-link" itemprop="url" href="<?php echo $domain ?>">
					<img class="hidden-main-logo" aria-hidden="true" itemprop="logo" src="/images/main-logo.png" alt="phoenix and phoenix main logo">
					<?php perch_content("Animated Main Logo"); ?>
				</a>
				</div>
					<?php perch_pages_navigation(array(
							'hide-extensions' => true,
							'levels'    => 1
					)); ?>
			</header>
				<?php perch_layout('nav-pull'); ?>