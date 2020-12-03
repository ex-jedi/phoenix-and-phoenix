<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="/css/main.css?v=1.0">
	<link rel="stylesheet" href="<?php perch_page_attribute('css', array('template' => 'bits.html')) ;?>?v=1.0">
	<!-- Perch Meta -->
	<?php
	$domain        = 'https://'.$_SERVER["HTTP_HOST"];
	$mainurl           = perch_page_url(array(
										    'hide-extensions'    => true,
										    'hide-default-doc'   => true,
										    'add-trailing-slash' => false,
										    'include-domain'     => true,
										), true);
	$mainsitename      = "SITE NAME";
	$pagetitlename = " - SITE NAME";
	$sharing_image = '/images/default_fb_image.jpg';

	PerchSystem::set_var('domain',$domain);
	PerchSystem::set_var('mainurl',$mainurl);
	PerchSystem::set_var('mainsitename',$mainsitename);
	PerchSystem::set_var('pagetitlename',$pagetitlename);
	PerchSystem::set_var('sharing_image',$sharing_image);

	perch_page_attributes(array(
		'template' => 'default.html'
	));
	?>
<!-- Google Analytics -->
<?php perch_content('Analytics'); ?>

<!-- Cookie Warning -->
<?php perch_content("Cookie Warning"); ?>

</head>
	<body class="<?php perch_page_attribute('bodyClass', array('template' => 'bits.html' )); ?>">
				<div class="site-wrapper" itemscope itemtype="http://schema.org/LocalBusiness">
			<header class="main-header">
				<!-- Skip to main content link  -->
				<a class="show-on-focus"  href="#main-content">Skip to main content</a>
					<?php perch_pages_navigation(array(
							'hide-extensions' => true,
					)); ?>
			</header>
