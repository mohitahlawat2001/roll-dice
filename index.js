var randomNumber1 = Math.floor(Math.random() * 6) ;
var randomNumber2 = Math.floor(Math.random() * 6) ;
console.log(randomNumber1);
console.log(randomNumber2);

let dice = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];

document.getElementsByClassName("img1")[0].setAttribute("src", "images/" + dice[randomNumber1] + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src","images/"+dice[randomNumber2]+".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!🚩";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}