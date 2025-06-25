// Задание 1
// for (let i = 0; i <= 2; i++) {
//     console.log('Привет!');
//     i++;
// }

// Задание 2
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Задание 3
// for (let i = 7; i <= 22; i++) {
//     console.log(i);
// }

// Задание 4
// let obj = {
//     "Коля": '200',
//     "Вася": '300',
//     "Петя": '400',
// }

// for (let key in obj) {
//     console.log(`${key} - зарплата ${obj[key]} долларов`);
// }

// Задание 5
// let n = 1000;
// let num = 0;

// for (i = 0; i <= 50; i++) {
//     n /= 2;
//     num++;
// }
// console.log(`Итоговое число ${n}`);
// console.log(`Количество итераций ${num}`);

// Задание 6
// let firstFridayMonth = 5;

// for (i = 1; i <= 31; i++) {
//     if (i === firstFridayMonth) {
//         console.log(`Сегодня пятница, ${firstFridayMonth}-е число. Необходимо подготовить отчет.`);
//         firstFridayMonth += 7;
//     }
// }

// Дополнительние задание задание 1
// let k = 100;
// let iterations = 0;

// for (i = 100; i > 0; i -= 7) {
//     k -= 7;
//     iterations += 1;
// }
// console.log(`Итоговое число ${k}`);
// console.log(`Количество итераций ${iterations}`);

// Дополнительние задание задание 2
// const months = {
//     1: "Янвать",
//     2: "Февраль",
//     3: "Март",
//     4: "Апрель",
//     5: "Май",
//     6: "Июнь",
//     7: "Июль",
//     8: "Август",
//     9: "Сентябрь",
//     10: "Октябрь",
//     11: "Ноябрь",
//     12: "Декабрь"
// }

// for (let key in months) {
//     console.log(`Месяц ${months[key]} - это ${key}-й месяц в году. `);
// }

// Дополнительние задание задание 3
// let book = {
//     title: "Всё-таки ёлка!",
//     author: "Юлия Весова",
//     year: "2024",
//     genre: "Приключение",
// }

// for (let key in book) {
//     console.log(`${key}: ${book[key]}.`);
// }

// Дополнительние задание задание 4
// let randomArray = [42, 17, 89, 5, 73, 31, 64, 93, 21, 56];
// let minNumber = randomArray[0];
// let i = 1;

// while (i < randomArray.length) {
//     if (randomArray[i] < minNumber) {
//         minNumber = randomArray[i];
//     }
//     i++
// }
// console.log(`Минимальное число в массиве: ${minNumber}`);