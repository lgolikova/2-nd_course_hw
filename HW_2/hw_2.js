// 1
let a;
a = 10;
alert(a);
a = 20;
alert(a);

// 2
let year = 2007;
alert(year);

// 3
let creator = 'Брендан Эйх';
alert(creator);

// 4
let x = 10;
let y = 2;
alert(x+y);
alert(x-y);
alert(x*y);
alert(x/y);

// 5
let result = 2**5;
alert(result);

// 6
let c = 9;
let d = 2;
alert(c%2);

//7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

//8
let age = prompt('Сколько вам лет?', '');
alert(age);

//9
let user = {
    name: 'Mila',
    age: 36,
    isAdmin: true
};

//10
let username = prompt('Как вас зовут?', '');
alert(`Привет ${username}!`);


//Дополнительное задание
let number = prompt('Загадайте любое число', '');

let doubleNumber = +number*2;
alert(`Удвоенное значение равно ${doubleNumber}`);

let addNumber = doubleNumber + 10;
alert(`Прибавили 10, получилось: ${addNumber}`);

let divideNumber = addNumber/2;
alert(`Разделили на 2, получилось: ${divideNumber}`);

let subtractNumber = divideNumber - number;
alert(`Вычли первоначально загаданное число, получилось: ${subtractNumber}`);

alert('Ответ равен 5');



