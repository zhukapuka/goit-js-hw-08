const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
//Створення та додовання зображень із масиву обєктів у розмітку
const markup = document.querySelector(".gallery");
markup.insertAdjacentHTML("beforeend", createMarkup(images));
// Створення функції, яка додає елементи картинки розмітки
function createMarkup(arr) {
  return arr
    .map(
      (item) =>
        `<li class="gallery-item">
  <a class="gallery-link" href="${item.original}">
<img class="gallery-image" src="${item.preview}" data-source="${item.original}"
alt="${item.description}"/></a>
</li>`
    )
    .join("");
}

// Реалізую анімацію при наведенні мишкою на картинку із списку зображень у розмітці(її збільшення)
document.querySelectorAll(".gallery-image").forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.05)";
    img.style.cursor = "zoom-in";
  });

  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});
// Вішаю подію, делегую її, щоб при кліку відкривалась картинка в модальному вікні
markup.addEventListener("click", function markupClick(e) {
  e.preventDefault();
  console.log(e.target.dataset.source);

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const imageModal = basicLightbox.create(`
    <img src="${e.target.dataset.source}" style="width:1112px; height:auto; margin-top:32px;">
`);
  imageModal.show();
});
