function getRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    const gamesSection = document.querySelector('.games');
    if (gamesSection) {

        gamesSection.style.backgroundColor = randomColor;

        console.log(`Цвет изменен на: ${randomColor}`);
    }
}