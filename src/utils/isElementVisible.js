
export function isElementVisible(element, percentageOfVisibility = .3) {
  const rect = element.getBoundingClientRect();
  const html = document.documentElement;
  const viewportHeight = window.innerHeight || html.clientHeight;

  return rect.top <= (viewportHeight) * percentageOfVisibility;
}


export function isElementOnView(element) {
  const rect = element.getBoundingClientRect();
  const html = document.documentElement;
  const viewportHeight = window.innerHeight || html.clientHeight;

  return (
    (rect.top >= 0 && rect.top - viewportHeight <=0) ||
    (rect.bottom <= viewportHeight && rect.bottom >= 0)
  );
}
