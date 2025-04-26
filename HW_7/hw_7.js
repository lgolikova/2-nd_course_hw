//1
let str = 'js';
console.log(str.toUpperCase());


//2
function func2(arr, str) {
    let arr2 = arr.map(item => item.toLowerCase());
    let str2 = str.toLowerCase();
    let result = arr2.filter(el => el.startsWith(str2));
    return result;
}

console.log(func2(['One dollar', 'five rooms', 'nine planets', 'one apple', 'six years old', 'one cat', 'seven days'], 'One'));


//3
let num = 32.58884;
console.log(Math.floor(num), Math.ceil(num), Math.round(num));


//4
let arr4 = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...arr4), Math.max(...arr4));


//5
function func5() {
    let result = Math.floor(Math.random()*10 + 1);
    console.log(result);
}

func5();


//6
function func6(num) {
    let result = [];
    let len = Math.floor(num/2);
    for(let i = 0; i < len; i++) {
    result.push(Math.floor(Math.random()*(num + 1)));
    }
    return result;
}

console.log(func6(11));


//7
function func7(num1, num2) {
    let result = Math.floor(Math.random()*(num2 - num1 + 1)) + num1;
    return result;
}

console.log(func7(5, 8));


//8
let date = new Date();
console.log(date);


//9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73); 
console.log(currentDate);

// let days73 = 73 * 24 * 60 * 60 * 1000;
// let searchDate = +currentDate + days73;
// let daysAgo73 = new Date(searchDate);
// console.log(daysAgo73);


//10
function getDate() {
    let date = new Date();
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    let fullDate = 'Дата: ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' — ' + days[date.getDay()] + '.' +'\n' + 'Время: ' + String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0') + ':' + String(date.getSeconds()).padStart(2, '0') + '.';
    return fullDate;
}

console.log(getDate());