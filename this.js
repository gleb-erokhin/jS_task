"use strict"

/** 1. Методы и потеря контекста */
let user13 = {
    name: "Alice",
    greet() {
        console.log(this.name);
    }
};

let greetFn = user13.greet;
// user13.greet() // вызов функции greet, this = obj, obj.name = Alice
// greetFn() // обычная функция, в переменную greetFn копируем функцию, this = undefined в строгом режиме, а значит undefined.name выдаст typeError, в обычном режиме пустая строка, так как в window нет свойсва name

/** 2. Вложенные функции */
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

/** 3. Таймеры */
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
// ответ
// timerObj.start(); // один вызов через точку, this = timerObj, 

/** 4. Колбэки массивов */
let group = {
    title: "JS Group",
    students: ["A", "B"],
    showAll() {
        this.students.forEach(function (name) {
            console.log(this.title, name);
        });
    }
};

// group.showAll(); // ?

// Исправьте через:
// a) стрелочный колбэк
// b) bind(this)

// нет ответа, тема колбеков мне не понятна

/** 5. извлечение метода */
let obj8 = {
    x: 100,
    getX() { return this.x; }
};

let getX = obj8.getX;

// Ответ
// getX() // в strict режиме TypeError, так как получаем undefined.name
// console.log('getX', getX()) // в обычном режиме undefined

// obj8.getX() // this = obj8
// console.log(obj8.getX()) // 100

/** 6. стрелочные функции в обьектах */
let user14 = {
    name: "Carol",
    methodRegular: function () { console.log("regular:", this.name); },
    methodArrow: () => { console.log("arrow:", this.name); }
};

// user14.methodRegular(); // в strict / обычном режиме this = user, а this.name = regular: Carol
// user14.methodArrow(); // ?
