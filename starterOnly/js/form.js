// déclarations valeurs DOM
const myform = document.getElementById("formulaireInscription");

// déclaration regex
const regexCaracteres = /^[a-zA-Z-\s]{2,}$/;
const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
const regexNombres = /^-?\d+\.?\d*$/


 myform.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(myform);
    const allInput=Array.from(myform.querySelectorAll("input"));
    allInput.forEach(node => {
       const nodeId=node.getAttribute("id");
       switch(nodeId){
        case "first":{
                const r=valideName(node)
                if(r){
                    addError(node, r)
                } else{
                  removeError(node)
                }
                break;
            }
       case "last":
            {
            const r=valideName(node )
            if(r){
                addError(node, r)
            }else{
               removeError(node)
             }
            break;
         }
         case "email":
            {
               const r=valideEmail(node )
                  if(r){
                     addError(node, r)
                  } else{
                     removeError(node)
                   }
                  break;
            }
         case "birthdate":
            {
               const r=valideBirthday(node )
                  if(r){
                     addError(node, r)
                  } else {
                     removeError(node)
                  }
                  break;
            }
            case "quantity":
               {
                  const r=valideQuantity(node )
                     if(r){
                        addError(node, r)
                     } else{
                        removeError(node)
                     }
                     break;
               }
       }
    });
 })
   const valideName=(input)=>{
      input.value;
      if (regexCaracteres.test(input.value)){
         return undefined;
      }
      else{
         if (input.getAttribute("id") === "first"){
            return "First a Minimum 2 caractères";
         }else {
            return "Last a Minimum 2 caractères";
         }
      }
   }
   const valideEmail=(input)=>{
      input.value;
      if (regexMail.test(input.value)){
         return undefined;
      } else {
         if (input.getAttribute("id") === "email"){
            return "Vous devez entrer une adresse mail valide."
         }
      }
   }
   const valideBirthday=(input)=>{
      input.value;
      if (regexDate.test(input.value)){
         return undefined;
      } else {
         if (input.getAttribute("id") === "birthdate"){
            return "Vous devez rentrer votre date de naissance."
         }
      }
   }
   const valideQuantity=(input)=>{
      input.value;
      if (regexNombres.test(input.value)){
         return undefined;
      } else{
         if (input.getAttribute("id") === "quantity"){
            return "Vous devez rentrer votre nombre de participations"
         }
      }
   }
 const addError=(input, message)=>{
   const parent =input.parentElement;
   parent.querySelector(".error").innerHTML = message;
 };
 const removeError=(input)=>{
   const parent =input.parentElement;
   parent.querySelector(".error").innerHTML = "";
 }