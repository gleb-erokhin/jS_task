console.log(' ')
console.log('Практические задания с урока Перебор массивов')
console.log('Задание 1 - Перебор масива через циклы')
let numbers2 = [10, 20, 30, 40, 50];

// Задание 1: вывести все элементы через for
for (let i = 0; i < numbers2.length; i++) {
    const element = numbers2[i];
    console.log('через for', element)
}
// Задание 2: вывести все элементы через for...of
for (const element of numbers2) {
    console.log('через for...of', element)
}
// Задание 3: вывести все элементы через while
let i = 0
while (i < numbers2.length) {
    console.log('через while', numbers2[i])
    i++
}
// Задание 4: вывести все элементы через do...while
let k = 0
do {
    console.log('через do while', numbers2[k])
    k++
} while (k < numbers2.length)

console.log(' ')
console.log('Задание 2 - индексы и значения')
let fruits2 = ["apple", "banana", "cherry", "date"];

// Вывести элементы массива и их индексы через цикл for
// Вывести элементы и их индексы через forEach (опционально, если изучили)
for (let i = 0; i < fruits2.length; i++) {
    console.log(`через for вывести индекс ${i} и элемент массива ${fruits2[i]}`)
}
fruits2.forEach((value, index) => {
    console.log(`через forEach вывести индекс ${index} и элемент массива ${value}`)
})

console.log(' ')
console.log('Задание 3 - перебор объекта через for...in проверить с помощью hasOwnProperty')
let user = { name: "Alice", age: 25, city: "London" };

// Вывести ключи и значения через for...in
for (const key in user) {
    if (!user.hasOwnProperty(key)) continue;
    console.log(`${key}: ${user[key]}`)
}
// Проверить с помощью hasOwnProperty, что перебираются только собственные свойства

console.log(' ')
console.log('Задание 4 - вложенный массив')
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Используя вложенный for, вывести все элементы матрицы
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Используя вложенный for элемент матрицы - ${matrix[i][j]}`)
    }
}
// Используя вложенный for...of, вывести все элементы
for (let row of matrix) {
    for (element of row) {
        console.log(`Используя вложенный for...of элемент матрицы - ${element}`)

    }
}

console.log(' ')
console.log('Задание 5 - вложенный объект')
let company = {
    name: "Acme",
    address: { city: "Riga", zip: "LV-1001" },
    employees: [
        { name: "Anna", role: "dev" },
        { name: "John", role: "qa" }
    ]
};

// Вывести ключи и значения верхнего уровня через for...in
for (const key in company) {
    if (!company.hasOwnProperty(key)) continue;
    console.log(`значения верхнего уровня через for...in ${key}:`, company[key])
}
// Перебрать employees через for...of и вывести имя и роль каждого сотрудника
for (const element of company.employees) {
    console.log(`Перебрать employees через for...of, Сотрудник: ${element.name} Роль: ${element.role}`)
}

console.log(' ')
console.log('Задание 6 - Массив объектов')
let students = [
    { name: "Tom", scores: [10, 20, 30] },
    { name: "Jerry", scores: [15, 25, 35] }
];

// Используя циклы, вывести для каждого студента:
// Имя студента и его оценки по порядку
function studentsProfile(arr) {
    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i]
        for (const key in obj) {
            if (!Object.hasOwn(obj, key)) continue;
            console.log(`${key}: ${obj[key]}`)
        }
    }
}

studentsProfile(students)

console.log(' ')
console.log('Задание 7 - потеря контекста с массивами')
let group = {
    name: "Group1",
    members: ["A", "B", "C"],
    showMembers() {
        this.members.forEach(member => {
            console.log(this.name, member); // контекст потерян
        });
    }
};
console.log('исправлено стрелочной функцией')
group.showMembers()
// Исправить перебор с помощью стрелочной функции, чтобы выводилось имя группы и имя участника

console.log(' ')
console.log('Задание 8 - вывести элементы масива while, do while')
let letters2 = ["a", "b", "c", "d"];

// Используя while, вывести все элементы
let l = 0
while (l <= letters2.length - 1) {
    console.log('вывод while', letters2[l])
    l++
}
// Используя do...while, вывести все элементы
let m = 0
do {
    console.log('вывод do while', letters2[m])
    m++
} while (m <= letters2.length - 1)

console.log(' ')
console.log('Задание 9 - перебор массива с пропусками методов')
let arr = [];
arr[0] = "first";
arr[3] = "fourth";

// Вывести все элементы через for и объяснить, что будет с пустыми индексами
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log('инитерация через for, проходит по числам индекса', element)
}
// Вывести все элементы через for...of
for (const element of arr) {
    console.log('инитерация через for...of, просто читает элементы arr[i] и дает значения и не проверяет существование значениея через in', element)
}

console.log(' ')
console.log('Задание 10 - вывод ключей значений и пар объекта')
let user2 = { name: "Alice", age: 25, city: "Berlin" };

// Используя Object.keys(), Object.values() и Object.entries():

// Вывести массив ключей
console.log('массив ключей', Object.keys(user2))
// Вывести массив значений
console.log('массив значений', Object.values(user2))
// Вывести массив [ключ, значение]
console.log('массив [ключ, значение]', Object.entries(user2))

console.log(' ')
console.log('---Задачи---')
console.log('Задача 1 - обратный отсчет')
for (let i = 10; i >= 1; i--) {
    console.log('Обратный отсчет', i)
}

console.log(' ')
console.log('Задача 2 - четные числа')
let num = 2
while (num <= 10) {
    if (num % 2 === 0) {
        console.log('четное число от 2 до 10:', num)
    }
    num++
}

console.log(' ')
console.log('Задача 3 - do while')
let num3 = 1
do {
    console.log('числа от 1 до 5 do...while:', num3)
    num3++
} while(num3 <= 5)

console.log(' ')
console.log('Задача 4 - таблица умножения')
for (let i4 = 2; i4 <= 4; i4++) {
    for (let j4 = 1; j4 <= 5; j4++) {
        console.log(`${i4} x ${j4} = ${j4 * i4}`)
    }
    console.log('---')
}

console.log(' ')
console.log('Задача 5 - перебор свойств объекта')
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction"
};

for(let key in book) {
    console.log(`${key}: ${book[key]}`)
}

console.log(' ')
console.log('Задача 6 - максимальное число в массиве')
const numbers = [23, 45, 67, 12, 34, 89, 10];

let max = numbers[0]
for(let i = 0; i < numbers.length; i++) {
    if(max < numbers[i + 1]) {
        max = numbers[i + 1]
    }
}
console.log('максимальное число в массиве: [23, 45, 67, 12, 34, 89, 10]:', max)

console.log(' ')
console.log('Задача 7 - перебор массива объектов')
const students2 = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 88 }
];

for(let key in students2) {
    console.log(key, students2[key])
}

console.log(' ')
console.log('Задача 8 - подсчет символов')
const sentence = "JavaScript is awesome!";
let count = 0
for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] !== " ") {
        count++
    }
}
console.log(`символов в строке '${sentence}': ${count}`)

console.log(' ')
console.log('Задача 9 - подсчет свойств объекта')
const car = {
    make: "Tesla",
    model: "Model S",
    year: 2021,
    color: "red"
};

let count2 = 0
for(let key in car) {
    if(key) {
        count2++
    }
} 
console.log(`свойств в объекте: ${count2}`)

console.log(' ')
console.log('Задача 10 - Объединение в строку значений объекта')
const user3 = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};
let dataString = []
for (let key in user3) {
    dataString.push(user3[key])
} 
let res = dataString.join(' ')
console.log(res)

console.log(' ')
console.log('Задача 11 - Средний бал студентов')
let midleGrade = 0
let countKey = 0
for(let key in students2) {
    midleGrade += students2[key].grade
    countKey++
}
console.log(`средний бал студентов ${midleGrade / countKey}`)

console.log(' ')
console.log('Задача 12 - Фильтрация свойств объектов')
console.log('вывести свойства в которые имеются числовые значения')
const person = {
    name: "Alice",
    age: 25,
    occupation: "developer",
    salary: 5000
};
for(let key in person) {
    if (!Number.isInteger(person[key])) {
        console.log(`${key}: ${person[key]}`)
    }
}