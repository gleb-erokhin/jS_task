console.log('')
console.log('Задания в консоль - 1 - сипользование arguments')
console.log(`псевдо массив 1, 'hello', true`)
function showArguments() {
    console.log(arguments);
}
showArguments(1, 'hello', true); // псевдо массив 1, 'hello', true

console.log('')
console.log('Задания в консоль - 2 - перебор arguments для суммы')
console.log('10, сумма всех значений')
function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(total);
}
sumAll(1, 2, 3, 4); // 

console.log('')
console.log('Задания в консоль - 3 - остаточные параметры')
console.log('будет выведен массив значение переданных через rest [5, 10, 15]')
function collect(...items) {
    console.log(items);
}
collect(5, 10, 15); // ?

console.log('')
console.log('Задания в консоль - 4 - остаточные параметры и первый аргумент')
console.log('в factor будет передан первый аргумент = 2, и в функции с помощью map каждый элемент массива [1, 2, 3] будет умножен на 2')
function multiply(factor, ...numbers) {
    return numbers.map(num => num * factor);
}
console.log(multiply(2, 1, 2, 3)); // ?

console.log('')
console.log('Задания в консоль - 5 - сравнение argumenst и rest')
console.log('первые два аргумента уйдут в перменные, остальные будут объеденены в массив')
function test(a, b, ...rest) {
    console.log(a);      // 10
    console.log(b);      // 20 
    console.log(rest);   // [30, 40, 50]
}
test(10, 20, 30, 40, 50);

console.log('')
console.log('Задания в консоль - 6 - использование spread с массивом ')
console.log('разворачивает массив элементов для предачи значений в max, будет 15')
const nums = [5, 10, 15];
console.log(Math.max(...nums)); // ?

console.log('')
console.log('Задания в консоль - 7 - объединение массивов с spread')
console.log('разворачивает два массива и добавляет значения в результирующий массив [1, 2, 3, 4]')
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // ?

console.log('')
console.log('Задания в консоль - 8 - комбинированное использование')
console.log(`в первый параментр попадет аргумент Alice, а rest сформирует массив ['умная', 'сильная', 'быстрая']`)
function describe(name, ...traits) {
    console.log(`Имя: ${name}`);
    console.log(`Черты: ${traits}`);
    console.log(typeof traits)
}
describe('Alice', 'умная', 'сильная', 'быстрая'); // ?

console.log('')
console.log('Задания в консоль - 9 - преоброзование arguments в массив')
console.log(`функция создает массиив и принимает в него значения с помощью arguments, после функция map обрабатывает каждый элемент массива умножая его на 2 в итоге получим [2, 4, 6]`)
function argsToArray() {
    const arr = Array.from(arguments);
    console.log(arr.map(x => x * 2));
}
argsToArray(1, 2, 3); // ?

console.log('')
console.log('Задания в консоль - 10 - передача массива в функцию с spread')
console.log(`spread разворачивает массив и добавляет аргументы в функцию, для верного вычисления количество параметров должно совпадать, если будет меньше то будет NaN если больше то вычислится только 3 первых`)
function add(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(add(...numbers)); // ?
