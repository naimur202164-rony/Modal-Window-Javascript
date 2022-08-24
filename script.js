'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal)

// Loping the button
for(let i=0;i<btnsOpenModal.length ;i++ ){
    console.log(btnsOpenModal [i].addEventListener('click',()=>{
        console.log("Button Click");
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
        // modal.style.display="block"
    }))
}

btnCloseModal.addEventListener('click',()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
   
})