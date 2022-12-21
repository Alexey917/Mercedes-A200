const burger = document.querySelector(".humburger-menu");
const menuElem = document.querySelector(".menu");
const menuLinkElem = document.querySelectorAll(".menu-list__link");

const toggleMenu = () => {
  menuElem.classList.toggle("menu-active");
  burger.classList.toggle("humburger-menu-active");
};

/* открытие мобильного меню и закрытие этого меню по нажатию на ссылку(меню-выпадающий список) */
burger.addEventListener("click", () => {
  toggleMenu();
  menuLinkElem.forEach((item) => {
    item.addEventListener("click", () => {
      if (menuElem.classList.contains("menu-active")) {
        toggleMenu();
      }
    });
  });
});
