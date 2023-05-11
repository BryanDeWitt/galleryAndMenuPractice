const slides = document.querySelector(".mini-images");
const img = document.getElementById("image");
const rigth = document.querySelector(".rigth-arrow");
const left = document.querySelector(".left-arrow");
const p = document.querySelector(".count");
const btn = document.querySelector(".show");
const dash = document.querySelector(".dash");
const check = document.querySelector(".ekis");
let currentImage = 0;
p.textContent = `${currentImage + 1}`;
const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
];

for (let i = 0; i < images.length; i++) {
  let little = document.createElement("img");
  little.src = `${images[i]}`;
  little.classList.add("little");
  slides.appendChild(little);
}

const littleImages = Array.from(document.querySelectorAll(".little"));

littleImages.forEach((item) => {
  item.addEventListener("click", () => {
    let i = littleImages.indexOf(item);
    currentImage = i;
    img.src = images[currentImage];
    p.textContent = `${currentImage + 1}`;
  });
});

function next(key, img, arr, para) {
  key.addEventListener("click", () => {
    if (currentImage === arr.length - 1) {
      currentImage = 0;
      img.src = arr[currentImage];
    } else {
      ++currentImage;
      img.src = arr[currentImage];
    }
    para.textContent = `${currentImage + 1}`;
  });
}

function previous(key, img, arr, para) {
  key.addEventListener("click", () => {
    if (currentImage === 0) {
      currentImage = arr.length - 1;
      img.src = arr[currentImage];
    } else {
      --currentImage;
      img.src = arr[currentImage];
    }
    para.textContent = `${currentImage + 1}`;
  });
}

btn.addEventListener("click", () => {
  check.checked === true ? (check.checked = false) : (check.checked = true);
  if (check.checked === false) {
    dash.style.transform = "translateY(-75%)";
  } else if (check.checked === true) {
    dash.style.transform = "translateY(-3%)";
  }
});

next(rigth, img, images, p);
previous(left, img, images, p);

setInterval(() => {
  if (currentImage === images.length - 1) {
    currentImage = 0;
    img.src = images[currentImage];
    p.textContent = `${currentImage + 1}`;
  } else {
    currentImage++;
    img.src = images[currentImage];
    p.textContent = `${currentImage + 1}`;
  }
}, 10000);
