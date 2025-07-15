// Задание 1
let a = 'js';
console.log(a.toLocaleUpperCase());

// Задание 2
const arr = [
    "coolCat",
    "coolDog",
    "123",
    "cool_programmer",
    "coolWeather",
    "Music",
    "Game",
    "App",
    "coolProject",
    "Idea"
];
let word = 'cool';

function getCoolWords(arr, word) {
    const lowerWord = word.toLowerCase();
    return arr.filter(item =>
        item.toLowerCase().startsWith(lowerWord)
    );
}

console.log(getCoolWords(arr, word));

// Задание 3
const x = 32.58884;

console.log(Math.floor(x));
console.log(Math.ceil(x));
console.log(Math.round(x));

// Задание 4
const array = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...array));
console.log(Math.max(...array));

// Задание 5
function randomNum() {
    let a = Math.floor(Math.random() * 10) + 1;
    console.log(a);
}

randomNum()

// Задание 6
function getRandomArray(n) {
    if (n <= 0) return [];

    const length = Math.floor(n / 2);
    const result = [];

    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * (n + 1));
        result.push(randomNum);
    }

    return result;
}

console.log(getRandomArray(10));
console.log(getRandomArray(5));
console.log(getRandomArray(0));

// Задание 7
function getRandomNumber(a, b) {
    let result = 0;
    return result = Math.floor(Math.random(a) * b);
}

console.log(getRandomNumber(10, 5));
console.log(getRandomNumber(14, 55));
console.log(getRandomNumber(29, 34));

// Задание 8
console.log(new Date());

// Задание 9
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 73)

console.log(futureDate.toDateString());

// Задание 10
function formatDateRussian(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const weekDays = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekDay = weekDays[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${weekDay}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDateRussian(currentDate));
