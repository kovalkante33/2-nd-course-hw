const hiddenNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
console.log(hiddenNumber);

function guessTheNumber() {
    let userAnswer = Number(prompt('введите ответ'))

    if (userAnswer === hiddenNumber) {
        alert(`🎉 Поздравляю! Вы угадали число ${hiddenNumber} за ${attempts} попыток!`)
    } else if (userAnswer < hiddenNumber) {
        alert("Загаданное число больше!");
        attempts++
        guessTheNumber()
    } else {
        alert("Загаданное число меньше!");
        attempts++
        guessTheNumber()
    }
}
