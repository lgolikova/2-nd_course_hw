// 1
function minNumber(a, b) {
    if (a <= b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(minNumber(5, 2));

//2
function evenOrOdd(n) {
    return(n % 2 == 0) ? 'Число четное' : 'Число нечетное';
}
console.log(evenOrOdd(7));

//3
function squareNumber(num) {
    console.log(num**2);
}
squareNumber(9);

function squareNumber2(num) {
    let result = (num**2);
    return result;
}
console.log(squareNumber2(123));

//4
function greeting() {
    let age = +prompt('Сколько вам лет?', '');
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}
greeting();

//5
function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return('Одно или оба значения не являются числом');
    } else {
        return a*b;
    }
}
console.log(multiply('abc', 5));

//Если требуется еще и проверка, чтобы значения не были строками (например '123') и не преобразовывались в числа при умножении:
function multiply2(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return('Одно или оба значения не являются числом');
    } else {
        return a*b;
    }
}
console.log(multiply2('2', 5));

//6
function cube() {
    let n = +prompt('Введите число');
    return (!!isNaN(n)) ? ('Переданный параметр не является числом') : (`${n} в кубе равняется ${n**3}`);
}
console.log(cube());

//7
function getArea() {
    return(Math.PI * this.radius**2);
}

function getPerimeter() {
    return(2 * Math.PI * this.radius);
}

const circle1 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter
}

const circle2 = {
    radius: 28,
    getArea: getArea,
    getPerimeter: getPerimeter
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());