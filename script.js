'use strict';

const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');

function openModal(modal, btnCloseModal) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  btnCloseModal.addEventListener('click', function () {
    closeModal(modal);
  });
}

function closeModal(modal) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', function () {
    const modal = document.querySelector(btnsShowModal[i].dataset.modalTarget);
    const btnCloseModal = modal.querySelector('.close-modal');
    openModal(modal, btnCloseModal);
  });
}

overlay.addEventListener('click', function () {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (!modal.classList.contains('hidden')) {
      closeModal(modal);
    }
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (!modal.classList.contains('hidden')) {
        closeModal(modal);
      }
    });
  }
});
