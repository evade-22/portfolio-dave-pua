let compName = document.querySelector("#compName");
let password = document.querySelector("#compRep");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");
let form = document.querySelector("#contactForm");


//Function for checking if empty
const isEmpty = element => element == "" ? true : false;
// Function to check if length is within range
const isBetween = (elementLength, min, max) => elementLength >= min 
&& elementLength <= max ? false : true;
//Function for character input only
const charOnly = (element) => {
    const regexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])"); 
    return regexp.test(element);
}
const debounce = (timer, delay = 500) => {
    let timeout;
    return(...args) => {
        if (timeout){
            clearTimeout(timeout);
        } 
        timeout = setTimeout( () => {
            timer.apply(null, args)
        }, delay)
    }
}

//Function for name
let checkCompName = () => {
    const compNameVal = compName.value.trim();
    if(isEmpty(compNameVal)){
        document.getElementById("compNameError").innerHTML = "Company Name cannot be blank";
        document.getElementById("compNameError").style.color = "#F00";
    } else {
        document.getElementById("compNameError").innerHTML = "Company is good";
        document.getElementById("compNameError").style.color = "#0F0";
    }
}

let checkCompRep = () => {
    const compRepVal = compRep.value.trim();
    if(isEmpty(compRepVal)){
        document.getElementById("compRepError").innerHTML = "Company Representative cannot be blank";
        document.getElementById("compRepError").style.color = "#F00";
    } else if (charOnly(compRepVal)){
        document.getElementById("compRepError").innerHTML = "Company Representative should only contain letters";
        document.getElementById("compRepError").style.color = "#F00";
    }
     else {
        document.getElementById("compRepError").innerHTML = "Company Representative is good";
        document.getElementById("compRepError").style.color = "#0F0";
    }
}

let checkSubject = () => {
    const subjectVal = subject.value.trim();
    if(isEmpty(subjectVal)){
        document.getElementById("subjectError").innerHTML = "Subject line cannot be blank";
        document.getElementById("subjectError").style.color = "#F00";
    } else {
        document.getElementById("subjectError").innerHTML = "Subject line is good";
        document.getElementById("subjectError").style.color = "#0F0";
    }
}

let checkMessage = () => {
    const messageVal = subject.value.trim();
    const min = 20;
    const max = 500;
    if(isEmpty(messageVal)){
        document.getElementById("messageError").innerHTML = "Message cannot be blank";
        document.getElementById("messageError").style.color = "#F00";
    } else if(isBetween(messageVal)){
        document.getElementById("messageError").innerHTML = "Message should have at least 20 characters";
        document.getElementById("messageError").style.color = "#F00";
    } else {
        document.getElementById("messageError").innerHTML = "Message is good";
        document.getElementById("messageError").style.color = "#0F0";
    }
}

//For instant validation
form.addEventListener("input", debounce(function(event){
    switch (event.target.id){
        case "compName" : checkCompName();
        break;

        case "compRep" : checkCompRep();
        break;

        case "subject" : checkSubject();
        break;

        case"message" : checkMessage();
    }
}));

form.addEventListener("submit", function(event){
    event.preventDefault();
        checkCompName();
        checkCompRep();
        checkSubject();
        checkMessage();
});

//For Local Storage
// document.getElementById("btnAddInfo").addEventListener("click", addInfo);
// let regInfoList = localStorage.getItem("info") ? 
// JSON.parse(localStorage.getItem("info")) :
// [];

// function addInfo(event){
//     event.preventDefault();
//     let infoList = {
//         id:Date.now(),
//         fullName:document.getElementById("fullName").value,
//         password:document.getElementById("password").value,
//         address:document.getElementById("address").value,
//         country:document.getElementById("address").value,
//         zip:document.getElementById("zip").value,
//         email:document.getElementById("email").value,
//         gender1:document.getElementById("gender1").value,
//         gender2:document.getElementById("gender2").value,
//         language1:document.getElementById("language1").value,
//         language2:document.getElementById("language2").value,
//         about:document.getElementById("about").value
//     };
//     regInfoList.push(infoList);
//     console.log(regInfoList);
// }
