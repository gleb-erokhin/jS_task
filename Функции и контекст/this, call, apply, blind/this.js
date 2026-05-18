console.log(' ')
console.log('Задача 1 - Метод объекта')
console.log('объект user имеет метод greet, при вызове через () this = объекту user, в консоль выведено будет Alice')
const user = {
    name: "Alice",
    greet: function () {
        console.log(this.name);
    }
};

user.greet(); // ?

console.log(' ')
console.log('Задача 2 - Обычная функция')
console.log('вызов функции даёт в обычном режиме this = window, в strict режиме undefined')
function showThis() {
    console.log(this);
}
showThis(); // ? (в браузере и в strict mode)

console.log(' ')
console.log('Задача 3 - использование call')
console.log('ответ будет Hello Bob, так как мы назначаем явно this на объект user2 и применяем метод greet')
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}
const user2 = { name: "Bob" };
greet.call(user2, "Hello"); // ?

console.log(' ')
console.log('Задача 4 - использование apply')
console.log('аналогично call, явно назначем this объекту user3, но параметры передаем через массив')
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}
const user3 = { name: "Bob" };
greet.apply(user3, ["Hi"]); // ?

console.log(' ')
console.log('Задача 5 - использование bind')
console.log('создается новая функция с явно привязанным this, за шаблон берет функцию greet')
const user4 = { name: "Carol" };

function greet(message) {
    console.log(`${message}, ${this.name}`);
}

const greetUser = greet.bind(user4);
greetUser("Hello"); // ?

console.log(' ')
console.log('Задача 6 - bind с частичными аргументами')
console.log('создается новая функция с привязанным this, но передаем сразу все аргументы при создании bind')
const greetUser2 = greet.bind(user4, "Welcome");
greetUser2(); // ?

console.log(' ')
console.log('Задача 7 - Попытка переопределения контекста после bind')
console.log('после применения bind невозможно переопредлить this другим способом, так как создана новая функция и this зафиксирован наввсегда, в выводе будет Привет Иван')
const user5 = {
    name: "Иван",
    sayHello() {
        console.log(`Привет, ${this.name}`);
    }
};
const admin = { name: "Анна" };
const boundHello = user5.sayHello.bind(user5);
boundHello.call(admin); // 

console.log(' ')
console.log('Задача 8 - стрелочные функции')
console.log('стрелочная функция не имеет своего контекста и берет его у родителя, тут arrow = window где window.name = "пустая строка" или в строгом режиме ощибка undefined.name. Функция regular = Dave')
const obj = {
    name: "Dave",
    arrow: () => console.log(this.name),
    regular: function () { console.log(this.name); }
};

obj.arrow();    // 
obj.regular();  // ?

console.log(' ')
console.log('Задача 9 - колбек с потерей контекста')
console.log('первый вызов теряет контекст, так как передается ссылка на функцию greet, const fn = person.greet, в обычном режиме это глобальный объект window = вывод пустая строка, в strict режиме ошибка undefined.name')
console.log('второй вызов теряет явно привязывает с помощью bind к объекту person, через секунду выведется Eva')
const person = {
    name: "Eva",
    greet() { console.log(this.name); }
};

// setTimeout(person.greet, 1000); // ?
// setTimeout(person.greet.bind(person), 1000); // ?

console.log(' ')
console.log('Задача 10 - передача аргументов через apply и call')
console.log('методы явно устанавливают привязку this. Разница между ними только в подаче аргументов функции.')
function multiply(a, b) {
    console.log(`${this.prefix} ${a * b}`);
}
const context = { prefix: "Результат:" };

multiply.call(context, 2, 3);   // Результат: 6
multiply.apply(context, [4, 5]); // Результат: 20

console.log(' ')
console.log('ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ')
console.log('Задача 1 - Метод call')
function introduce(greeting) {
    console.log(`${greeting}, my name is ${this.name} and I am ${this.year} years old.`)
}
const person2 = {
    name: "Alice",
    year: 25
}
const person3 = {
    name: "Bob",
    year: 30
}

introduce.call(person2, "Hi")
introduce.call(person3, "Hi")

console.log(' ')
console.log('Задача 2 - Метод apply')
console.log('функция работает без метода, нет объекта, поэтому передаем null и аргументы в виде массива')
function sum(a, b, c) {
    console.log(a + b + c);
}
sum.apply(null, [1, 2, 3])

console.log(' ')
console.log('Задача 3 - Метод bind')
console.log('')
const calculator = {
    mult: 5,
    multiply(num) {
        return this.mult * num
    }
}

const multiplyBy5 = calculator.multiply.bind(calculator)

console.log(multiplyBy5(10)); // 50
console.log(multiplyBy5(4));  // 20