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


