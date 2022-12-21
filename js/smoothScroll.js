const linksHead = document.querySelectorAll(".menu-list__link");
const mainScroll = document.querySelector(".main__scroll");
/* спрет оператор: создаем новый массив и добавляем в него массив ссылок и объект с классом main__scroll */
const newArray = [...linksHead, mainScroll];

//console.log(seamless);

newArray.forEach((link) => {
  link.addEventListener("click", (event) => {
    /* стандартное поведение ссылки отключено */
    event.preventDefault();

    /* берем событие клика по объекту, берем у него target, достаем атрибут href(у того объекта по которму кликнули=target) и отсекаем у него первый символ */
    const ID = event.target.getAttribute("href").substr(1);

    /* нажав на ссылку, которая ведет к определенному id, мы плавно прокручиваемся к секции с этим id(getElementById(ID) получить элемент по id)*/
    /* document.getElementById(ID).scrollIntoView({
      behavior: "smooth",
      /* в начало секции  
      block: "start",
    });*/

    /* Кроссбраузерный вариант скролла */
    seamless.scrollIntoView(document.getElementById(ID), {
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  });
});
