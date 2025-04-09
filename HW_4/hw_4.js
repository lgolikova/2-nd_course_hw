//1
for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

//2
let a = 1;
while (a < 6) {
    console.log(a);
    a++;
}

//3
for (let j = 7; j <= 22; j++) {
    console.log(j);
}

//4
let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let key in obj) {
    console.log(`${key} — ${obj[key]}`);
}

//5
let n = 1000;
let num = 0;
while (n >= 50) {
    n= n / 2;
    num++;
}
console.log(n);
console.log(num);

//6
let p = 4;
while (p <= 31) {
    console.log(`Сегодня пятница, ${p}-е число. Необходимо подготовить отчет.`)
    p += 7;
}

//Дополнительные задания
//1
let iterations = 0;
let k = 100;
for (let i = 0; i < 100; i++) {
    k -= 7;
    iterations++;
    if (k < 0) {
    break;
    }
}
console.log(iterations);
console.log(k);

//2
let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
for (let i = 0; i < 12; i++) {
    console.log(`${i + 1} : ${months[i]}`);
}

//3
let book = {
    "название": "Норвежский лес",
    "автор": "Харуки Мураками",
    "год издания": 1987,
    "жанр": "роман"
};

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

//4
let arr = [45, 12, 89, 3, 67, 34, 91, 22, 56, 8];
let min = arr[0];
let i = 0;

while (i < arr.length - 1) {
    if (arr[i + 1] < min) {
        min = arr[i + 1];
    }
    i++;
}

console.log(min);