document.getElementById("contactusButton").addEventListener("mouseenter",() => buttonEnter("contactusButton","contactusButtonText"));
document.getElementById("contactusButton").addEventListener("mouseleave",() => buttonExit("contactusButton","contactusButtonText"));

document.getElementById("getstartedButton").addEventListener("mouseenter",() => buttonEnter("getstartedButton","getstartedButtonText"));
document.getElementById("getstartedButton").addEventListener("mouseleave",() => buttonExit("getstartedButton","getstartedButtonText"));

document.getElementById("aboutusButton").addEventListener("mouseenter",() => buttonEnter("aboutusButton","aboutusButtonText"));
document.getElementById("aboutusButton").addEventListener("mouseleave",() => buttonExit("aboutusButton","aboutusButtonText"));

document.getElementById("getstartedButton").addEventListener("click",() => redirecter("solutions.html"));
document.getElementById("aboutusButton").addEventListener("click",() => redirecter("aboutus.html"));

function buttonEnter(x,y){
    document.getElementById(x).style.backgroundColor = "#1C1C1C";
    document.getElementById(y).style.color = "White";
    document.getElementById(x).style.transitionDuration = "0.5s";
    document.getElementById(y).style.transitionDuration = "0.5s";
}

function buttonExit(x,y){
    document.getElementById(x).style.backgroundColor = "White";
    document.getElementById(y).style.color = "Black";
    document.getElementById(x).style.transitionDuration = "0.5s";
    document.getElementById(y).style.transitionDuration = "0.5s";
}

function redirecter(x){
    window.location.href = x;
}

var h1 = document.getElementById("dataCard1").offsetHeight;
var h2 = document.getElementById("dataCard2").offsetHeight;
var h3 = document.getElementById("dataCard3").offsetHeight;

var w1 = document.getElementById("dataCard1").offsetWidth;
var w2 = document.getElementById("dataCard2").offsetWidth;
var w3 = document.getElementById("dataCard3").offsetWidth;

var maxH = Math.max(h1,h2,h3);
var maxW = Math.max(w1,w2,w3);

document.getElementById("dataCard1").style.height = maxH + "px";
document.getElementById("dataCard2").style.height = maxH + "px";
document.getElementById("dataCard3").style.height = maxH + "px";

document.getElementById("dataCard1").style.width = maxW + "px";
document.getElementById("dataCard2").style.width = maxW + "px";
document.getElementById("dataCard3").style.width = maxW + "px";