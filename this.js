"use strict"

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

        // a) стрелочной функции, стрелочная функция берет this от outer
        // const inner = () => {
        //     console.log("inner this:", this.value);
        // }

        // b) сохранения ссылки const self = this, это переменная которая сохраняется в то время в которое inner теряет контекст this от outer
        // const self = this;
        // function inner() {
        //     console.log("inner this:", self.value);
        // }

        function inner() {
            console.log("inner this:", this.value);
        }
        inner();
    }
};

// obj.outer()
// ответ в обычном режиме
//  outer this: 42 - синтаксис вызова через точку, inner this: undefined так как вызов обычная вложенная функция,
// в strict mode: outer this 42 - синтаксис вызова через точку, inner выдаст typeError так как он вызывается сомстоятельно вне конкретного объекта


// Исправьте inner с помощью (цель - this ссылается на объект):
// a) стрелочной функции
// b) сохранения ссылки const self = this

let timerObj = {
    name: "Timer",
    start() {
        // setTimeout - самостоятельно вызывает вложенную функцию браузера
        setTimeout(function () {
            console.log("regular:", this.name);
            // вызов даст regilar: '' так как мы находимся в объекте window, а так как this = timerObj получаем window.name = ""
        }, 100);

        setTimeout(() => {
            console.log("arrow:", this.name);
            // вызов даст arrow: Timer. так как стрелочная функция берет this = timerObj, а timerObj.name = Timer
        }, 100);

        setTimeout(function () {
            console.log("bound:", this.name);
            // вызов выдаст bound: Timer так как this задан через bind, и он создаст новую функцию в которой будет this = timerObj, а timerObj.name = Timer
        }.bind(this), 100);
    }
};

timerObj.start(); // один вызов через точку, this = timerObj, 

