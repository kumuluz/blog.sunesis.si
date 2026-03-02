// Google Analytics
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-96110617-5', 'auto');
ga('send', 'pageview');

// Scroll to top button handler
(function () {
  document.addEventListener('scroll', function (event) {
    var toTopBtn = document.getElementById('to-top');
    if (document.documentElement.scrollTop > 100 && parseFloat(window.getComputedStyle(toTopBtn).opacity) < 1) {
      toTopBtn.style.opacity = '1';
    } else if (document.documentElement.scrollTop < 100 && parseFloat(window.getComputedStyle(toTopBtn).opacity) > 0) {
      toTopBtn.style.opacity = '0';
    }
  }, true);

  document.getElementById('to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
  });
})();
