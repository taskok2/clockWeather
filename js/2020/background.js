const body = document.querySelector("body");

const IMG_CNT = 8;

function paintImg(n){
    const image = new Image();
    image.src = `./images/2020/${n}.jpg`;
    image.classList.add("bgImage");

    body.appendChild(image);
}

function getRnd() {
    return Math.floor(Math.random() * IMG_CNT) + 1;
}

function init(){
    paintImg(getRnd());
}

init();