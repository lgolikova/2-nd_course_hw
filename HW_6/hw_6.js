//1
const arr = [1, 5, 4, 10, 0, 3];
for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
}


//2
const array = [1, 5, 4, 10, 0, 3];
console.log(array.indexOf(4));


//3
const numbers = [1, 3, 5, 10, 20];
console.log(numbers.join(' '));


//4
const arr4 = [];
for (let i = 0; i < 3; i++) {
    let innerArr = [];
    for (let j = 0; j < 3 ; j++) {
        innerArr.push(1);
    }
    arr4.push(innerArr);
}
console.log(arr4);


//5
const arr5 = [1, 1, 1];
console.log(arr5.concat(2, 2, 2));


//6
const arr6 = [9, 8, 7, 'a', 6, 5];
const filteredArr6 = arr6.filter(num => typeof num === "number");
console.log(filteredArr6.sort((a, b) => (a-b)));


//7
const arr7 = [9, 8, 7, 6, 5];
let answer = +prompt('Попробуйте угадать число от 1 до 10');
let flag;
for (i=0; i<arr7.length; i++) {
    if (arr7[i] == answer) {
        flag = true;
        break;
    } else {
        flag = false;
    }
}

alert((flag === true) ? 'Угадал' : 'Не угадал');


//8
let str = 'abcdef';
let result = str.split('').reverse().join('');
console.log(result);


//9
const arr9 = [[1, 2, 3],[4, 5, 6]];
const unitedArr9 = [...arr9[0], ...arr9[1]]
console.log(unitedArr9);


//10
const arr10 = [8, 3, 4, 9, 9, 1, 7, 2, 5, 10];
for (i=0; i<arr10.length-1; i++) {
    console.log(arr10[i] + arr10[i+1]);
}


//11
const arr11 = [2, 5, 10, 88, 147];
function squareNum(arr) {
    return arr.map(el => el**2);
}
console.log(squareNum(arr11));


//12
const arr12 = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять'];
function getLength(arr) {
    return arr.map(el => el.length);
}
console.log(getLength(arr12));


//13
const arr13 = [-5, 8, 9, -16, 3, -2, -25, 44, 11, -37];
function getNegative(arr) {
    return arr.filter(item => item < 0);
}
console.log(getNegative(arr13));


//14
const arr14 = [];
let j = 0;
while (j < 10) {
    arr14.push(Math.floor(Math.random() * 11));
    j++;
}
const evenNums = arr14.filter(el => el % 2 === 0);
console.log(arr14, evenNums);


//15
const arr15 = [];
let k = 0;
while (k < 6) {
    arr15.push(Math.floor(Math.random()*10) + 1);
    k++;
}
console.log(arr15);
let sum = arr15.reduce((acc, num) => acc + num, 0);
console.log(sum/6);