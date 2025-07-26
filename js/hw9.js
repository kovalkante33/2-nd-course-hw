// // Задание 1. Скрытие и показ текста
const titleEl = document.querySelector('.title');
const btnHideEl = document.querySelector('.btn__hide');

let isHidden = false;

btnHideEl.addEventListener('click', function () {
    if (isHidden) {
        titleEl.textContent = 'Проверка домашнего задания';
        btnHideEl.textContent = 'Скрыть';
    } else {
        titleEl.textContent = '';
        btnHideEl.textContent = 'Показать';
    }
    isHidden = !isHidden;
});

// Задание 2. Изменение стиля элемента
const descriptionEl = document.querySelector('.description');
const btnColorEl = document.querySelector('.btn__color');

let isColor = false;

btnColorEl.addEventListener('click', function () {
    if (isColor) {
        descriptionEl.style.color = 'black';
        btnColorEl.textContent = 'Красный';
    } else {
        descriptionEl.style.color = 'red';
        btnColorEl.textContent = 'Чёрный';
    }
    isColor = !isColor;
});

// Задание 3. Динамическое изменение текста
const btnNewTxtEl = document.querySelector('.btn__newtxt');

btnNewTxtEl.addEventListener('click', function () {
    titleEl.textContent = '«Привет, мир!»';
});

// Задание 4. Поиск и изменение элементов по классу
descriptionEl.textContent = '«Измененный текст»';

// Задание 5. Работа с querySelectorAll
const allDescriptions = document.querySelectorAll('.description');

allDescriptions.forEach(description => {
    description.textContent = '«Новый текст»';
});

// Задание 6. Добавление нового элемента в DOM
const btnNewHTML = document.querySelector('.btn__newhtml');

btnNewHTML.addEventListener('click', function () {
    const anotherP = document.createElement('p');
    anotherP.textContent = '«Новый абзац»';

    const lastParagraf = document.querySelector('.descr');
    document.body.appendChild(anotherP, lastParagraf);
});

// Задание 7. Удаление элемента
const btnDelEl = document.querySelector('.btn__del');

btnDelEl.addEventListener('click', function () {
    descriptionEl.remove();
});