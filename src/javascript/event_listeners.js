const logoCard = document.getElementsByClassName('logo-card');
for (let card of logoCard) {
    card.addEventListener('click', function() {
        alert('A card was clicked!');
    });
}