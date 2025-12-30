const openMenuBtnEl = document.querySelector(".burger-btn");
const closeMenuBtnEl = document.querySelector(".mobile-menu-close-btn");
const mobileMenuEl = document.querySelector(".overlay-menu-container");
const menuNavLinks = document.querySelectorAll(".menu-nav-link");
const bodyEl = document.body;

openMenuBtnEl.addEventListener("click", toggleModal);
closeMenuBtnEl.addEventListener("click", toggleModal);

menuNavLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function toggleModal() {
  mobileMenuEl.classList.toggle("is-open");

  if (mobileMenuEl.classList.contains("is-open")) {
    bodyEl.style.overflow = "hidden";
  } else {
    bodyEl.style.overflow = "visible";
  }
}

function closeMenu() {
  mobileMenuEl.classList.remove("is-open");
  bodyEl.style.overflow = "visible";
}
