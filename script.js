const menuIcon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".nav-links");
const lines = document.querySelectorAll("line");

menuIcon.addEventListener("click", () => {
  navBar.classList.toggle("nav-links-open");
  menuIcon.classList.toggle("change");
});
