const shopCard = document.querySelector('#shopping-card');
const close = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');

const modalBody = document.querySelector('.modal-body');
const modalCounter = document.querySelector('.modal-counter');
const countPlus = document.querySelectorAll('.counter-plus');
const countMinus = document.querySelectorAll('.counter-minus');
let counter = document.querySelectorAll('.counter');

//Toggle modal

func = function () {
  modal.classList.toggle('is-open')
};

shopCard.addEventListener('click', func);
close.addEventListener('click', func);

new WOW().init();


// Counter
console.log(countPlus);
modalBody.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    console.log(e.target.parentNode.children)
  }
})


