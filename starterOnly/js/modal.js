function editNav(event) {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// création const sur l'élément .close
const closeBtn = document.querySelector(".close"); 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleModal();
}));

// close modal event
closeBtn.addEventListener("click", toggleModal);
document.addEventListener('keydown', function(event){
	if(event.key === "Escape" && modalbg.style.display === "block"){
		console.log(event.key);
    toggleModal();
	}
});

function toggleModal(){
    if (modalbg.classList.contains("open")){  // condition pour ajouter une animation a la fermeture de la modal
      modalbg.style.animation = "closeModal 500ms both ";
      setTimeout (() => { // fonction pour faire un temps d'arret avant l'execution du code 
        modalbg.classList.toggle("open");
        modalbg.style.animation = ""; // changement de l'animation afin de ne pas avoir une boucle a la réouverture de la modal
      }, "500");
      
    }else{
      modalbg.classList.toggle("open");
    }
}