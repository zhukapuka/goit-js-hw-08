// Є input, у який користувач вводить бажану кількість елементів.
// Після натискання на кнопку Create має рендеритися (додаватися в DOM)
// колекція з відповідною кількістю елементів і очищатися значення в інпуті.
// При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова.
// Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create
// треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно.
// Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount),
// яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount.
// Усі ці <div> мають додаватися за одну операцію у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону.
// Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

const counterInput = document.querySelector("input");
const createBttn = document.querySelector("button[data-create]");
const destroyBttn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let markup = document.createDocumentFragment();

  for (let index = 0; index < amount; index++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    const boxSize = 30 + index * 10;
    box.style.cssText = `background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px;`;
    markup.appendChild(box);
  }
  boxes.appendChild(markup);
}

createBttn.addEventListener("click", () => {
  let counter = counterInput.value;
  boxes.innerHTML = ""; //! при натисканні на пусте поле видалимо контент в боксі
  if (counter > 0 && counter <= 100) {
    createBoxes(counter);
    counterInput.value = "";
  } else {
    boxes.innerHTML = ""; //! якщо нічого не вводити в поле і просто тицяти create приберає поле квадратів
    counterInput.value = ""; //! якщо введено 0 або більше 100 очищуємо поле
  }
});

destroyBttn.addEventListener("click", () => {
  boxes.innerHTML = "";
});
