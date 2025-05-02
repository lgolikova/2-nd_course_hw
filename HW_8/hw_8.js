//1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => (a.age - b.age)));


//2
function isPositive(num) {
    return num > 0;
}

function isMale(human) {
    return human.gender === 'male';
}

function filter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale));


//3
let duration = 30000;
let interval = 3000;

const timerId = setInterval(() => {
    let date = new Date();
    console.log(date)
}, interval);

setTimeout(() => {
    clearInterval(timerId);
    console.log('30 секунд прошло');
}, duration);


//4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})


//5
function delayForSecond5(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond5(() => sayHi('Глеб'));