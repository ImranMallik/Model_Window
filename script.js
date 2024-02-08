'use strict';
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModel = document.querySelector('.close-modal');

const btnOpenModel = document.querySelectorAll('.show-modal');

// console.log(btnOpenModel.length);

btnOpenModel.forEach(btn => {
  btn.addEventListener('click', () => {
    // console.log('Btn Click');
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

btnCloseModel.addEventListener('click', () => {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
//   document.querySelector('body').classList.add('hidden');
});






