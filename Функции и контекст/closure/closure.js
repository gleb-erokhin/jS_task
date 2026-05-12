console.log('')
console.log('Задания в консоль - 1 - Простое замыкание')
console.log('безымянная функция возвращенная из outer() имеет доступ к переменной count, при вызове функции counter() безымянная функция уже знает про count и не ищет его выше.')
function outer() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

console.log('')
console.log('Задания в консоль - 2 - Несколько независимых замыканий')
console.log('функция позволяет выполнять код несколько раз, а так как мы его инициализироли в 2 разные переменные, мы получаем две отдельные функции counterA и counterB что в свою очередь создает две разных области видимости')
function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counterA = makeCounter();
const counterB = makeCounter();
console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1

console.log('')
console.log('Задания в консоль - 3 - Замыкания с параметрами')
console.log('при вызове функции double она уже помнит о том что было передано в переменную factor, и вернув функцию она ожидает аргумент number')
function makeMultiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

console.log('')
console.log('Задания в консоль - 4, 5 - Замыкание и цикл с var и let')
console.log('var задерживает переменную, в виду того что имеет функциональную область видимости, во время выполнения setTimeout for отработал и i уже равно 3, если заменить на let то получим 0 1 2')
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        // console.log(i);
    }, 100);
}
// 3 3 3

for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        // console.log(i);
    }, 100);
}
// 0 1 2

for (var i = 0; i < 3; i++) {
    (function (index) {
        setTimeout(function () {
            // console.log(index);
        }, 100);
    })(i);
}
// 0 1 2

console.log('')
console.log('Задания в консоль - 6 - IFFE для сохранения значения цикла')
console.log('на выходе мы получаем 0 1 2 потому что var передается в функциональную область видимости функции iffe, от этого создается отдельный контекст при каждой итерации, так как i передается в нее каждый раз новая')
for (var i = 0; i < 3; i++) {
    (function (index) {
        setTimeout(function () {
            // console.log(index);
        }, 100);
    })(i);
}
// 0 1 2 

console.log('')
console.log('Задания в консоль - 7 - инкапсуляция данных через замыкание')
console.log('переменная balance доступна только внутри функции createBankAccount() и изменять ее можно только через метод deposit')
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit(amount) { balance += amount; },
        getBalance() { return balance; }
    };
}

const account = createBankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150

console.log('')
console.log('Задания в консоль - 8 - освобождение памяти внутри замыкания')
console.log('при вызове функции createBigClosure() получаем огромный массив на миллион элементов, после стираем его - ограничивая длинну массива, при мервом запуске видим длинну массива и сразу очизщаем массив, а второй запуск дает ошибку так как не можем взять длинну массива установленного в null, для верного отображения вызовов без ошибок, код возвращаемой функции обернут в try / caych')
function createBigClosure() {
    let hugeArray = new Array(1000000).fill("data");
    return function () {
        try {
            console.log(hugeArray.length);
            hugeArray = null;
        } catch (error) {
            console.log(error.message)
        }
    };
}

const closure = createBigClosure();
closure(); // 1000000
closure(); // Error, length === null

console.log('')
console.log('Задания в консоль - 9 - замыкания с weakMap для приватных данных ')
console.log('функция User добавляет пару ключ-значение в массив privateData, с помощью нее мы через переменную u добавляем Bob в массив, тогда Bob становится ключом {name: "Bob"} а значением будет { token: "secret" }, в консоль мы хотим вывести значение по ключу Bob через свойство token')
const privateData = new WeakMap();

function User(name) {
    const userObj = { name };
    privateData.set(userObj, { token: "secret" });
    return userObj;
}

const u = User("Bob");
console.log(privateData.get(u).token); // secret

console.log('')
console.log('Задания в консоль - 10 - проверка независимых замыканий')
console.log('вызов двух функций fn1 и fn2 создает разные области видимости и глобальный контекст для каждой функции, так как при замыкании создается для каждой функции свое лексическое окружение')
function outer() {
    let val = 10;
    return function () {
        val += 5;
        console.log(val);
    };
}

const fn1 = outer();
const fn2 = outer();

fn1(); // 15
fn1(); // 20
fn2(); // 15
