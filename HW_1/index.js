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
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;
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


function getReversedText() {
    let text = prompt('Введите текст');

    if (text === null) {
        return;
    }

    let reversedText = text.split('').reverse().join('');

    alert(`Перевернутый текст: ${reversedText}`);
}


function playQuiz() {
    const quiz = [
        {
            question: "Сколько примитивных типов данных в js?",
            options: ["1. Семь", "2. Восемь", "3. Девять"],
            correctAnswer: 1
        },
        {
            question: "Какой результат у выражения Boolean(' ')",
            options: ["1. true", "2. false", "3. undefined"],
            correctAnswer: 1
        },
        {
            question: "Что вернет выражение typeof null",
            options: ["1. null", "2. object", "3. undefined"],
            correctAnswer: 2
        },
        {
            question: "Какой тип данных у переменной, которой ещё не присвоено значение?",
            options: ["1. null", "2. false", "3. undefined"],
            correctAnswer: 3
        },
        {
            question: "Что вернёт выражение null == undefined",
            options: ["1. true", "2. false", "3. Ошибка"],
            correctAnswer: 1
        },
        {
            question: "Как называется функция внутри объекта?",
            options: ["1. Свойство", "2. Метод", "3. Конструктор"],
            correctAnswer: 2
        },
        {
            question: "Что будет выведено: console.log(0.1 + 0.2 === 0.3)",
            options: ["1. true", "2. false", "3. undefined"],
            correctAnswer: 2
        },
        {
            question: "Каким будет результат: console.log(1 && 2 && 0)",
            options: ["1. true", "2. false", "3. 0"],
            correctAnswer: 3
        },
        {
            question: "Какой метод добавляет элемент в начало массива?",
            options: ["1. shift()", "2. unshift()", "3. pop()"],
            correctAnswer: 2
        },
        {
            question: "Как обозначается оператор нулевого слияния?",
            options: ["1. !!", "2. ?", "3. ??"],
            correctAnswer: 3
        }
    ];

    let counter = 0;

    for(let i = 0; i < quiz.length; i++) {
        let answer = prompt(`Вопрос №${i + 1} (из 10) \n${quiz[i].question} \n\nВарианты ответов:\n${quiz[i].options.join('\n')}`);

        if (answer === null) {
            return;
        }

        if (+answer === quiz[i].correctAnswer || answer.toLowerCase().trim() === quiz[i].options[quiz[i].correctAnswer - 1].toLowerCase().trim().slice(3)) {
            alert('Верно!');
            counter++;
        } else {
            alert('Неверно');
        }
    }

    alert(`Игра окончена. Количество правильных ответов: ${counter}`);

}