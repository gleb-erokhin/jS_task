console.log('Задание 1 - базовый досутп к элементам')
let fruits = ["apple", "banana", "orange"];
// Вывести первый и последний элемент
// Изменить второй элемент на "grape" и вывести весь массив
console.log(fruits[0])
console.log(fruits.at(-1))

console.log(' ')
console.log('Задание 2 - длинна массива')
let numbers = [10, 20, 30];
// Вывести длину
numbers[5] = 50;
console.log('длинна массива:', numbers.length)
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
mixed.forEach(function(index) {
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