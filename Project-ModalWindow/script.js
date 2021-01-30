"use strict";
// Storing all selectors in their respective variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// console.log(btnsOpenModal);

// for(let i = 0; i < btnsOpenModal.length; i++)
//     console.log(btnsOpenModal[i].textContent);

// Create a open modal function to avoid the repetitive code for btnsOpenModal and overlay
const openModal = function () {
    modal.classList.remove("hidden"); // modal will be shown
    overlay.classList.remove("hidden"); // overlay will be shown
  };

// Loop through the open modal buttons and remove the hidden class on clicking
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal);
}

// Create a close modal function to avoid the repetitive code for btnCloseModal and overlay
const closeModal = function () {
    modal.classList.add("hidden"); // modal will be hidden
    overlay.classList.add("hidden"); // overlay will be hidden
  };

// On clicking close modal (X), the modal window should be hidden along with the overlay functionality
btnCloseModal.addEventListener("click", closeModal);

// On clicking outside of the modal, the modal should be hidden and the overlay will be hidden
overlay.addEventListener("click", closeModal);

// Responding to keyboard events  (Global events)
document.addEventListener("keydown", function(e) {
  // console.log("A key was pressed"); // doesn't show which key was pressed
  //console.log(e); // Shows all the core information of the pressed key 
 // console.log(e.key); // Shows which key was pressed on the console
 if(e.key === 'Escape') { // if pressed key was equal to 'Escape'
 //  if(e.key === 'Escape' && !modal.classList.contains('hidden')) { // This will work too  
  // console.log('Escape was pressed'); // then execute this 
  // close a visible modal when Escape button is pressed
  // modal.classList.add('hidden');
  // overlay.classList.add('hidden');
  closeModal(); // call close modal function
}

});