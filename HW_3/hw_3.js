//1
let password = 'пароль';
let userPassword = prompt('Введите пароль', '');
if (password === userPassword) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//2
let c = 8;
(c>0 && c<10) ? alert('Верно') : alert ('Неверно');

//3
let d = 116;
let e = 27;
if (d>100 && e>100) {
    alert('Неверно');
} else if (d>100 || e>100) {
    alert('Верно');
} else {
    alert('Неверно');
}

//4
let a = '2';
let b = '3';
alert(+a + +b);

//5
let monthNumber = 12;
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;
    default:
        alert('Месяца с таким номером в году не существует')
        break;
}

//Дополнительные задания
//1
let num = prompt('Пожалуйста, введите любое число', '');
if (+num && num%2==0) {
    alert('Число четное');
} else if (+num && num%2!==0){
    alert('Число нечетное');
} else {
    alert('Введенные символы не являются числом');
}

//2
let clientOS = 1;
if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    console.log('Установите версию приложения для Android  по ссылке');
} else {
    console.log('В данный момент не существует мобильного приложения для вашей операционной системы. Используйте браузерную версию');
}

//3
let clientOpSystem = 0;
let clientDeviceYear = 2015;
if (clientOpSystem === 0 && clientDeviceYear>=2015) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOpSystem === 0 && clientDeviceYear<2015) {
    alert('Установите облегченную версию приложения для iOS по ссылке')
} else if (clientOpSystem === 1 && clientDeviceYear>=2015) {
    alert ('Установите версию приложения для Android  по ссылке')
} else if (clientOpSystem === 1 && clientDeviceYear<2015) {
    alert ('Установите облегченную версию приложения для Android по ссылке');
} else {
    alert ('В данный момент не существует мобильного приложения для вашей операционной системы. Используйте браузерную версию');
}
