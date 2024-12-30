var dice1=Math.random();
dice1=Math.floor((dice1*6)+1);

var imageSource1="./images/dice" + dice1 + ".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src",imageSource1);

var dice2=Math.random();
dice2=Math.floor((dice2*6)+1);

var imageSource2="./images/dice" + dice2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

if(dice1>dice2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(dice2>dice1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!!";
}