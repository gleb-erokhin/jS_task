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