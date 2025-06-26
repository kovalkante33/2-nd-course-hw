// Задание 1
// Создайте программу проверки правильности введенного пароля по следующему алгоритму:

// let password = 'пароль';

// let answer = prompt('введите пароль');
// if (answer === password) {
//     alert('Пароль введен верно');
// } else {
//     alert('Пароль введен неправильно')
// }

// Задание 2

// let c = prompt('введите число');

// (c >= 0 && c <= 10) ? console.log('Верно') : console.log('Неверно');

// Задание 3

// let d = prompt('введите первое число');
// let e = prompt('введите второе число');

// if (d >= 100 || e >= 100) {
//     console.log('верно');
// } else {
//     console.log('неверно');
// }

// Задание 4

// let a = '2';
// let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
// alert(Number(a) + Number(b));

// Задание 5
// let answer = prompt('какой месяц?');
// const monthNumber = 12;

// if (answer > monthNumber) {
//     alert('такого месяца нет');
// } else {
//     switch (answer) {
//         case '12':
//         case '1':
//         case '2':
//             alert('Зима');
//             break;
//         case '3':
//         case '4':
//         case '5':
//             alert('Весна');
//             break;
//         case '6':
//         case '7':
//         case '8':
//             alert('Лето');
//             break;
//         case '9':
//         case '10':
//         case '11':
//             alert('Осень');
//             break;
//         default:
//             alert('Такого месяца нет');
//             break;
//     }
// }

// Дополнительные задания
// Задание 1

// let answer = prompt('введите число');

// if (isNaN(answer)) {
//     alert('не число');
// } else if (answer % 2 === 0) {
//     alert('Число четное');
// } else {
//     alert('Число не четное');
// }

// Задание 2, 3

let clientOS = Number(prompt('Укажите ОС Вашего устройства. Где 0 - iOS, 1 - Andoid'));
let clientDeviceYearAnswer = Number(prompt('Год выпуска'));
const clientDeviceYear = 2015;

if (clientOS === 0 && clientDeviceYear <= clientDeviceYearAnswer) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1 && clientDeviceYear <= clientDeviceYearAnswer) {
    console.log('Установите версию приложения для Android по ссылке');
} else if (clientOS === 0 && clientDeviceYear >= clientDeviceYearAnswer) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS === 1 && clientDeviceYear >= clientDeviceYearAnswer) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else {
    console.log('Некорректные данные');
}

