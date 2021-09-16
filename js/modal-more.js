(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-more-open]'),
      closeModalBtn: document.querySelector('[data-modal-more-close]'),
      modal: document.querySelector('[data-modal-more]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();