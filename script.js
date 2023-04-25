const checkbox = document.querySelector("input[type=checkbox]");
const navLinks = document.querySelectorAll(".navbar__link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    checkbox.checked = false;
  });
});

AOS.init({
  delay: 100,
  duration: 2000,
  once: false,
  mirror: false,
});
