const modalWindow = document.querySelector('.modal-window');
const closeBtn = document.querySelector('.close');

function openModal() {
  modalWindow.style.display = 'block';
}

// Close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
};

  // Close the modal when clicking outside of it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
};