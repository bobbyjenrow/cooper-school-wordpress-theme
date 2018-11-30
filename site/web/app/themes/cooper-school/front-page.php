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
    <section class="s-hero">
      <div class="hero">
          <div class="container">
            <div class="row--hero">
              <div class="column--hero hero__content">
                <h1 class="th">Intentional, Thoughtful, Progressive Education in Charleston, South Carolina</h1>
                <button type="button" class="btn btn--hero">What Are Your Values?</button>
              </div>
            </div>
        </div>
      </div>
    </section>
    <div class="img-wrap">
      <section class="s-about container">
        <div class="row--about">
          <div class="column--about-left">
            <img src="https://res.cloudinary.com/ds0f4qyyt/image/upload/v1543413294/photo-top-left_f5vo4i.jpg" class="img img-homepage-1" />
            <div class="column__item column__item--left">
              <h2>Our Future</h2>
              <p>Cultivating the next generation of innovators and explorers, curious scientists and mathematicians, imaginative authors and artists, and engaged change makers.</p>
              <a href="" class="link--underline">Our Approach</a>
            </div>
            <div class="column__item column__item--left">
              <h2>Whole Child Education</h2>
              <p>Our responsive classrooms value cooperation, assertion, responsibility, empathy, nurturing and gratitude.</p>
              <a href="" class="link--underline">Apply Today</a>
            </div>
          </div>
          <div class="column--about-right">
            <div class="column__item column__item--right">
              <h1>How Children Learn is as Important as What Children Learn</h1>
              <button type="button" class="btn btn--cta">Take a Tour</button>
            </div>
            <img src="https://res.cloudinary.com/ds0f4qyyt/image/upload/v1543413294/photo-bottom-right_rjxv76.jpg" class="img img-homepage-2" />
          </div>
        </div>
      </section>
    </div>

  <section class="container--blog s-blog">
    <h1 class="text-heading">The Latest</h1>
    <div class="row--blog">
      <div class="column--blog">
        <a href=""  class="btn btn--blog btn--bg-blue">School Blog</a>
      </div>
      <div class="column--blog">
        <a href=""  class="btn btn--blog btn--bg-red">Kindergarten</a>
      </div>
      <div class="column--blog">
        <a href=""  class="btn btn--blog btn--bg-dblue">First Grade</a>

      </div>
      <div class="column--blog">
        <a href=""  class="btn btn--blog btn--bg-green">Second Grade</a>
      </div>

      <div class="column--blog">
        <a href=""  class="btn btn--blog btn--bg-orange">Third Grade</a>
      </div>
      <div class="column--blog">
        <a href=""  class="btn btn--blog btn--bg-purple">Fourth Grade</a>
      </div>
      <div class="column--blog">
        <a href=""  class="btn btn--blog btn--bg-yellow">Fifth Grade</a>
      </div>
    </div>
  </section>
  <div class="img-wrap--event">
    <section class="container--events s-events">
      <h1 class="text-heading">Upcoming Events</h1>
      <div class="row--events">
        <div class="column--event">
          <img src="https://res.cloudinary.com/ds0f4qyyt/image/upload/c_scale,w_315/v1543413294/img-galler-left_zx7w3h.jpg" alt="event image" />
          <div class="event__container">
            <h5 class="event__date">Nov 5 - 3:00 pm</h5>
            <h2 class="event__title">Event Name</h2>
            <p class="event__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <a class="link--underline">Learn More</a>
          </div>
        </div>
        <div class="column--event">
          <img src="https://res.cloudinary.com/ds0f4qyyt/image/upload/c_scale,w_315/v1543413292/img-gallery-center_phfu7m.jpg" alt="event image" />
          <div class="event__container">
            <h5 class="event__date">Nov 6 - 4:00 pm</h5>
            <h2 class="event__title">Event Name</h2>
            <p class="event__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <a class="link--underline">Learn More</a>
          </div>
        </div>
        <div class="column--event">
          <img src="https://res.cloudinary.com/ds0f4qyyt/image/upload/c_scale,w_315/v1543413292/img-gallery-right_j5ivjk.jpg" alt="event image" />
          <div class="event__container">
            <h5 class="event__date">Nov 7 - 2:00 pm</h5>
            <h2 class="event__title">Event Name</h2>
            <p class="event__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <a class="link--underline">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  </div>

  <section class="s-mission container">
    <div class="text-wrapper--center row--mission">
      <div class="column--mission">
        <h2 class="text-heading--mission">Our Model of Creative, Contemporary Teaching Makes Learning Joyful Every Day </h2>
        <p class="text-body--mission">The Cooper School’s intentional model of progressive education means your child will experience an integrated, rigorous, and individualized curriculum based on research and experience. Our attention to the whole child means we balance academics, athletics, and emotional intelligence. </p>
      </div>
    </div>
  </section>
</main>
<?php
get_footer();
