//1
const arr = [1, 5, 4, 10, 0, 3];
for (let i=0; i<arr.length; i++) {
    if (arr[i] === 10) {
        console.log(10);
        break;
    }
    console.log(arr[i]);
}

//2
const array = [1, 5, 4, 10, 0, 3];
console.log(array.indexOf(4));

//3
const numbers = [1, 3, 5, 10, 20];
console.log(numbers.join(' '));

//4
//ВЛОЖЕННЫЕ ЦИКЛЫ

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
let arr9 = [[1, 2, 3],[4, 5, 6]];


//10


//11
let arr11 = [2, 5, 10, 88, 147];
function squareNum(...arr11) {

}
