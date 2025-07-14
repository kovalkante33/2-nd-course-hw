//  создайте игру «Камень, ножницы, бумага», где пользователь играет против компьютера.
function rockScissorsPaper() {
    let attempts = 0;
    const arr = [
        "камень",
        "ножницы",
        "бумага"
    ]

    while (true) {
        const userAnswer = prompt('Введите свой выбор - "КАМЕНЬ", "НОЖНИЦЫ", "БУМАГА" или введите "0" для прекращения игры.').toLocaleLowerCase();
        const AIAnswer = arr[Math.floor(Math.random() * arr.length)]

        if (userAnswer === AIAnswer) {
            alert('Ничья!');
            attempts++
        } else if (
            (userAnswer === 'камень' && AIAnswer === 'ножницы') ||
            (userAnswer === 'ножницы' && AIAnswer === 'бумага') ||
            (userAnswer === 'бумага' && AIAnswer === 'камень')
        ) {
            alert('Вы победили!');
            attempts++
        } else {
            alert('Компьютер победил!');
            attempts++
        }

        // Условие для остановления игры
        if (attempts === 5 || userAnswer === 0) {
            break
        }
    }
}

rockScissorsPaper()
