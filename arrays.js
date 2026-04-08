console.log('Задание 1 - базовый досутп к элементам')
let fruits = ["apple", "banana", "orange"];
console.log(fruits)
// Вывести первый и последний элемент
// Изменить второй элемент на "grape" и вывести весь массив
console.log(fruits[0])
console.log(fruits.at(-1))

console.log(' ')
console.log('Задание 2 - длинна массива')
let numbers = [10, 20, 30];
console.log(numbers)
// Вывести длину
numbers[5] = 50;
console.log('длинна массива после добавления numbers[5] = 50:', numbers.length)
// Вывести массив и длину
numbers.length = 3;
console.log('длинна после усечения', numbers.length)
// Вывести массив и длину после усечения

console.log(' ')
console.log('Задание 3 - пропуск индексов')
let arr3 = [];
arr3[0] = "first";
arr3[3] = "fourth";

// Вывести весь массив
console.log('массив:', arr3)
// // Вывести длину массива
console.log('длинна массива:', arr3.length)
// // Вывести третий элемент (arr3[2])
console.log('третий элемент:', arr3[2])

console.log(' ')
console.log('Задание 4 - досутп к последнему элементу')
let arr4 = [5, 10, 15, 20];
// Вывести последний элемент с использованием length
console.log('последний жлемент lenhth', arr4[arr4.length - 1])
// Попытаться вывести через отрицательный индекс arr[-1] и объяснить результат
console.log('последний жлемент at', arr4.at(-1)) // метод at дает доступ к использованию отрицательных индексов

console.log(' ')
console.log('Задание 5 - массив как объект и ссылки')
let original5 = [1, 2, 3];
let copy5 = original5;

copy5[0] = 100;

// Вывести original5
console.log('оригинальный массив:', original5)
// Пояснить, почему original изменился
// массивы являются частным случаем объектов, и так же как объекты при копирвоании присваивается ссылка на массив в памяти
// тем самым при копировании в copy5 мы получили в ней ссылку на оригинал, и изменили данные по ссылке

console.log(' ')
console.log('Задание 6 - разные типы элементов')
let mixed = [1, "text", true, null, { a: 1 }, [2, 3]];
// Вывести каждый элемент через console.log с указанием его типа
mixed.forEach(function (index) {
    console.log(`Тип: '${typeof index}: значение: ${index}`)
})

console.log(' ')
console.log('Задание 7 - удаление элементов')
let fruits6 = ["apple", "banana", "orange"];
delete fruits6[1];
// Вывести массив и length
console.log(`массив: ${fruits6}, длинна массива: ${fruits6.length}`)
// Использовать splice для удаления второго элемента
fruits6.splice(1, 1)
// Вывести массив и length после splice
console.log(`массив: ${fruits6}, длинна массива: ${fruits6.length}`)

console.log(' ')
console.log('Задание 8 - динамическое добавление')
let arr8 = [];
arr8[2] = "third";
arr8[0] = "first";
arr8[1] = "second";
// Вывести весь массив
console.log('Массив:', arr8)
// Вывести длину
console.log('длинна массива:', arr8.length)
// Объяснить, что в arr8[3]
console.log('под индексом 3 бвдет undefined так как у нас длинна массива 3, и последний индекс жлемента равен 2')
console.log(arr8[3])

console.log(` `)
console.log('Задание 9 - обход массива')
let nums = [10, 20, 30, 40, 50];
// Используя цикл for вывести все элементы
console.log('перебор циклом for')
for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    console.log(element)
}
// Используя for...of вывести все элементы
console.log('перебор циклом for of')
for (const element of nums) {
    console.log(element)
}

console.log(` `)
console.log('Задание 10 - добавление, удаление, изменение')
let arr10 = [1, 2, 3, 4, 5];
console.log(`Исходный массив [${arr10}]`)
// Удалить третий элемент через delete
delete arr10[2]
// Добавить элемент 6 в конец массива
arr10.push(6)
// Изменить первый элемент на 10
arr10[0] = 10
// Усечь массив до длины 4
arr10.length = 4
// Вывести итоговый массив и length
console.log(`Итоговый массив [${arr10}] длинна массива ${arr10.length}`)

console.log(` `)
console.log('Задание 11 - ссылки и копии')
let original11 = [1, 2, 3];
console.log(`Исходный массив: ${original11}`)
let shallow = [...original11]; // spread копия
let refCopy = original11;

shallow[0] = 100;
refCopy[1] = 200;

// Вывести original11
console.log(`original11: ${original11}`)
// Вывести shallow
console.log(`shallow: ${shallow}`)
// Объяснить, какие изменения отразились и почему
console.log('Оригинальный массив получил на 2 позииции 200 потому что был передан в переменную присваиванием, а значит это просто ссылка на объект в памяти массива original')
console.log('новый массив в переменной shallow получается посредством оператора spred он добавил значения массива оригинал и создал новый массив.')

console.log(' ')
console.log('Дополнительные задания')
console.log('Задание 1 - создание массива')
const numbers1 = [10, 20, 30, 40, 50]
const fruits1 = ['apple', 'orange', 'banana']
console.log(numbers1, fruits1)

console.log(' ')
console.log('Задание 2 - Доступ к элементам массива')
console.log('первый элемент массива:', fruits1[0])
console.log('последний элемент массива:', fruits1.at(-1))
console.log('первый элемент массива:', fruits1[5])
console.log('при выборе индекса за границами массива получим undefined')

console.log(' ')
console.log('Задание 3 - Проверка длинны массива')
const colors = ['red', 'green', 'blue']
console.log(colors)
console.log('длинна массива', colors.length)
colors[5] = 'orange'
console.log(colors)
console.log('длинна массива', colors.length)

console.log(' ')
console.log('Задание 4 - Изменения свойства length')
const letters = ['a', 'b', 'c', 'd', 'e']
letters.length = 3
console.log('усечение массива до 3:', letters)
letters.length = 6
console.log('усечение массива до 6:', letters)
console.log('установка длинны массива 3 обрезает массив и отрезанные значения удаляются')
console.log('установка длинны массива 6 добавляет в массив пустые значения, такой способ является нежелательным, не рекомендуется создавать массивы с пустыми значениями')

console.log(' ')
console.log('Задание 5 - Удаление элементов массива')
const pet = ['dog', 'cat', 'panda']
delete pet[1]
console.log(`Массив [${pet}], длинна массива: ${pet.length}`)
delete pet[4]
console.log(pet)
console.log('оператор delete при удалении элемента за границей массива никак не повлияет на массив, ошибок не будет')

console.log(' ')
console.log('Задание 6 - Создание массива и добавление элементов')
const task = []
task[0] = 'do jim'
task[1] = 'do shower'
task[2] = 'go to work'
console.log(task)

console.log(' ')
console.log('Задание 7 - Проверка элементов массива')
const mixeds = ['one', true, 1, { a: 1 }, false]
console.log(mixeds[0])
console.log(mixeds[1])
console.log(mixeds[2])
console.log(mixeds[3])
console.log(mixeds[4])
console.log('отрицательный индекс', mixeds[-5])
console.log('Отрицательные индексы не соответствуют основной структуре массивов, они начинаются с 0 и идут на возрастание, в связи с этим получаем indefined')
console.log('Для использования отрицательного индекса с ecma(2022) используется метод .at(-1)')

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
for(let i = 0; i < fruits2.length; i++) {
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
    for(let i = 0; i < arr.length; i++) {
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
