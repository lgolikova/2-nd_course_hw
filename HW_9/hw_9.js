//1
const btn1 = document.querySelector('.btn-task1');
const text1 = document.querySelector('.heading-task1');
btn1.addEventListener('click', () => {
    if (text1.style.display === 'none') {
        text1.style.display = 'block';
        btn1.textContent = 'Скрыть текст';

    } else {
        text1.style.display = 'none';
        btn1.textContent = 'Показать текст';
    }
})


//2
const btn2 = document.querySelector('.btn-task2');
const text2 = document.querySelector('.text-task2');
btn2.addEventListener('click', () => {
    text2.style.color = 'blue';
})


//3
const btn3 = document.querySelector('.btn-task3');
const text3 = document.querySelector('.heading-task3');
btn3.addEventListener('click', () => {
    text3.textContent = 'Привет, мир!';
})


//4
// const btn4 = document.querySelector('.btn-task4');
const text4 = document.querySelectorAll('.description');
// btn4.addEventListener('click', () => {
//     console.log(text4);
//     text4.forEach(item => item.textContent = 'Измененный текст');
// })
text4.forEach(item => item.textContent = 'Измененный текст');


//5
const text5 = document.querySelectorAll('.description2');
text5.forEach(item => item.textContent = 'Новый текст');


//6
const btn6 = document.querySelector('.btn-task6');
btn6.addEventListener('click', () => {
    const text6 = document.createElement('p');
    text6.textContent = 'Новый абзац';
    document.body.appendChild(text6);
})


//7
const text7 = document.querySelector('.description3');
const btn7 = document.querySelector('.btn-task7');
btn7.addEventListener('click', () => {
    text7.remove();
})