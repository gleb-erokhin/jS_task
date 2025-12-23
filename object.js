// ========== создание объекта ========== 
const person = {
    firstName: "Vova",
    lastName: "Vladimorovich",
    age: 18
}

// console.log(person)
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)

// ========== добавление свойств ========== 
const car = {
    brand: "Toyota",
    year: 2015
}

// console.log(car.color = 'black')
// console.log(car.year = 2025)
// console.log(car)

// ========== удаление свойств ========== 
const book = {
    title: "У Лукоморья",
    author: 'Пушкин',
    year: 1830
}

// console.log(book)
// delete book.author
// console.log(book)

// ========== Проверка существования ========== 
const user = {
    name: 'Bob',
    age: 25,
    // email: 'jdddddd'
}

// console.log(('email' in user) ? "Свойство найдено" : "Свойство отсутствует")

// ========== доступ через переменную ========== 
const settings = {
    theme: 'black',
    language: 'RUS',
    notifications: 'HI Rus'
}

let key = settings['theme']
// console.log(key)

// ==========  пустой объект добавление свойств ========== 
const student = {}

// console.log(student)
// student.name = 'Tom'
// console.log(student)
// student.age = 19
// console.log(student)
// student.group = 'first'
// console.log(student)


// ========== проверка underfined / in ========== 
const product = {
    name: 'Bob',
}

// // проверяет факт наличия ключа
// console.log(('email' in user) ? "Свойство найдено" : "Свойство отсутствует")
// // проверяет значение свойства, даст true при отсутствии или если в ключе прописно свойство underfined
// console.log(product.price === undefined)

// ========== сравнение объектов ========== 
let obj1 = {x: 1, y: 2}
let obj2 = {x: 1, y: 2}

// js рассматривает объекты как разные сущности так как они хранятся в раздельно и у них разные адреса в памяти, а значит разные ссылки
// поэтому при сравнении == или === операторы сравнения сравнивают только ссылки к объектам, а не их внутренее содержимое
// оба оператора не применяют никакого преоброзования объектов, рассматривают объекты как уникальные сущности

// console.log(obj1 == obj2)
// console.log(obj1 === obj2)

// при присваивании одного обьекта другому, мы перезаписываем ссылку на обьект, создаем новую ссылку на один и тот же обьект
// при сравнении мы сравниваем ссылки и теперь они одинаковые

obj2 = obj1
// console.log(obj1 == obj2)
// console.log(obj1 === obj2)

// ========== Копировние объекта ========== 
const userProfile = {
    name: 'Bob',
    age: 17,
    adress: {
        street: 'Avenu laine',
        number: 45
    }
}

// объект скопирован, но вложеный объект был не затронут и на него скопирована только ссылка.
const copy = Object.assign({}, userProfile)
userProfile.age = 19
copy.adress.number = 50

// console.log(userProfile)
// console.log(copy)

// ========== Вложенные объекты ========== 
const employee = {
    name: 'Bob',
    position: 'QA',
    contact: {
        email: 'example@example.com',
        phone: 123456789
    }
}

// console.log(employee.contact.email)

// ========== Проверка нескольких свойств ==========
const config = {
    data: 555,
    taming: 33,
    mode: 'plus',
    // version: 41
} 

// console.log(('mode' in config && 'version' in config) ? "Полная конфигурация" : "Не хватает данных")

// ========== Подсчет свойств объекта ==========
const order = {
    tovar: 'plane',
    art: 254,
    cost: 34,
    money: 'USD'
}

// метод Object.keys(order) получает массив свойств объекта а затем .length дает значение количества элементов в массиве
// console.log(Object.keys(order).length)

// ========== проверка пустого объекта ==========
const data = {
    tovar: 'plane',
    // art: 254,
    // cost: 34,
    // money: 'USD'
}

// console.log((Object.keys(data).length === 0) ? "Объект пустой" : "В объекте есть данные")

// ========== создание объекта из данных пользователя ==========
const profile = {
    // name: prompt('Введите имя: '),
    // age: prompt('Введите возраст: '),
    // city: prompt('Введите город: ')
}

// console.log(`Имя: ${profile.name}, Возраст: ${profile.age}, Город: ${profile.city}`)

// ========== сравнение свойств двух объектов ==========
const obj3 = {
    a: 10,
    b: 15,
    id:222223
}
const obj4 = {
    a: 10,
    b: 15,
    id: 22222
}

// console.log(obj3.id === obj4.id)