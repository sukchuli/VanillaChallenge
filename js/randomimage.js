const imageArr = ["img_1.jpeg","img_2.jpeg","img_3.jpeg"];

function randomImg() {
    return imageArr[Math.floor(Math.random() * imageArr.length)];
}
const body = document.querySelector("body");
const bgImg = randomImg();
body.style.backgroundImage = `url('img/${bgImg}')`;