// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Filter chips (alumni directory, resource library) — toggles active state
  // and shows/hides any [data-tags] cards inside the same section.
  document.querySelectorAll('.filter-bar').forEach(function (bar) {
    bar.addEventListener('click', function (e) {
      var chip = e.target.closest('.filter-chip');
      if (!chip) return;
      bar.querySelectorAll('.filter-chip').forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');

      var filter = chip.getAttribute('data-filter');
      var scope = bar.closest('section') || document;
      scope.querySelectorAll('[data-tags]').forEach(function (item) {
        var tags = item.getAttribute('data-tags') || '';
        var show = filter === 'all' || tags.indexOf(filter) !== -1;
        item.style.display = show ? '' : 'none';
      });
    });
  });

  // Admin console tabs
  document.querySelectorAll('.tabs').forEach(function (tabGroup) {
    tabGroup.addEventListener('click', function (e) {
      var btn = e.target.closest('.tab-btn');
      if (!btn) return;
      var targetId = btn.getAttribute('data-tab');
      var panelContainer = tabGroup.parentElement;

      tabGroup.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      panelContainer.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
      var target = panelContainer.querySelector('#' + targetId);
      if (target) target.classList.add('active');
    });
  });
});
