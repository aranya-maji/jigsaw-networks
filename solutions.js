document.getElementById("see1").addEventListener("click",() => expansion("see1","card1"));
document.getElementById("see2").addEventListener("click",() => expansion("see2","card2"));
document.getElementById("see3").addEventListener("click",() => expansion("see3","card3"));

document.getElementById("contactusScroll").addEventListener("click", () => redirecter("contactus.html"));
document.getElementById("aboutusScroll").addEventListener("click", () => redirecter("aboutus.html"));

function expansion(x,y){
    var text = document.getElementById(x).textContent.trim();
    if(text == "See More"){
        document.getElementById(y).style.height = "fit-content";
        document.getElementById(x).textContent = "See Less";
    }
    else{
        document.getElementById(y).style.height = "0px";
        document.getElementById(x).textContent = "See More";
    }
}

function redirecter(x){
    window.location.href = x;
}