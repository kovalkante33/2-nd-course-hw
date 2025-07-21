//  Игра, где пользователю нужно ввести текст, который будет перевернут.
function reverseText() {

    // Цикл для перезапуска игры
    while (true) {
        const userWord = prompt('Введите текст для зеркального отображения или введите "exit" для прекращения игры.');

        // Условие для остановления игры
        if (userWord === "exit") {
            break
        }

        let reverseAnswer = userWord.split('').reverse().join('');
        alert(`Вы ввели: "${reverseAnswer}"`)
        attempts++

    }
}
