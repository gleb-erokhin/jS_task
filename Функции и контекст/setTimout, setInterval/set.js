console.log(' ')
console.log('Задание 1 - выполнение через задержку')
console.log('произойдет задержка вывода консоли на 1 секунду')
console.log('start')
setTimeout(() => {
    // console.log("Привет через 1 секунду");
}, 1000); // ?
console.log('finish, вывод setTimeout отработает после текущего кода ниже, что работает без таймаута, вывод уйдет за грани 1 задания')

console.log(' ')
console.log('Задание 2 - Передача аргумента в функцию через setTimeout')
console.log('вывод будет перед таймаутом с первой задачи')
function greet(name) {
    console.log(`Привет, ${name}!`);
}
// setTimeout(greet, 500, "Alice"); // запускаем функцию, задержка пол секунды, передаем переменную в функцию

console.log(' ')
console.log('Задание 3 - использование settimeout с остановкой через clearinterval')
console.log('функции присваивается название = ID с помощью чего его можно прерывать, используя условия останавливаем интервал при достижении значения 3')
let count = 0;
// const intervalId = setInterval(() => {
//     count++;
//     console.log(count);
//     if (count === 3) {
//         clearInterval(intervalId);
//         console.log("Интервал остановлен");
//     }
// }, 1000);

console.log('')
console.log('Задание 4 - использование settimeout с остановкой через clearinterval')
const timeoutId = setTimeout(() => {
    console.log("Это сообщение не появится");
}, 2000);

clearTimeout(timeoutId);
console.log("Таймер отменён"); // не будет запуска вообще timeoutId, выведется это сообщение и всё

console.log('')
console.log('Задание 5 - несколько таймеров')
console.log('выведется сначала последний консоль лог, потом второй потом первый')
// setTimeout(() => console.log("Первый таймер"), 500);
// setTimeout(() => console.log("Второй таймер"), 100);
console.log("Код после таймеров"); // ? (в каком порядке выведется?)

console.log('')
console.log('Задание 6 - таймер с аргументами')
console.log('выведется таймер с задержкой 0,8 сек. с переданными аргументами')
function introduce(name, age) {
    console.log(`${name} — ${age} лет`);
}
// setTimeout(introduce, 800, "Bob", 25); // ?

console.log('')
console.log('Задание 7 - счетчик с интервалом')
console.log('выполнение повторяется до тех пор пока i не станет больше 3х, после чего интервал останавливается через id')
let i = 1;
// const id = setInterval(() => {
//     console.log(i);
//     i++;
//     if (i > 3) clearInterval(id);
// }, 500);

console.log('')
console.log('Задание 8 - последовательные setTimeout')
console.log('вывод будет по задержке, 2, 3, 1')
// setTimeout(() => console.log("1"), 300);
// setTimeout(() => console.log("2"), 100);
// setTimeout(() => console.log("3"), 200);

console.log('')
console.log('Задание 9 - таймер внутри функции')
console.log('таймер сработает при вызове функции, сначала Мир потом Привет')
function delayedMessage(msg, delay) {
    setTimeout(() => console.log(msg), delay);
}
// delayedMessage("Привет", 400);
// delayedMessage("Мир", 200);

console.log('')
console.log('Задание 10 - повторяющаяся задача')
console.log('таймер обратный отсчет')
let number = 10;
// const interval = setInterval(() => {
//     console.log(number);
//     number--;
//     if (number === 0) clearInterval(interval);
// }, 300);

console.log('ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ')
console.log('')
console.log('Задание 1 - создание таймера с задержкой')
setInterval(() => {
    // console.log('через 5 секунд перезагрузка страницы')
}, 5000)

console.log('')
console.log('Задание 2 - обратный отсчет')
let count1 = 10
// const timerId = setInterval(() => {
//     console.log(count1)
//     count1--
//     if (count1 < 0) {
//         clearInterval(timerId)
//         console.log('Время вышло')
//     }
// })

console.log('')
console.log('Задание 3 - остановка таймера')
let count2 = 1
// const timerId2 = setInterval(() => {
//     console.log(`таймер работает ${count2}`)
//     count2++
//     if (count2 > 10) {
//         clearInterval(timerId2)
//         console.log('Таймер остановлен')
//     }
// })

console.log('')
console.log('Задание 4 - перемещение квадрата')
const square = document.querySelector('.square')
const block = document.querySelector('.block')
// воспользуемся функцией для получения объекта со всеми стилями и берем из него нужный нам left и width
let position = parseInt(getComputedStyle(square).left)
let widthSquare = parseInt(getComputedStyle(square).width)
// так же получаем ширину родительского контейнера в браузере.
let widthComtainer = parseInt(getComputedStyle(block).width)
// вычисляем значение при котором анимация должна остановится
let maxPosition = widthComtainer - (widthSquare / 2)

// запускаем интервал каждые 20 сек. изменяем полученный left
const moveID = setInterval(() => {
    position++
    let posLeft = position + 'px'
    square.style.left = posLeft
    if (position >= maxPosition) { 
        clearInterval(moveID) 
        console.log('Анимация стоп')
    }
}, 20)