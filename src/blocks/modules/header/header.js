const burger = document.querySelector(".header__hamburgerWrapper");
const showMenu = document.querySelector(".header__hamburgerLinks");
const checkbox = document.querySelector(".ham");

document.addEventListener("click", openMenu);

function openMenu(event) {
  event.preventDefault();
  if (checkbox === event.target) {
    checkbox.classList.toggle("active");
    showMenu.classList.toggle("showMenu");
    return;
  }
  if (burger.contains(event.target)) {
    checkbox.classList.add("active");
    showMenu.classList.add("showMenu");
    return;
  }
  checkbox.classList.remove("active");
  showMenu.classList.remove("showMenu");
}
