<?php
/**
 * The template for displaying the front page
 *
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package cooper-school
 */

get_header();
?>
<main class="main">
  <section class="section section--hero">
    <div class="hero">
      <div class="spacer"></div>
      <div class="container">
        <div class="hero__content">
          <div class="wrapper">
            <h1 class="th">Intentional, Thoughtful, Progressive Education in Charleston, South Carolina</h1>
            <button type="button" class="btn btn--hero btn--primary">What Are Your Values?</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section section--about container">
    <div class="row main__content ">
      <div class="column main__column--left">
        <img src="https://res.cloudinary.com/ds0f4qyyt/image/upload/v1543413294/photo-top-left_f5vo4i.jpg" class="img img-homepage-1" />
        <div class="column__item column__item--left">
          <h2>Our Future</h2>
          <p>Cultivating the next generation of innovators and explorers, curious scientists and mathematicians, imaginative authors and artists, and engaged change makers.</p>
          <a href="" class="link--important">Our Approach</a>
        </div>
        <div class="column__item column__item--left">
          <h2>Whole Child Education</h2>
          <p>Our responsive classrooms value cooperation, assertion, responsibility, empathy, nurturing and gratitude.</p>
          <a href="" class="link--important">Apply Today</a>
        </div>
      </div>
      <div class="column main__column--right">
        <div class="column__item column__item--right">
          <h1>How Children Learn is as Important as What Children Learn</h1>
          <button type="button" class="btn btn--primary">Take a Tour</button>
        </div>
        <img src="https://res.cloudinary.com/ds0f4qyyt/image/upload/v1543413294/photo-bottom-right_rjxv76.jpg" class="img img-homepage-2" />
      </div>
    </div>
  </section>
  <section class="section section--blog">
    <h1 class="text-section-heading">The Latest</h1>
    <div class="row section__row--first">
      <a href=""  class="btn btn--blog btn--bg-blue">School Blog</a>
      <a href=""  class="btn btn--blog btn--bg-red">Kindergarten</a>
      <a href=""  class="btn btn--blog btn--bg-dblue">First Grade</a>
      <a href=""  class="btn btn--blog btn--bg-green">Second Grade</a>
    </div>
    <div class="row section__row--second">
      <a href=""  class="btn btn--blog btn--bg-orange">Third Grade</a>
      <a href=""  class="btn btn--blog btn--bg-purple">Fourth Grade</a>
      <a href=""  class="btn btn--blog btn--bg-yellow">Fifth Grade</a>
    </div>
  </section>
  <section class="section section--events">
    <h1 class="text-section-heading">Upcoming Events</h1>
    <div class="section__events row section__row">
      <div class="event event--first">
        <img src="https://res.cloudinary.com/ds0f4qyyt/image/upload/c_scale,w_315/v1543413294/img-galler-left_zx7w3h.jpg" alt="event image" />
        <h5 class="event__date">Nov 5 - 3:00 pm</h5>
        <h2 class="event__title">Event Name</h2>
        <p class="event__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <a class="link--important">Learn More</a>
      </div>
      <div class="event event--second">
        <img src="https://res.cloudinary.com/ds0f4qyyt/image/upload/c_scale,w_315/v1543413292/img-gallery-center_phfu7m.jpg" alt="event image" />
        <h5 class="event__date">Nov 5 - 3:00 pm</h5>
        <h2 class="event__title">Event Name</h2>
        <p class="event__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <a class="link--important">Learn More</a>
      </div>
      <div class="event event--third">
        <img src="https://res.cloudinary.com/ds0f4qyyt/image/upload/c_scale,w_315/v1543413292/img-gallery-right_j5ivjk.jpg" alt="event image" />
        <h5 class="event__date">Nov 5 - 3:00 pm</h5>
        <h2 class="event__title">Event Name</h2>
        <p class="event__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <a class="link--important">Learn More</a>
      </div>
    </div>
  </section>
  <section class="section section--mission container">
    <div class="wrapper">
      <h2 class="text-mission-heading">Our Model of Creative, Contemporary Teaching Makes Learning Joyful Every Day </h2>
      <p class="text-mission-body">The Cooper School’s intentional model of progressive education means your child will experience an integrated, rigorous, and individualized curriculum based on research and experience. Our attention to the whole child means we balance academics, athletics, and emotional intelligence. </p>
    </div>
  </section>
</main>
<?php
get_footer();
