// displays alert when a card is clicked
const logoCard = document.getElementsByClassName('logo-card');
for (let card of logoCard) {
    card.addEventListener('click', function() {
        openModal();
    });
}