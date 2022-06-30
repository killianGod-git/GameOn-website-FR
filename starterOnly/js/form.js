// déclarations valeurs DOM
const myform = document.getElementById("formulaireInscription");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");


// déclaration regex
const regexFirst = /^[a-zA-Z-\s]{2,}$/;
const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


 myform.addEventListener("submit", function(e){
    if (regexFirst.test(first.value) == false){
        const myerror = document.getElementById("firstError");
        myerror.innerHTML = "le champs doit comporter au minimum 2 caratères";
        first.style.borderColor = "red";
        myerror.style.color = "red";
        e.preventDefault();
    }  else if (regexFirst.test(last.value) == false){
        const myerror = document.getElementById("lastError");
        myerror.innerHTML = "le champs doit comporter au minimum 2 caratères";
        first.style.borderColor = "red";
        myerror.style.color = "red";
        e.preventDefault();
    } else if (regexMail.test(email.value) == false){
        const myerror = document.getElementById("mailError");
        myerror.innerHTML = "Veuillez rentrer une adresse mail valide";
        first.style.borderColor = "red";
        myerror.style.color = "red";
        e.preventDefault();
    }
 })