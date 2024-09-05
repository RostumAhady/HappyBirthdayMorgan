const {Howl, Howler} = require('howler');

window.onload = function(){
    let image1 = new Image();
    let image2 = new Image();
    let image3 = new Image();
    let image4 = new Image();
    
    image1.src = 'images/HappyBirthday.jpg';
    image2.src = 'images/ILoveYou.jpg';
    image3.src = 'images/IMissYou.jpg';
    image4.src = 'images/ImStuck.jpg';
}
 
let bg = document.getElementById("bg");
bg.addEventListener("click", function(mouse){
    let x = mouse.clientX
    let y = mouse.clientY
    rand = Math.random();
    let img = document.createElement("img");
    img.className = "face",
    img.style.top = y - 150 + "px",
    img.style.left = x - 110 +"px",
    bg.appendChild(img),
    // randomly selecting which image and sound plays. Depending on number of images, will have to manually change probability.
    rand >= 0.80 ? (img.src = "images/ILoveYou.jpg", ILoveYou.play())
    : rand >=0.60 && rand < 0.80 ? (img.src = "images/IMissYou.jpg", IMissYou.play()) 
    : rand >= 0.40 && rand < 0.60 ? (img.src = "images/HappyBirthday.jpg", HappyBirthday.play()) 
    : (img.src = "images/ImStuck.jpg", ImStuck.play())
})


window.addEventListener("load", function(){
    bg.style.opacity = '1';
})


//howler.js audio retrieval

const HappyBirthday = new Howl({ src: ["audio/HappyBirthday.mp3"]});
const IMissYou = new Howl({src: ["audio/IMissYou.mp3"]});
const ImStuck = new Howl({src: ["audio/ImStuck.mp3"]});
const ILoveYou = new Howl({src: ["audio/ILoveYou.mp3"]});