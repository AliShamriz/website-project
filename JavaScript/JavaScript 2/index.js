var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var png1 = "./images/dice" + randomnumber1 + ".png";
var png2 = "./images/dice" + randomnumber2 + ".png";

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", png1);
img2.setAttribute("src", png2);


if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins !";
}
else if (randomnumber1 === randomnumber2){
    document.querySelector("h1").innerHTML="No one wins !";
}
else {
     document.querySelector("h1").innerHTML="Player 2 Wins !";
}
