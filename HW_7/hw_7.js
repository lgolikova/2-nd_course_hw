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