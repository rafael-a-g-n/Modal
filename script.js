'use strict';

const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');

function openModal(modal, btnCloseModal) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  btnCloseModal.addEventListener('click', () => closeModal(modal));
}

function closeModal(modal) {
  // Start of the close animation
  modal.style.animation = 'slideOut 0.3s forwards';

  // Wait for the animation to finish, then hide the modal
  setTimeout(() => {
    modal.style.animation = '';
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }, 300); // Sync time with the animation duration
}

btnsShowModal.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = document.querySelector(btn.dataset.modalTarget);
    const btnCloseModal = modal.querySelector('.close-modal');
    openModal(modal, btnCloseModal);
  });
});

function closeAllOpenModals() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (!modal.classList.contains('hidden')) {
      closeModal(modal);
    }
  });
}

overlay.addEventListener('click', closeAllOpenModals);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeAllOpenModals();
  }
});
