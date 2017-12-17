import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    // Invoke
    this.itemsToReveal = els; // collection of items that contain DOM el of feature-item
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoints() {
    /* eslint-disable */
    const that = this; // points to main Class
    // console.log(this.itemsToReveal);
    this.itemsToReveal.each(function () {
      const currentItem = this;
      new Waypoint({
        element: currentItem, // the DOM to watch / trigger
        handler: function(direction) { // what will happen to element
          if (direction === 'down') {
            $(currentItem).addClass('reveal-item--is-visible');
          } else {
            $(currentItem).removeClass('reveal-item--is-visible');
          }
        },
        offset: that.offsetPercentage // will activated at bottom of the viewport
      });
    });
    /* eslint-enable */
  }
}

export default RevealOnScroll;
