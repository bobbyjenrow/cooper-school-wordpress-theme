<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cooper-school
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<header class="header">
		<?php get_template_part('mega-nav'); ?>
	    <div class="header__left">
				<img src="https://res.cloudinary.com/ds0f4qyyt/image/upload/v1543421792/cooper-logo-text_jwaypv.png" alt="">
	    </div>
	    <div class="header__right">
				<button id="main-nav-burger" class="hamburger hamburger--collapse mega-nav__hamburger" type="button">
				  <span class="hamburger-box">
				    <span class="hamburger-inner"></span>
						<span class="hamburger__subtext">Menu</span>
				  </span>
				</button>

	    </div>
	  </div>
	</header>
