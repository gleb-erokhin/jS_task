// 1. Глобальная и локальная область
let globalVar = 'Глобальная';

function testScope() {
    let localVar = 'Локальная';
    console.log(globalVar); // ?Глобальная
    console.log(localVar);  // ?Локальная
}

testScope();
console.log(globalVar);    // ?Глобальная
console.log(typeof localVar); // ? undefined

// 2. Блочная область с let и const
if (true) {
    let blockLet = 'Блок let';
    const blockConst = 'Блок const';
    var blockVar = 'Блок var';
    console.log(blockLet);   // ?Блок let
    console.log(blockConst); // ?Блок const
    console.log(blockVar);   // ?Блок var
}

console.log(typeof blockLet);   // ? undefined
console.log(typeof blockConst); // ? undefined
console.log(blockVar);          // ?Блок var

// 3. Цикл и блочная область
for (let i = 0; i < 3; i++) {
    console.log('Цикл i внутри:', i); // ?
}
console.log(typeof i); // ? undefined

for (var j = 0; j < 3; j++) {
    console.log('Цикл j внутри:', j); // ?
}
console.log(j); // ? 3

// 4. Хоистинг var и let
console.log(a); // undefined
var a = 10;
console.log(a); // ?10

// console.log(b); // ? b is not defined
// let b = 20;
// console.log(b); // 20

// 5. Повторное объявление
var x = 1;
var x = 2;
console.log(x); // ? 2 - перезапишет

let y = 1;
// let y = 2; // ? Ошибка! нельзя 2 раз прописать let ReferenceError
console.log(y); // ? 1

const z = 5;
// z = 10; // ? Ошибка! constant veriable
console.log(z); // ? 5

// 6. Вложенные функции и области видимости
let outerVar = 'Вне';

function outer() {
    let innerVar = 'Внутри';
    console.log(outerVar); // ? вне
    console.log(innerVar); // ? внутри

    function inner() {
        let deepVar = 'Глубоко';
        console.log(outerVar); // ? Вне
        console.log(innerVar); // ? Внутри
        console.log(deepVar);  // ? Глубоко
    }

    inner();
    console.log(typeof deepVar); // ?  undefined
}

outer();
console.log(typeof innerVar); // ?  undefined

console.log('ЗАДАЧИ')

console.log('')
console.log('Задача 1 - Поведение var в блоке')
var x = 1;
console.log(x); // выведет 1, так как вывод после объявления

if (true) {
    var x = 2;
    console.log(x);
    // выведет 2 так как блочная зона видимости, но она заменила глобальную переменную
}

console.log(x);
// выведет 2 так как в блоке глобальная переменная была заменена

console.log('')
console.log('Задача 2 - Локальная область функции')
function foo() {
    var x = 1;
    if (x) {
        (function () {
            var x = 2;
            // переменная локальная для этой функции, затмивает переменную функции foo() но не изменяет ее
        }());
    }
    console.log(x);
    // выведет 1
}
foo();

console.log('')
console.log('Задача 3 - Поднятие функции и переменных')
function test() {
    // foo();
    console.log('функция foo() выбросит ошибку Uncaught TypeError: foo is not a function и прервет выполнение, потому что foo объявлена как функциональное выражение, а при этом foo поднимается на верх и равняется undefined на момент чтения интерпретатором.')
    bar();
    var foo = function () {
        alert("this won't run!");
        // инициализация переменной происходит после ее запуска, а значит это приведет к ошибке так как на началао чтения переменная foo будет равна undefined
    }
    function bar() {
        alert("this will run!");
    }
}
test();

console.log('')
console.log('Задача 4 - Влияния поднятия на переменные var внутри функции')
var foo = 1;
function bar() {
    if (!foo) {
        // заходим в условие так как foo инициализирована ниже и поднимаясь на функциональную область она равна undefined
        var foo = 10;
        // инициализируем переменную foo и выводим ее в консоль как раз внутри функции где она теперь доступна
    }
    console.log(foo);
}
bar();