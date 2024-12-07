document.getElementById("solutionsScroll").addEventListener("click",() => redirecter("solutions.html"));
document.getElementById("contactusScroll").addEventListener("click",() => redirecter("contactus.html"));

function redirecter(x){
    window.location.href = x;
}