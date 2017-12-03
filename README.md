# Travel Site

[![dependencies Status](https://david-dm.org/barryblando/modern-workflow/status.svg)](https://david-dm.org/barryblando/modern-workflow)
[![devDependencies Status](https://david-dm.org/barryblando/modern-workflow/dev-status.svg)](https://david-dm.org/barryblando/modern-workflow?type=dev)

A hands-on project from [Udemy: Git a Web Developer Job: Mastering The Modern Workflow](https://www.udemy.com/git-a-web-developer-job-mastering-the-modern-workflow/learn/v4)

## [Live Demo](https://barryblando.github.io/modern-workflow/)

You can see a complete working example [here](https://barryblando.github.io/modern-workflow/)

## Features

* Revealing elements on scroll

* Icon sprite for faster page loads

* Lazy loading images for faster page loads

* Smooth scrolling to anchor links

* Responsive web design (RWD): mobile-first approach, responsive images

* Support for responsive images and svg icons in legacy browsers

### Custom Features

* Add scroll to top feature

## Getting Started

Follow the instructions below to set up the environment and run this project on your local machine

### Prerequisites

* Node.js

### Installing

1. Download ZIP or clone this repo
```
> git clone https://barryblando.github.io/modern-workflow.git
```

2. Install dependencies via NPM
```
> npm install
```

3. Install gulp package globally to execute gulp command on your machine
```
> npm install gulp -g
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

* For Mobile First Patterns to 4K Resolution and Up

  * 1920w ( 1920px Wide of Image), on the source, large images must be put first in order for browser to understand

  [CSS Tricks: Responsive Images](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)
  [Sitepoint: Responsive Images](https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/)

  ```html
    <picture>
      <source media="(min-width: 1380px)" srcset="assets/images/hero--large.jpg 1920w, assets/images/hero--large-hi-dpi.jpg 3840w">
      <source media="(min-width: 990px)" srcset="assets/images/hero--medium.jpg 1380px, assets/images/hero--medium-hi-dpi.jpg 2760w">
      <source media="(min-width: 640px)" srcset="assets/images/hero--small.jpg, assets/images/hero--small-hi-dpi.jpg">
      <img src="assets/images/hero--smaller.jpg" alt="Coastal view of ocean and mountains">
    </picture>
  ```