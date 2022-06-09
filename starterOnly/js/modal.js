function editNav() {
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
modalBtn.forEach((btn) => btn.addEventListener("click", toggleModal));



// close modal event
closeBtn.addEventListener("click", toggleModal);


  function toggleModal(){
    if (modalbg.style.display === "none"){
      modalbg.style.display = "block";
    }
    else{
      modalbg.style.display = "none";
    }
  }