import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    // Invoke
    this.itemsToReveal = els; // collection of items that contain 4 DOM el of feature-item
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoints() {
    /* eslint-disable */
    const that = this;
    this.itemsToReveal.each(function () {
      const currentItem = this;
      new Waypoint({
        element: currentItem, // the DOM to watch
        handler: function() { // what will happen to element
          $(currentItem).addClass('reveal-item--is-visible');
        },
        offset: that.offsetPercentage // bottom of the viewport
      });

    });
    /* eslint-enable */
  }
}

export default RevealOnScroll;
