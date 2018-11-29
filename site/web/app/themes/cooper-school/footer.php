<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cooper-school
 */

?>


	<footer class="footer">
	  <div class="container--footer">
			<div class="row--footer">
				<div class="column--footer-left">
		      <div class="text--contact">
						<span >The Cooper School, 13 Oakdale Place, Charleston, SC 29407</span>
						<span class="space">•</span>
						<span >(843) 573-1033</span>
		      </div>
		      <? get_template_part('social-bar') ?>
		      <div class="text-legal">
		        <h6>Copyright © 2018 The Cooper School, All Rights Reserved</h6>
		      </div>
		    </div>
		    <div class="column--footer-right">
		      <div class="newsletter">
		        <h5 class="heading--newsletter">Sign Up for Our Newsletter</h5>
		        <input class="input--newsletter" type="text" placeholder="Your Email Address" />
		      </div>
		    </div>
			</div>
	  </div>
	</footer>

</body>
</html>
