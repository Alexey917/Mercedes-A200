const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");
const tabsContentElems = document.querySelectorAll("[data-tabs-field]");
const tabsTitleElems = document.querySelectorAll("[data-tabs-title]");
//design-list__item_active
//console.log(tabsTitleElems);

/* цикл "читаем как с бумаги" берем все btn из массива tabsHandlerElems*/
for (let btn of tabsHandlerElems) {
  btn.addEventListener("click", () => {
    tabsHandlerElems.forEach((item) => {
      item.classList.remove("design-list__item_active");
      btn.classList.add("design-list__item_active");

      tabsContentElems.forEach((content) => {
        /* атрибуты достаются из console.dir */
        if (content.dataset.tabsField === btn.dataset.tabsHandler) {
          content.classList.remove("hidden");
        } else {
          content.classList.add("hidden");
        }
      });

      tabsTitleElems.forEach((title) => {
        /* атрибуты достаются из console.dir */
        if (title.dataset.tabsTitle === btn.dataset.tabsHandler) {
          title.classList.remove("hidden");
        } else {
          title.classList.add("hidden");
        }
      });
    });
  });
}
