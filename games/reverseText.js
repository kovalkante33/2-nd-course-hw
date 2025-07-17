//  Игра, где пользователю нужно ввести текст, который будет перевернут.
function reverseText() {
    let attempts = 0;

    // Цикл для перезапуска игры
    while (true) {
        const userWord = prompt('Введите текст для зеркального отображения или введите "0" для прекращения игры.');

        let reverseAnswer = userWord.split('').reverse().join('');
        alert(`Вы ввели: "${reverseAnswer}"`)
        attempts++

        // Условие для остановления игры
        if (attempts === 3 || userWord === 0) {
            break
        }
    }
}

reverseText()
