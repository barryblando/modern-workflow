import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    // Invoke
    this.lazyImages = $('.lazyload');
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__title');
    // grab any elements with .page-section
    this.pageSections = $('.page-section');
    // grab all links to reset
    this.headerLinks = $('.primary-nav a');
    this.createHeaderWaypoint();
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    /* eslint-disable */
    // Fixed lazyload for interrupting the waypoints
    this.lazyImages.load(function () {
      Waypoint.refreshAll();
    })
    /* eslint-enable */
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll({
      easing: 'swing',
      speed: 600
    });
  }

  createHeaderWaypoint() {
    /* eslint-disable */
    // points to main Class
    const that = this;
    // console.log(this.headerTriggerElement[0]);
    new Waypoint({
      // get the array-ish DOM element title
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction === 'down') {
          that.siteHeader.addClass('site-header--dark');
        } else {
          that.siteHeader.removeClass('site-header--dark');
        }
      }
    });
  }

  createPageSectionWaypoints() {
    const that = this;
    this.pageSections.each(function() {
      const currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === 'down') {
            // extract custom attribute in the div
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).toggleClass('is-current-link');
          }
        },
        offset: '18%'
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === 'up') {
            // extract custom attribute in the div
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).toggleClass('is-current-link');
          }
        },
        offset: '-40%'
      });
    });
  }
  /* eslint-enable */
}

export default StickyHeader;
