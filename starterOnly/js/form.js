// déclarations valeurs DOM
const myform = document.getElementById("formulaireInscription");
const villes = Array.from(radioBouton.querySelectorAll("input"));

// déclaration regex
const regexCaracteres = /^[a-zA-Z-\s]{2,}$/;
const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexDate = /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/;
const regexNombres = /^-?\d+\.?\d*$/

// fonction "on click" sur le submit
myform.addEventListener("submit", function (e) {
   e.preventDefault(); // empêche l'actualisation de la page au click sur le subit (comportement par défaut)
   const allInput = Array.from(myform.querySelectorAll("input")); //récupère les input du DOM et les met dans un tableau
   let validation = true;
   allInput.forEach(node => {
      const nodeId = node.getAttribute("id");
      switch (nodeId) {
         case "first": {
            const r = valideName(node)
            if (r) {
               addError(node, r);
               validation = false;
            } else {
               removeError(node);
            }
            break;
         }
         case "last":
            {
               const r = valideName(node)
               if (r) {
                  addError(node, r);
                  validation = false
               } else {
                  removeError(node);
               }
               break;
            }
         case "email":
            {
               const r = valideEmail(node)
               if (r) {
                  addError(node, r);
                  validation = false;
               } else {
                  removeError(node);
               }
               break;
            }
         case "birthdate":
            {
               const r = valideBirthday(node)
               if (r) {
                  addError(node, r);
                  validation = false;
               } else {
                  removeError(node);
               }
               break;
            }
         case "quantity":
            {
               const r = valideQuantity(node)
               if (r) {
                  addError(node, r);
                  validation = false;
               } else {
                  removeError(node);
               }
               break;
            }
         case "checkbox1":
            {
               const r = valideChecked(node)
               if (r) {
                  addError(node, r);
                  validation = false;
               } else {
                  removeError(node);
               }
               break;
            }
      }
      validePosition()
      
   });
   console.log(validation);
   if (validation){
      myform.style.display = 'none';
   }
})




const valideName = (input) => {
   input.value;
   if (regexCaracteres.test(input.value)) {
      return undefined;
   }
   else {
      if (input.getAttribute("id") === "first") {
         return "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      } else {
         return "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      }
   }
}
const valideEmail = (input) => {
   input.value;
   if (regexMail.test(input.value)) {
      return undefined;
   } else {
      if (input.getAttribute("id") === "email") {
         return "Vous devez entrer une adresse mail valide."
      }
   }
}
const valideBirthday = (input) => {
   input.value;
   if (regexDate.test(input.value)) {
      return undefined;
   } else {
      if (input.getAttribute("id") === "birthdate") {
         return "Vous devez rentrer votre date de naissance."
      }
   }
}
const valideQuantity = (input) => {
   input.value;
   if (regexNombres.test(input.value)) {
      return undefined;
   } else {
      if (input.getAttribute("id") === "quantity") {
         return "Vous devez rentrer votre nombre de participations"
      }
   }
}
const validePosition = () => {
   let checked = false;
   for (let i = 0; i < villes.length; i++) {
      if (villes[i].checked) {
         checked = true;
         break;
      }
   }
   if (!checked) {
      const myerror = document.getElementById("locationError");
      myerror.innerHTML = "Vous devez choisir une option";
      validation = false;
   } else {
      const myerror = document.getElementById('locationError');
      myerror.innerHTML = "";

   }
}
const valideChecked = (input) => {
   if (input.checked === true) {
      return undefined;
   } else {
      if (input.getAttribute("id") === "checkbox1") {
         return "Vous devez vérifier que vous acceptez les termes et conditions"
      }
   }
}
const addError = (input, message) => {
   const parent = input.parentElement;
   parent.querySelector(".error").innerHTML = message;
};
const removeError = (input) => {
   const parent = input.parentElement;
   parent.querySelector(".error").innerHTML = "";
}