const imagesPaths = [
    "./Images/Fig1.15(a).bmp",
    "./Images/Fig1.15(b).bmp",
    "./Images/Fig2.19(a).bmp",
    "./Images/Fig2.22(a).bmp",
    "./Images/Fig3.15(a)2.bmp",
    "./Images/Fig3.15(a)3.bmp",
    "./Images/Fig3.15(a)4.bmp"
];

function createCarouselImage(imagePath) {
    let image = document.createElement("img");
    image.src = imagePath;
    image.classList.add("carousel-image");
    return image;
}

let carouselContainer = document.getElementById("carousel-main");
let imagesContainer = carouselContainer.querySelector("div.carousel-images");

for(const str of imagesPaths) {
    imagesContainer.appendChild(createCarouselImage(str));
}