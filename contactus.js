document.getElementById("submitButton").addEventListener("mouseenter",() => buttonEnter("submitButton","submitButtonText"));
document.getElementById("submitButton").addEventListener("mouseleave",() => buttonExit("submitButton","submitButtonText"));
document.getElementById("submitButton").addEventListener("click",() => fetchData());

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

function fetchData(){
    var name = document.getElementById("nameForm").value;
    var email = document.getElementById("emailForm").value;
    var company = document.getElementById("companyForm").value;
    var inquiry = document.getElementById("inquiryForm").value;
    var message = document.getElementById("messageForm").value;
    if(name == ""){
        alert("Enter name");
    }
    else if(email == ""){
        alert("Enter email");
    }
    else if(!verifyEmail(email)){
        alert("Enter valid email");
    }
    else if(company == ""){
        alert("Enter company");
    }
    else if(inquiry == ""){
        alert("Select inquiry type");
    }
    else if(message == ""){
        alert("Leave some message");
    }
    else{
        var jsonified = {"Name" : name, "Email" : email, "Company" : company, "Inquiry" : inquiry, "Message" : message};
        console.log(jsonified);
        // here replace the above line with email api push or database push
    }
}

function verifyEmail(x){
    if(x !== x.toLowerCase()){
        return false;
    }
    if(!x.includes("@") || !x.includes(".")){
        return false;
    }
    var splited = x.split("@");
    if(!splited[1].includes(".")){
        return false;
    }
    if(x[0] == "." || splited[1][0] == "." || splited[1][splited[1].length-1] == "." || splited[0][0] == "." || splited[0][splited[0].length-1] == "."){
        return false;
    }
    return true;
}