// déclarations valeurs DOM
const myform = document.getElementById("formulaireInscription");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radioBouton = document.getElementById("radioBouton");
const villes=Array.from(radioBouton.querySelectorAll("input"));


// déclaration regex
const regexCaracteres = /^[a-zA-Z-\s]{2,}$/;
const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
const regexNombres = /^-?\d+\.?\d*$/


 myform.addEventListener("submit", function(e){
    e.preventDefault();
//     console.log(myform);
//     const allInput=Array.from(myform.querySelectorAll("input"));
//     allInput.forEach(node => {
//        const nodeId=node.getAttribute("id");
//        switch(nodeId){
//         case "first":{
//                 const r=valideName()
//                 if(!r){
//                     addError(node, "Vous devez entrer plus de 2 caractères")
//                 }
//                 break;
//             }
//        case "last":
//             {
//             const r=validLastName()
//             if(!r){
//                 addError(node, "Vous devez entrer plus de 2 caractères")
//             }
//             break;}

//        }
//     });
    if (!regexCaracteres.test(first.value)){
        const myerror = document.getElementById("firstError");
        myerror.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        first.style.borderColor = "red";
        
    }  else {
    const myerror = document.getElementById('firstError');  
    myerror.innerHTML = "";}
    
    if (!regexCaracteres.test(last.value)){
        const myerror = document.getElementById("lastError");
        myerror.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        first.style.borderColor = "red";
        
    } else {
      const myerror = document.getElementById('lastError');  
      myerror.innerHTML = "";}
     if (!regexMail.test(email.value)){
        const myerror = document.getElementById("mailError");
        myerror.innerHTML = "Vous devez entrer une adresse mail valide";
        first.style.borderColor = "red";
        
    } else {
      const myerror = document.getElementById('mailError');  
      myerror.innerHTML = "";}

      if (!regexDate.test(birthdate.value)){
         const myerror = document.getElementById("birthdateError");
         myerror.innerHTML = "Vous devez entrer votre date de naissance";
         first.style.borderColor = "red";
         
      } else {
       const myerror = document.getElementById('birthdateError');  
       myerror.innerHTML = "";}

      if (!regexNombres.test(quantity.value)){
         const myerror = document.getElementById("quantityError");
         myerror.innerHTML = "vous devez inscrire votre nombre de participations ";
         first.style.borderColor = "red";
         
      } else {
       const myerror = document.getElementById('quantityError');  
       myerror.innerHTML = "";
      }
      let checked = false;
      for (let i = 0; i < villes.length; i++) {
			if (villes[i].checked ) {
            checked = true;
            break;   
         }
      }
      if (!checked){
         const myerror = document.getElementById("locationError");
         myerror.innerHTML = "Vous devez choisir une option";
         first.style.borderColor = "red";
      } else {
         const myerror = document.getElementById('locationError');  
         myerror.innerHTML = "";
      }
 })


//  const addError=(input, message)=>{
//     const span=input.nextSibling().innerHtml=message;
    
//  };
//  const removeError=(input, message)=>{

//  }