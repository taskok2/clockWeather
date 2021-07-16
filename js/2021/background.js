const images = ["0.jpeg", "1.jpg", "2.jpeg", "3.jpg", "4.jpg"];

const toDayImg = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");
bgImg.src = `images/2021/${toDayImg}`;
document.body.appendChild(bgImg);