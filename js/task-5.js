function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//Напиши скрипт, який змінює колір фону елемента <body>
// через інлайн-стиль по кліку на button.change-color
// і задає це значення кольору текстовим вмістом для span.color.

const colorChangeBtn = document.querySelector(".change-color");

colorChangeBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = newColor;
  document.querySelector(".color").textContent = newColor;
});
