/**
 * Debaunce impl from underscore
 *
 * @param func
 * @param wait
 * @param immediate
 * @returns {function()}
 */
export function debounce(func, wait = 200, immediate = false) {
  let timeout;

  return (...args) => {
    let context = this;

    let later = () => {
      timeout = null;
      if ( !immediate ) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if ( callNow ) {
      func.apply(context, args);
    }
  };
}


/**
 * Throttle impl
 *
 * @param fn
 * @param threshhold
 * @param scope
 * @return {Function}
 */

export function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  let last, deferTimer;

  return function () {
    const
      context = scope || this,
      now = +new Date,
      args = arguments;

    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
