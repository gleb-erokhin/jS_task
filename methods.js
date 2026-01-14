let user1 = { address: { street: "Main Street" } };
let user2 = {}; // пользователь без адреса

function getStreet(user) {

    // console.log(Object.values(user.address))
    // console.log(Object.entries(user))
    for (let k in user) {
        if (Object.hasOwn(user, k)) {
            // Вложимся глубже, если свойство — объект
            if (typeof user[k] === 'object') {
                for (let innerK in user[k]) {
                    if (Object.hasOwn(user[k], innerK)) {
                        console.log(user[k][innerK]); // street Main Street
                    }
                }
            }
        }
    }
}

// console.log(getStreet(user1)); // "Main Street"
// console.log(getStreet(user2)); // "Улица не указана"

// опциональная цепочка
let user3 = { sayHi() { console.log("Привет!"); } };
let user4 = {}; // без метода

function greetUser(user) {
    // Ваш код здесь
    return user.sayHi?.()
}

// greetUser(user3); // "Привет!"
// greetUser(user4); // ничего

// функции конструкторы
// создается функция конструктов, в которой под капотом создается пустой объект this в который наполняются свойства и методы
// после чего весь объект возвращается, и на основе неё создаются экземпляры объекта 
// функция конструктор всегда возвращает объект
function User(name, isAdmin = false) {
    // Ваш код здесь
    // this = {}
    this.name = name,
        this.isAdmin = isAdmin
    this.sayHi = function () {
        console.log(`Привет, меня зовут ${this.name}`)
    }
    // return this
}

let user5 = new User("Alice");
let user6 = new User("Bob", true);

// user5.sayHi(); // "Привет, меня зовут Alice"
// user6.sayHi(); // "Привет, меня зовут Bob"


// Использование в this методах
let calculator = {
    result: 0,
    add(value) {
        // Ваш код здесь
        this.result = value
        // console.log(this.result)
    },
    subtract(value) {
        // Ваш код здесь
        // console.log(this.result)
        // console.log(value)
        this.result = this.result - value
    },
    getResult() {
        // Ваш код здесь
        return this.result
    }
};

// calculator.add(5);
// calculator.subtract(3);
// console.log(calculator.getResult()); // 2

// Проверка объекта на переменные
let user7 = { name: "John" };

function getUserName(user) {
    // Ваш код здесь
    return user?.name ?? "Имя неизвестно"
}

// console.log(getUserName(user7)); // "John"
// console.log(getUserName(null)); // "Имя неизвестно"


// Массивы и опциональная цепочка
let user8 = { addresses: [{ city: "New York" }] };
let user9 = { addresses: [] };
let user10 = {}; // без адресов

function getCity(user) {
    // Ваш код здесь
    return user?.addresses[0]?.city ?? "Город не указан"
}

// console.log(getCity(user8)); // "New York"
// console.log(getCity(user9)); // "Город не указан"
// console.log(getCity(user10)); // "Город не указан"


// Удаление свойства 
let user11 = { name: "Alice", age: 30 };

function deleteAge(user) {
    // Ваш код здесь
    delete user.age
}

deleteAge(user11);
// console.log(user); // { name: "Alice" }


// добавление метода в объект динамически
let car2 = { brand: "Toyota" };
// Ваш код здесь
car2.showBrand = function () {
    console.log(`Марка автомобиля: ${this.brand}`)
}

// car.showBrand(); // "Марка автомобиля: Toyota"


// Перебор свойств объекта
let product2 = {
    name: "Laptop",
    price: null,
    category: "Electronics",
    // say: function() {
    //     console.log(this.name)
    // }
};

function printObject(obj) {
    // Ваш код здесь
    for (let k in obj) {
        console.log(`${k}: ${obj[k]}`);
    }
}

// printObject(product2);
// name: Laptop
// price: 1000
// category: Electronics

// копирование объекта
let original = { name: "Desk", width: 120, height: 60 };
// Ваш код здесь
const newOriginSpred = {
    ...original
}
const newOriginAssign = Object.assign({}, original);

// console.log('оригинал', original)
// console.log('spred', newOriginSpred)
// console.log('assign', newOriginAssign)
// console.log('сравнение после копирования: ', newOriginAssign === original && newOriginSpred === original)

// newOriginSpred.name = 'Table'

// console.log('оригинал', original)
// console.log('spred изменен', newOriginSpred)
// console.log('assign', newOriginAssign)


// Проверка существования свойства
let user12 = { name: "Mike", age: 25 };

function hasProperty(obj, key) {
    // Ваш код здесь
    return key in obj
}

// console.log(hasProperty(user12, "name")); // true
// console.log(hasProperty(user12, "address")); // false

// Использование свойств object
let student2 = {
    name: "Kate",
    group: "A1",
    score: 90,
    keyMethod: function () {
        console.log(Object.keys(student2))
    },
    keyValues: function () {
        console.log(Object.values(student2))
    },
    keyEntries: function () {
        console.log(Object.entries(student2))
    }
};
// Ваш код здесь
// student2.keyMethod()
// student2.keyValues()
// student2.keyEntries()

// Метод внутри метода
let account = {
    balance: 0,
    // Ваш код здесь
    deposit: function (money) {
        this.balance += money
    },
    withdraw: function (money) {
        if ((this.balance - money) < 0) {
            throw new Error('Баланс отрицательный!');
        } else {
            this.balance -= money
        }
    },
    showBalance: function() {
        return `Текущий баланс: ${this.balance}`
    }
};

// account.deposit(100);
// account.withdraw(30);
// console.log(account.showBalance()); // "Текущий баланс: 70"

// объединение объектов
let obj5 = { a: 1 };
let obj6 = { b: 2 };
let obj7 = { c: 3 };
// Ваш код здесь
const fullObj = Object.assign({}, obj5, obj6, obj7)
const fullObjSpread = {...obj5, ...obj6, ...obj7}

// console.log(fullObj)
// console.log(fullObjSpread)

// заморозка объекта
let settings2 = { theme: "dark", language: "ru" };
// Ваш код здесь
Object.freeze(settings2)
settings2.theme = 'white'

// console.log(settings2)