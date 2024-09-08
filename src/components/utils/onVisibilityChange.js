import { isElementInViewport } from './isElementInViewport'

export function onVisibilityChange(el, callback) {
  var oldVisible;
  return function () {
    var visible = isElementInViewport(el);
    if (visible != oldVisible) {
      oldVisible = visible;
      if (typeof callback == 'function') {
        callback();
      }
    }
  }
}