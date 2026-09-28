// Mobile header menu: the hamburger button shows/hides the page links (the
// button itself is only visible at narrow widths — see style.css). Closes on
// Escape, an outside click, or following a link.
document.querySelectorAll(".nav-toggle").forEach(function (toggle) {
  var nav = toggle.closest("nav.header");
  if (!nav) return;

  var setOpen = function (open) {
    nav.classList.toggle("is-menu-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-menu-open"));
  });
  nav.querySelectorAll(".links a").forEach(function (link) {
    link.addEventListener("click", function () { setOpen(false); });
  });
  document.addEventListener("click", function (e) {
    if (nav.classList.contains("is-menu-open") && !nav.contains(e.target)) setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-menu-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
});
