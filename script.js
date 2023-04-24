const checkbox = document.querySelector("input[type=checkbox]");
const navLinks = document.querySelectorAll(".navbar__link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    checkbox.checked = false;
  });
});
