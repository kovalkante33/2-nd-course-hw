// Задание 1
// function minMax(a, b) {
//     if (a >= b) {
//         return b
//     } else {
//         return a
//     }
// }

// console.log(minMax(4, 6));
// console.log(minMax(1, 9));
// console.log(minMax(1, 0));
// console.log(minMax(6, 6));

// Задание 2
// function numbers(n) {
//     if (n % 2 === 0) {
//         console.log('число чётное');
//     } else {
//         console.log('число не чётное');
//     }
// }

// Линейная функция
// const numbers = n => console.log(n % 2 === 0 ? 'число чётное' : 'число не чётное');

// numbers(1);
// numbers(10);
// numbers(4);
// numbers(7);
// numbers(5);

// Задание 3
// const numberOne = n => console.log(n ** 2);

// numberOne(2);
// numberOne(4);
// numberOne(6);

// const numberTwo = m => m ** 2 ;

// console.log(numberTwo(3));
// console.log(numberTwo(5));
// console.log(numberTwo(7));

// Задание 4
// function sayHello() {
//     let userAnswer = Number(prompt('Укажите ваш возраст'));

//     if (userAnswer < 0) {
//         alert('Вы ввели неправильное значение')
//     } else if (0 < userAnswer && userAnswer <= 12) {
//         alert('Привет, друг!')
//     } else {
//         alert('Добро пожаловать!')
//     }
// }

// sayHello();

// Задание 5
// function isNumber(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         console.log('Одно или оба значения не являются числом');
//         return
//     }
//     console.log(a * b);
// }

// isNumber(2, 5);
// isNumber(2, '0');
// isNumber(45, 78);
// isNumber(2, 'focus');
// isNumber('text', 'text');

// Задание 6
// function anyFunction() {
//     let num = Number(prompt('Введите число'));

//     if (isNaN(num)) {
//         console.log('Переданный параметр не является числом');
//         return
//     } else {
//         console.log(`${num} в кубе равняется ${num ** 3}`);
//     }
// }

// anyFunction()

// Задание 7
// const circle1 = {
//     radius: 12,
//     getArea() {
//         return Math.PI * this.radius ** 2;
//     },
//     getPerimeter() {
//         return 2 * Math.PI * this.radius;
//     }
// };

// const circle2 = {
//     radius: 34,
//     getArea() {
//         return Math.PI * this.radius ** 2;
//     },
//     getPerimeter() {
//         return 2 * Math.PI * this.radius;
//     }
// };

// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());

// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());