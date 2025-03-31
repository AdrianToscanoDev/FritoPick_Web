const modalWindow = document.querySelector('.modal-window');
const closeBtn = document.querySelector('.close');

// open the modal 
function openModal() {
  modalWindow.style.display = 'block';
}

// Close the modal
closeBtn.onclick = function () {
  modalWindow.style.display = 'none';
};

// Close the modal when clicking outside of it
window.onclick = function (event) {
  if (event.target === modalWindow) {
    modalWindow.style.display = 'none';
  }
};

const modal = document.querySelector('.modal-window');
const openModalButtons = document.querySelectorAll('.open-modal'); // Adjust selector as needed
const closeModalButton = document.querySelector('.modal-header .icon.close');

/* Functions to deactivate scrolling on main page when modal is active */

// Function to open the modal
function openModal() {
    modal.style.display = 'block';
    document.body.classList.add('no-scroll'); // Disable scrolling
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll'); // Re-enable scrolling
}

// Add event listeners
openModalButtons.forEach(button => button.addEventListener('click', openModal));
closeModalButton.addEventListener('click', closeModal);