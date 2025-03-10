//Напиши скрипт управління формою логіна.

//* відправлення форми form.login-form повинна відбуватися за подією submit.
//? Під час відправлення форми сторінка не повинна перезавантажуватися.
//TODO Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те,
//TODO що 'All form fields must be filled in'. Не додавай на інпути атрибут required,
//TODO валідація має відбуватися саме через JS.
//! Якщо користувач заповнив усі поля і відправив форму,
//! збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів,
//! а значення — відповідні значення цих інпутів, очищені від пробілів по краях.
//! Для доступу до елементів форми використовуй властивість elements.
//? При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення
//? полів форми методом reset.

const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {};
  const email = e.target.elements.email.value;
  const pass = e.target.elements.password.value;

  if (email === "" || pass === "") {
    return alert("All form fields must be filled in");
  } else {
    user.email = email.trim();
    user.pasword = pass.trim();
  }
  console.log(user);
  form.reset();
});
