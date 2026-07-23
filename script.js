function initScrollReveal() {
  var targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function (el) { observer.observe(el); });
}

function initWaveformMotion() {
  var waveforms = document.querySelectorAll('.waveform');
  if (!waveforms.length) return;
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      entry.target.classList.toggle('is-playing', entry.isIntersecting);
    });
  }, { threshold: 0.4 });

  waveforms.forEach(function (el) { observer.observe(el); });
}

document.addEventListener('DOMContentLoaded', function () {
  initScrollReveal();
  initWaveformMotion();
});
