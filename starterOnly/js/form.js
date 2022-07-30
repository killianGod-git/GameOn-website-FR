// déclarations valeurs DOM
const myform = document.getElementById("formulaireInscription");
const villes = Array.from(radioBouton.querySelectorAll("input")); //création d'un array avec les villes du formulaire
const validationInscription = document.getElementById("validationInscription");

// déclaration regex
const regexCaracteres = /^[a-zA-Z-\s]{2,}$/;
const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexDate = /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/;
const regexNombres = /^-?\d+\.?\d*$/

// fonction "on click" sur le submit
myform.addEventListener("submit", function (e) {
   e.preventDefault(); // empêche l'actualisation de la page au click sur le subit (comportement par défaut)
   const allInput = Array.from(myform.querySelectorAll("input")); //récupère les input du DOM et les met dans un tableau
   let validation = true; //création de la variable validation
   allInput.forEach(node => { //parcours les éléments du tableau 
      const nodeId = node.getAttribute("id"); //récupère l'id des éléments du tableau
      switch (nodeId) { // mise en place d'un switch utilisant l'id récupéré plus tôt pour faire du cas par cas 
         case "first": {   // pour l'id "first" ce code sera utilisé 
            const r = valideName(node) // création d'une constante avec les résultat de la fonction ligne 117
            if (r) { // if r === true faire ce code
               addError(node, r); //utilisation de la fonction ligne 187
               validation = false; //changement de la variable validation
            } else { // if r === false
               removeError(node); // utilisation fonction ligne 187
            }
            break; // arret de ce case
         } //même procédé pour les suivants
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
      validation = validePosition() ; // récupération valeur fonction ligne 160
      
   });
   if (validation){ //if validation === true
      myform.style.display = "none"; // le formulaire disparaitt
      validationInscription.style.display = "flex"; //le message de validation apparait
      //mise en place de la fermeture automatique
      // setTimeout pour faire une pause avant l'execution du code 
      setTimeout (() =>{
         modalbg.style.animation = "closeModal 500ms both "; //lancement de l'animation closeModal
      }, "4500")
      // un second setTimeout afin d'exectuter du code pour afficher un nouveau formulaire en cas d'ouverture du form après validation
      setTimeout (() => {
         modalbg.classList.toggle("open");
         validationInscription.style.display = "none";
         myform.style.display = "block";
         modalbg.style.animation = ""; // changement de l'animation afin de ne pas avoir une boucle a la réouverture de la modal
      }, "5000");

   }
})




const valideName = (input) => {
   input.value;
   if (regexCaracteres.test(input.value)) { //si la valeur dans l'input passe les règles de la Regex ont ne renvois rien
      return undefined;
   }
   else { // si la valeur dans l'input ne passe pas la Regex ont envois une erreur 
      //comme la règle est la même pour le nom & le prénom j'ai juste personalisé le message d'erreur en fonction de l'id 
      if (input.getAttribute("id") === "first") { 
         return "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      } else {
         return "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      }
   }
}
// même procédé
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
//fonction pour verifier si une ville est séléctionné 
const validePosition = () => {
   let checked = false; // je défini la variable checked sur false par défaut
   for (let i = 0; i < villes.length; i++) { // je parcours le tableau en incrémentant un compteur 
      if (villes[i].checked) { // si un des élément du tableau est checked 
         checked = true; // je change la variable checked sur true
         break;
      }
   }
   if (!checked) { // si checked === false je récupère le message d'erreur
      const myerror = document.getElementById("locationError");
      myerror.innerHTML = "Vous devez choisir une option";
      return false;
   } else { // sinon il reste vide
      const myerror = document.getElementById('locationError');
      myerror.innerHTML = "";
      return true;
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

// fonctions qui ajoutent ou retire du HTML si il y a une erreur ou non
const addError = (input, message) => {
   const parent = input.parentElement;
   parent.querySelector(".error").innerHTML = message;
   input.classList.add("borderError");
};
const removeError = (input) => {
   const parent = input.parentElement;
   parent.querySelector(".error").innerHTML = "";
   input.classList.remove("borderError");
}