// "use strict"

let user13 = {
    name: "Alice",
    greet() {
        console.log(this.name);
    }
};

let greetFn = user13.greet;
// user13.greet() // вызов функции greet, this = obj, obj.name = Alice
// greetFn() // обычная функция, в переменную greetFn копируем функцию, this = undefined в строгом режиме, а значит undefined.name выдаст typeError, в обычном режиме пустая строка, так как в window нет свойсва name

let obj = {
    value: 42,
    outer() {
        console.log("outer this:", this.value);

        function inner() {
            console.log("inner this:", this.value);
        }

        inner();
    }
};

obj.outer() // ?

// Исправьте inner с помощью (цель - this ссылается на объект):
// a) стрелочной функции
// b) сохранения ссылки const self = this
