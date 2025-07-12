// // Задание 1
// let arr = [1, 5, 4, 10, 0, 3];
// for (const element of arr) {
//     console.log(`${element}`);
//     if (element === 10) {
//         break
//     }
// }

// // Задание 2
// let arr = [1, 5, 4, 10, 0, 3];
// console.log(arr.indexOf(4));

// // Задание 3
// let arr = [1, 3, 5, 10, 20];
// console.log(arr.join(' '));

// // Задание 4
// let arr = [];

// for (x = 0; x < 3; x++) {
//     let inArr = [];
//     for (z = 0; z < 3; z++) {
//         inArr.push(1);
//     }
//     arr.push(inArr)
// }

// console.log(arr);

// // Задание 5
// let arr = [1, 1, 1];

// for (let index = 0; index < 3; index++) {
//     arr.push(2)
// }

// console.log(arr);

// // Задание 6
// let arr = [9, 8, 7, 'a', 6, 5];

// console.log(arr.sort().filter(i => typeof i !== 'string'));

// // Задание 7
// let arr = [9, 8, 7, 6, 5];
// let answerUser = prompt('Угадай число в массиве')

// if (answerUser === null) {
//     alert("Вы отменили ввод");
// } else {
//     const guessedNumber = Number(answerUser);

//     if (!isNaN(guessedNumber) && arr.includes(guessedNumber)) {
//         alert("Угадал!");
//     } else {
//         alert("Не угадал");
//     }
// }

// // Задание 8
// const word = 'abcdef';
// let splitWord = word.split('');
// console.log(splitWord);
// let reverceWord = splitWord.reverse();
// console.log(reverceWord);
// let newWord = reverceWord.join('');
// console.log(newWord);

// // Задание 9
// const arr = [[1, 2, 3], [4, 5, 6]];

// let newArr = [...arr[0], ...arr[1]];
// console.log(newArr);

// // Задание 10
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i] + arr[i + 1]);
// }

// // Задание 11

// function squareElement(arr) {
//     let array = [];

//     for (let i = 0; i < arr.length; i++) {
//         array.push(arr[i] ** 2);
//     }
//     return array
// }

// console.log(squareElement([1, 2, 3, 4, 5, 6, 7, 8, 9]))
// console.log(squareElement([10, 20, 30, 40, 50, 60, 70, 80, 90]))


// Задание 12
// function lengthLines(arr) {
//     let array = [];

//     for (let i = 0; i < arr.length; i++) {
//         array.push(arr[i].length);

//     }
//     return array

// }

// console.log(lengthLines(['abcdefg', 'hijkl', 'mnopqr', 'stuvwxyz']));
// console.log(lengthLines(['абвг', 'деёжз', 'ийклмноп', 'рстуфх', 'цчшщъыьэюя']));


// // Задание 13
// const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, 0];

// function getNegativeNumbers(numbers) {
//     return numbers.filter(number => number < 0);
// }

// let negativeNumbers = getNegativeNumbers(numbers);
// console.log(negativeNumbers);

// // Задание 14
// const array = [];
// for (let i = 0; i < 10; i++) {
//     array.push(Math.floor(Math.random() * 11));
// }

// const newArray = array.filter(number => number % 2 === 0);

// console.log(`Исходный массив: ${array}`);
// console.log(`Массив с четными числами: ${newArray}`);

// // Задание 15
// const numbers = [];

// for (let i = 0; i < 6; i++) {
//     numbers.push(Math.floor(Math.random() * 10) + 1);
// }

// const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

// console.log(`Массив: [${numbers.join(', ')}]`);
// console.log(`Среднее значение: ${average.toFixed(2)}`);
