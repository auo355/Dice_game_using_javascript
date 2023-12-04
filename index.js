
var randNum1 = Math.floor(Math.random()*6+1);
var new_image1 ="images/dice"+randNum1+".png";
document.querySelector(".img1").setAttribute("src",new_image1 ); 

var randNum2 = Math.floor(Math.random()*6+1);
var new_image2 ="images/dice"+randNum2+".png"; 
document.querySelector(".img2").setAttribute("src",new_image2 );

var x="nice job";
if (randNum1>randNum2){
	x = "😊  player 1 wins" ;}
else if (randNum1<randNum2){
	x = "player 2 wins 😊 "; }
else{
	x="✌ draw 🤞";
}

document.querySelector("h1").textContent=x;	




