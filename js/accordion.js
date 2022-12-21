const btns = document.querySelectorAll(".feature__link");
const lists = document.querySelectorAll(".feature-sub");

/* так только если функция выполняет что то одно(без фигурных скобок)*/
/*btns.addEventListener("click", () => alert("click"));*/

/*for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => console.log(btns[i]));
}*/

/* переберем все кнопки */
btns.forEach((btnItem, index) => {
  btnItem.addEventListener("click", () => {
    /* переберем все кнопки и удалим у них класс active если он есть */
    if (btnItem.classList.contains("feature__link_active")) {
      btnItem.classList.remove("feature__link_active");
      lists[index].classList.add("hidden");
    } else {
      btnItem.classList.add("feature__link_active");
      lists[index].classList.remove("hidden");
    }

    /* только лишь кликнутой кнопке мы добавим класс */

    /* перебираем все списки и добавляем им класс hidden */

    /* только лишь кликнутоve cgbcre мы удалим класс hidden, чтобы открыть список */
  });
});
