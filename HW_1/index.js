function guessNumber() {
    let number = Math.floor(Math.random() * 100) + 1;
    let answer = prompt("Угадайте число от 1 до 100");
    let counter = 1;

    if (answer === null) {
        return;
    }

    while(answer!==null) {
        if (+answer > number) {
            alert(`Загаданное число меньше ${answer}. Попробуйте снова.`);
        } else if (+answer < number) {
            alert(`Загаданное число больше ${answer}. Попробуйте снова.`);
        } else if (+answer == number) {
            alert(`Вы угадали! Количество попыток: ${counter}`);
            return;
        }

        counter++;
        answer = prompt('Введите число');
    }

    alert("Игра отменена.");
}


function mathGame() {
    const arr = ['+', '-', '*', '/'];
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let index = Math.floor(Math.random() * 4);
    let solution;

    let answer = prompt(`Сколько будет ${num1} ${arr[index]} ${num2}?`);

    if (answer === null) {
        return;
    }

    switch (index) {
        case 0:
            solution = num1 + num2;
            break;
        case 1:
            solution = num1 - num2;
            break;
        case 2:
            solution = num1 * num2;
            break;
        case 3:
            solution = Math.round((num1 / num2) * 100) / 100;
            break;
    }

    if (+answer === solution) {
        alert('Верно! 😎');
    } else {
        alert(`Неверно. Правильный ответ: ${solution}`);
    }

}

