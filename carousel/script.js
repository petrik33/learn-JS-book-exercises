const imagesPaths = [
    "./Images/Fig1.15(a).bmp",
    "./Images/Fig1.15(b).bmp",
    "./Images/Fig2.19(a).bmp",
    "./Images/Fig2.22(a).bmp",
    "./Images/Fig3.15(a)2.bmp",
    "./Images/Fig3.15(a)3.bmp",
    "./Images/Fig3.15(a)4.bmp",
    "./Images/Fig10.15(a).BMP",
    "./Images/Fig5.04(i).bmp",
    "./Images/Fig3.35(a).bmp",
    "./Images/Fig3.37(a).bmp",
    "./Images/Fig9.11(a).bmp",
    "./Images/Fig9.16(a).bmp"
];

function slideCarouselLeft(event) {
    slidePosition = Math.max(slidePosition - width * count, 0);
    imagesList.style.transform = "translateX(-" + slidePosition + "px)";
}

function slideCarouselRight(event) {
    slidePosition = Math.min(slidePosition + width * count, totalWidth - width * count);
    imagesList.style.transform = "translateX(-" + slidePosition + "px)";
}

function createCarouselImage(imagePath) {
    let image = document.createElement("img");
    image.src = imagePath;
    image.classList.add("carousel-image");
    return image;
}

const width = 270;
const count  = 3;

let slidePosition = 0;

let carouselContainer = document.getElementById("carousel-main");
let imagesContainer = carouselContainer.querySelector("div.carousel-images");
let imagesList = imagesContainer.querySelector("ul");

imagesContainer.style.width = width * count + "px";

for(const str of imagesPaths) {
    let listItem = document.createElement("li");
    let imageElement = createCarouselImage(str);
    listItem.appendChild(imageElement);
    imagesList.appendChild(listItem);
}

let totalWidth = imagesList.clientWidth;

let leftArrow = carouselContainer.querySelector(".arrow.left");
let rightArrow = carouselContainer.querySelector(".arrow.right");

leftArrow.onclick = slideCarouselLeft;
rightArrow.onclick = slideCarouselRight;