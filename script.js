'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal)


const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };
const openModals=()=>{
    console.log('Button Click');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    // modal.style.display="block"
}



for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(
    btnsOpenModal[i].addEventListener('click',openModals)
  );
}
// Close Modal
btnCloseModal.addEventListener('click', closeModal);
// Close Modal With Overlay
overlay.addEventListener('click', closeModal);


// KeyPress Methods

document.addEventListener('keydown',(e)=>{
  console.log(e.key)
    
})
