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
