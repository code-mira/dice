// generate random numbers
let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);
let result;

// get image of random number
let imagePath1 = "images/dice"+randomNumber1+".png";
let imagePath2 = "images/dice"+randomNumber2+".png";

// set images
document.querySelector(".img1").setAttribute("src", imagePath1);
document.querySelector(".img2").setAttribute("src", imagePath2);

// check the random number and set result in h1
if(randomNumber1 > randomNumber2){
    result = "Player 1 Wins! 🚩";
}else if(randomNumber2 > randomNumber1){
    result = "Player 2 Wins! 🚩";
}else if(randomNumber2 === randomNumber1){
    result = "Draw!";
}else{
    result = "Try again!";
}

document.getElementsByTagName("h1")[0].innerHTML = result;