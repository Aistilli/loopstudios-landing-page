const btnOpen = document.querySelector(".btn-menu__open");
const btnClose = document.querySelector(".btn-menu__close");
const menu = document.querySelector(".menu");

btnOpen.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.add("open");
});

btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.remove("open");
});
