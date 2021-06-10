var randomNumber1 = Math.floor(Math.random() * 6)+1;
var firstDiceImage = "images/dice" + randomNumber1 + ".png";
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",firstDiceImage);

// Two random no for 2 dices otherwise both dices will get same result
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var secondDiceImage = "images/dice" + randomNumber2 + ".png";
var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",secondDiceImage);

if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = "🏆 Player 1 Wins";
}

else if(randomNumber2 > randomNumber1) {
document.querySelector("h1").innerHTML = "🏆 Player 2 Wins";
}

else {
document.querySelector("h1").innerHTML = "Draw";
}