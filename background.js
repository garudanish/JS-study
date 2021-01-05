const bg = document.querySelector(".background-image");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  bg.style.backgroundImage =
    "url(" + `./assets/images/${imgNumber + 1}.jpg` + ")";
  bg.style.backgroundRepeat = "no-repeat";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
}

function genRandom() {
  const number = Math.floor(Math.random() * 5);
  console.log(number);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
