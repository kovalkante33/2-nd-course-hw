const hiddenNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
console.log(hiddenNumber);

function guessTheNumber() {
    while (true) {
        let userAnswer = Number(prompt('Введите число от 1 до 100 (или "0" для выхода)'))

        if (userAnswer === 0) {
            alert(`Игра завершена. Загаданное число было: ${hiddenNumber}`);
            break
        }

        if (userAnswer === hiddenNumber) {
            alert(`🎉 Поздравляю! Вы угадали число ${hiddenNumber} за ${attempts} попыток!`)
        } else if (userAnswer < hiddenNumber) {
            alert("Загаданное число больше!");
            attempts++
        } else {
            alert("Загаданное число меньше!");
            attempts++
        }
    }

}
