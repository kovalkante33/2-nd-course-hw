// Функция для генерации случайного арифметического вопроса
function generateQuestion() {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    switch (operation) {
        case '+':
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            answer = a + b;
            break;

        case '-':
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * a) + 1;
            answer = a - b;
            break;

        case '*':
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            answer = a * b;
            break;

        case '/':
            b = Math.floor(Math.random() * 10) + 1;
            answer = Math.floor(Math.random() * 10) + 1;
            a = b * answer;
            break;
    }

    return {
        question: `${a} ${operation} ${b}`,
        answer: answer
    };
}

// Основная функция игры
function simpleArithmetic() {
    let attempts = 0;

    while (true) {
        const { question, answer } = generateQuestion();

        alert(`Добро пожаловать в арифметическую игру! Решите предложенную задачу: ${question}`);

        const userAnswer = parseFloat(prompt(`Решите: ${question} или введите "0" для прекращения игры.`));
        attempts++

        if (attempts === 5 || userAnswer === 0) {
            break
        }

        if (userAnswer === answer) {
            alert("Правильно! Молодец!");
        } else {
            alert(`Неверно. Правильный ответ: ${answer}`);
        }
    }
}
