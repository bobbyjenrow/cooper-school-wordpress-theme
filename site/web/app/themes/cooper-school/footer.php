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



	  <footer class="footer container--footer">
			<div class="row--footer">
				<div class="column--footer-left">
		      <div class="text--contact">
						<span >The Cooper School, 13 Oakdale Place, Charleston, SC 29407</span>
						<span class="space">•</span>
						<span >(843) 573-1033</span>
		      </div>
		      <? get_template_part('social-bar') ?>
		    </div>
		    <div class="column--footer-right">
		      <div class="newsletter">
		        <h5 class="heading--newsletter">Sign Up for Our Newsletter</h5>
						<form class="form--newsletter" action="index.html" method="post">
							<input class="input--newsletter" type="text" placeholder="Your Email Address" />
							<a class="submit-newsletter" >
								<svg xmlns="http://www.w3.org/2000/svg" class="form-arrow"	width="12" height="12" viewBox="0 0 24 24">
									<path d="M6 0l12 12-12 12z"/>
								</svg>
							</a>
						</form>
		      </div>
		    </div>
				<div class="column--footer-bottom">
					<span class="text--legal">Copyright © 2018 The Cooper School, All Rights Reserved</span>
				</div>
			</div>
	</footer>
</body>
</html>
