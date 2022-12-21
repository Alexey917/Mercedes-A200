const form = document.querySelector(".form-test-drive");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let data = {};
  //console.dir(form);
  //https://jsonplaceholder.typicode.com

  /* перебираем все инпуты формы. { name, value } - диструктуризация, которая необходима чтобы не создавать лишние переменные*/
  for (let { name, value } of form.elements) {
    if (name) {
      data[name] = value;
    }
  }
  /* делаем запрос на сервер. Метод then() отрбатывает когда данные дошли до сервера. response -ответ от сервера. status 200 успешный запрос*/
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    /* переведем наш объект в строчку*/
    body: JSON.stringify(data),
  })
    .then((response) => {
      /* Если ответ со статусом 200(успешный), то переведем его в json*/
      if (response.status === 200 || response.status === 201) {
        return response.json();
      } else {
        /* ошибка, если статус любой кроме 200 и 201*/
        throw new Error(response.status);
      }
    })
    /* Затем обратно в*/
    .then((data) => {
      alert("данные успешно сохранены!");
      form.reset();
    })
    /* ловим ошибку*/
    .catch((error) => {
      alert("Ошибка " + error.message);
    });
});
