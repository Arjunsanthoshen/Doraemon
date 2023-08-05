var randomNumber1 = Math.floor( Math.random()*6)+1;
var randomNumber2 = Math.floor( Math.random()*6)+1;
var randomDiceImg1 = "dice game/images/dice" + randomNumber1 + ".png";
var randomDiceImg2 = "dice game/images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImg1);
document.querySelector(".img2").setAttribute("src", randomDiceImg2);


if (randomNumber1 >randomNumber2){document.querySelector("h1").textContent="player 1 won ! 🏆 "}
else if (randomNumber2 >randomNumber1){ document.querySelector("h1").textContent="player 2 won ! 🏆"}
else{document.querySelector("h1").innerHTML="Draw ☮"}