# Travel Site

[![dependencies Status](https://david-dm.org/barryblando/modern-workflow/status.svg)](https://david-dm.org/barryblando/modern-workflow)
[![devDependencies Status](https://david-dm.org/barryblando/modern-workflow/dev-status.svg)](https://david-dm.org/barryblando/modern-workflow?type=dev)

A hands-on project from [Git a Web Developer Job: Mastering The Modern Workflow](https://www.udemy.com/git-a-web-developer-job-mastering-the-modern-workflow/learn/v4)

## [Live Demo](https://barryblando.github.io/modern-workflow/)

You can see a complete working example [here](https://barryblando.github.io/modern-workflow/)

## Features

* Revealing elements on scroll

* Icon sprite for faster page loads

* Lazy loading images for faster page loads

* Smooth scrolling to anchor links

* Responsive web design (RWD): Mobile-first approach, Responsive images

  -[What are Mobile-First and Desktop-First approaches?](https://zellwk.com/blog/how-to-write-mobile-first-css/)

  -[Why does mobile first responsive design tend to not use max-width queries alongside the min-width queries?](https://stackoverflow.com/questions/19472199/why-does-mobile-first-responsive-design-tend-to-not-use-max-width-queries-alongs)

  -[An Introduction to Mobile-First Media Queries](https://www.sitepoint.com/introduction-mobile-first-media-queries/)

* Support for responsive images and svg icons in legacy browsers

* Mixins for [Media Queries](https://www.emailonacid.com/blog/article/email-development/emailology_media_queries_demystified_min-width_and_max-width)

* Design Patterns -Cleaner Code- using B.E.M

### Custom Features

* Add scroll to top feature

## Getting Started

Follow the instructions below to set up the environment and run this project on your local machine

### Prerequisites

* Node.js
* Yarn
* ESLint

### Installing

1. Download ZIP or clone this repo
```
> git clone https://barryblando.github.io/modern-workflow.git
```

2. Install dependencies via NPM
```
> yarn install
```

3. Install gulp package globally to execute gulp command on your machine
```
> yarn global add gulp
```

4. Start the website
```
> gulp watch
```

5. See it up and running on http://localhost:3000

### Build

Run the following command (all files will be put inside the folder "docs")
```
> gulp build
```

## Built With

### Frontend

* babel
* jquery
* jquery-smooth-scroll
* waypoints
* lazysizes
* picturefill
* normalize.css
* postcss

### Utils

* webpack
* gulp

## Course Notes

### CSS Architecture

* This project follows [B.E.M rules](http://getbem.com/) to limit cascade and create single-responsibility blocks for making the relationship between HTML and CSS clear

  * B: Block - an independent, reusable part of the design
  ```css
  .large-hero {
    positiion: relative;
  }
  ```

  * E: Element (__) - belongs to a block and cannot be used outside of the block it belongs to
  ```css
  .large-hero__title {
    font-weight: 300;
    color: #2f5572;
    font-size: 4.8rem;
  }
  ```

  * M: Modifier (--) - can be used on a block or an element to indicate a change to the default state of an object
  ```html
  <a class="btn btn--orange btn--large" ... >
  ```

### Responsive Images and Image resolution using srcset

* For Mobile First Patterns to 4K Resolution and Up, I use [SIZZY](http://sizzy.co/) for Responsive Test

  * 1920w ( 1920px Wide of Image), on the source, smaller images must be put first (In order for browser to understand and which one to choose based on the devices width, screen size, and pixel density) and followed up by large images, when doing Mobile first Approach you gotta use min-width, Where in Desktop Approach you should use max width. (Vice-Versa)

  [CSS Tricks: Responsive Images](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)
  [Sitepoint: Responsive Images](https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/)

  ```html
    <picture>
      <source media="(min-width: 1380px)" srcset="assets/images/hero--large.jpg 1920w, assets/images/hero--large-hi-dpi.jpg 3840w">
      <source media="(min-width: 990px)" srcset="assets/images/hero--medium.jpg 1380w, assets/images/hero--medium-hi-dpi.jpg 2760w">
      <source media="(min-width: 640px)" srcset="assets/images/hero--small.jpg 990w, assets/images/hero--small-hi-dpi.jpg 1980w">
      <img srcset="assets/images/hero--smaller.jpg 640w, assets/images/hero--smaller-hi-dpi.jpg 1280w" alt="Coastal view of ocean and mountains">
    </picture>
  ```

  * sizes means to tell browser that image is going to be displayed at specific sizes instead of full width of the browser, not like hero image that need to take full width of the browser
  ```html
  <picture>
    <source sizes="404px" media="(min-width: 1020px)" srcset="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w">
    <source sizes="320px" media="(min-width: 800px)" srcset="assets/images/our-start-portrait.jpg 382w, assets/images/our-start-portrait-hi-dpi.jpg 764w">
    <img srcset="assets/images/our-start-landscape.jpg" alt="Our founder, Jane Doe">
  </picture>
  ```

  * here I didn't use picture element 'cause I just want to swap resolutions only using srcset, media query starting at 970px, if under 970px mobile won't download hi res / dpi and just dl & use the ~100viewport of device width.
  ```html
  <img sizes="(min-width: 970px) 976px, 100vw" srcset="assets/images/first-trip-low-res.jpg 565w, assets/images/first-trip.jpg 976w, assets/images/first-trip-hi-dpi.jpg 1952w" alt="Couple walking down a street.">
  ```