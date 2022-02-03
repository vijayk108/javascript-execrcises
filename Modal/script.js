'use strict';

const modal = document.querySelector('.modal');
console.log(modal);
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btOpensModal = document.querySelectorAll('.show-modal');
console.log(btOpensModal);

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btOpensModal.length; i++)
  btOpensModal[i].addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //console.log('A key was passed');
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
