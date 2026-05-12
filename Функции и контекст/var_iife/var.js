console.log('')
console.log('Задача 1 - Области видимости')

var x = 10;
function testVar() {
    console.log(x); // undefined так как переменная поднимается вверх внутри функции, но инициализация еще не прошла
    var x = 20;
    console.log(x); // 20, так как объявленная var перекрывает внутри функции Глобальную переменную, но не изменяет её
}
testVar();
console.log(x); // 10, так как доступна только она, а var = 20 доступно только внутри функции

console.log('')
console.log('Задача 2 - Замыкание')

function createCounter() {
    let count = 1
    // Ваша реализация 
    return function () {
        return count++
    }
}
const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// воззвращается 1 в начале потому что постфиксный инкремент, сначала возвращает текущее значение и потом увеличивает его

console.log('')
console.log('Задача 3 - IIFE и области видимости')
var count = 5;
(function () {
    var count = 10;
    console.log(count); // 10, так как у функции переменные не "утекают"
})();
console.log(count); // 5, доступ к глобальной переменной

// разница между count внутри и снаружи. что это разные переменные. count внутри функции доступно только внутри.
// IIFE функции не выпускают наружу все внутренние переменные, работает только функциональная область видимости

console.log('')
console.log('Задача 4 - Замыкания и циклы')
// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i); // Что выведет? 
//     }, 1000);
// }
// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i); // Что выведет? 
//     }, 1000);
// }
// for (let i = 0; i < 5; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i); // Что выведет? 
//         }, 1000);
//     })(i)
// }

// выведется 5 пять раз, так как на время когда setTimeout начнет выводить консоль i уже будет равна 5, и за это время все 5 итераций уже прошли.
// от 0 до 4 не выводится потому что при объявлении переменной через var мы получаем функциональную область видимости и доступна для всей функции, а при let она будет доступно только в блоке, и каждый setTimeout будет обращаться к отдельной переменной созданной на каждой итерации цикла

console.log('')
console.log('Задача 5 - Замыкание с параметром')
function rememberValue(value) {
    // Ваша реализация
    return function () {
        return value
    }
}
const rememberTen = rememberValue(10);
console.log(rememberTen()); // 10
// value сохраняется так как локальная функция имеет ссылку на Глобальное окружение а переменная value имеет значение ПУСТО, поэтому JS идет выше и находит value = 10 у функции rememberValue

console.log('')
console.log('Задача 6 - IIFE и приватные переменные')
let counterModule = (function () {
    let count = 0

    return {
        increment: function () {
            count++
            console.log(count)
        },
        reset: function () {
            count = 0
            console.log(count)
        }
    }
})()

counterModule.increment(); // 1 
counterModule.increment(); // 2 
counterModule.increment(); // 3
counterModule.reset();
counterModule.increment(); // 1
// функция iife создает модеуль с изолированными переменными с доступом только через методы, запускается сразу. 
// функция запущенная через замыкания ожидает запуска и не создается мгновенно, и возвращает объект методов через которые можно управлять функцией - только после ее вызова.

console.log('')
console.log('Задача 7 - области видимости переменных в циклах')
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i); // 3 раза выведет 3 - цикл поройдет по всем итерациям и будет равна 3, так как var дает доступ к функциональной области видимости на уровне цикла.
    }, 1000);
}
for (let j = 0; j < 3; j++) {
    setTimeout(function () {
        console.log(j); // 0 1 2 - доступ будет только к каждой итериации цикла, так как let имеет блочную область видимости
    }, 1000);
}