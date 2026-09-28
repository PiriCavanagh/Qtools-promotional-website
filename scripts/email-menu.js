// Closes the header "Email me" dropdown (a native <details>) on an outside
// click or Escape; opening and closing on the button itself is built in.
document.addEventListener("click", function (e) {
  document.querySelectorAll("details.email-menu[open]").forEach(function (menu) {
    if (!menu.contains(e.target)) menu.removeAttribute("open");
  });
});
document.addEventListener("keydown", function (e) {
  if (e.key !== "Escape") return;
  document.querySelectorAll("details.email-menu[open]").forEach(function (menu) {
    menu.removeAttribute("open");
    menu.querySelector("summary").focus();
  });
});
