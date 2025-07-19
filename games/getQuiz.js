// Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function getQuiz() {
    let correctAnswersCount = 0;

    for (let i = 0; i < quiz.length; i++) {

        let questionText = quiz[i].question + "\n";
        questionText += quiz[i].options.join("\n");

        const userAnswer = parseInt(prompt(questionText));

        if (userAnswer === quiz[i].correctAnswer) {
            correctAnswersCount++;
        } else if ((userAnswer > quiz[i].options.length) ||
            (isNaN(userAnswer))) {
            alert('Введенное значение не корректно!');
            i--;
        }

        if (userAnswer === 0) {
            break
        }
    }
    alert(`Вы ответили правильно на ${correctAnswersCount} из ${quiz.length} вопросов!`);
}
