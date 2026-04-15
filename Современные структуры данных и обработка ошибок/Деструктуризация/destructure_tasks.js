console.log('')
console.log('Дополнительные задачи')

console.log('')
console.log('Задача 1 - Поменять значения местами')
let c = 5;
let d = 10;
let arr1 = [c, d]
[c, d] = [d, c]
console.log(arr1[0]); // 10
console.log(arr1[1]); // 5      

console.log('')
console.log('Задача 2 - Вернуть несколько значений из функции')
function getNumbers() {
    return [1, 2, 3]
}
const [num1, num2, num3] = getNumbers()
console.log(num1); // 1
console.log(num2); // 2
console.log(num3); // 3    

console.log('')
console.log('Задача 3 - Значения по умолчанию')
let arr5 = [7];
const [a3, b3 = 2, c2 = 3] = arr5;
console.log(a3); // 7
console.log(b3); // 2 (значение по умолчанию)
console.log(c2); // 3 (значение по умолчанию)          

console.log('')
console.log('Задача 4 - Деструктуризация вложенных массивов')
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [, [, element,],] = matrix;
console.log(element); // 5        

console.log('')
console.log('Задача 5 - Доставть значение объекта')
const person = {
    nameObj2: 'Alice',
    age2: 25,
    job: 'Engineer'
};
const {nameObj2, age2, job} = person;
console.log(nameObj2); // 'Alice'
console.log(age2); // 25
console.log(job); // 'Engineer'        

console.log('')
console.log('Задача 6 - Переименование переменных')
const book = {
    title: 'JavaScript Essentials',
    author: 'John Doe',
    year: 2021
};
const { title: bookTitle, author: bookAuthor } = book
console.log(bookTitle); // 'JavaScript Essentials'
console.log(bookAuthor); // 'John Doe'        

console.log('')
console.log('Задача 7 - значения по умолчанию в объектах')
const userObj = {
    nameUser: 'Bob'
};
const { nameUser, age3 = 30 } = userObj;
console.log(nameUser); // 'Bob'
console.log(age3); // 30 (значение по умолчанию)      

console.log('')
console.log('Задача 8 - Деструктуризация вложенных объектов')
const employee = {
    id: 101,
    info: {
        nameObj3: 'Jane',
        department: 'Marketing'
    }
};
const { info: { nameObj3, department } } = employee;
console.log(nameObj3); // 'Jane'
console.log(department); // 'Marketing'       

console.log('')
console.log('Задача 9 - ...rest оператор с массивами')
const numbers2 = [1, 2, 3, 4, 5];
const [first2, ...restNumbers] = numbers2;
console.log(first2); // 1
console.log(restNumbers); // [2, 3, 4, 5]        

console.log('')
console.log('Задача 10 - ...rest оператор с объектами')
const product = {
    nameObj4: 'Laptop',
    price: 1000,
    brand: 'BrandName',
    stock: 50
};
const { nameObj4, ...rest2 } = product;
console.log(nameObj4); // 'Laptop'
console.log(rest2); // { price: 1000, brand: 'BrandName', stock: 50 }       

console.log('')
console.log('Задача 11 - ...spread оператор для объединени массивов')
const arr6 = [1, 2, 3];
const arr7 = [4, 5, 6];
const mergedArray = [...arr6, ...arr7];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]        

console.log('')
console.log('Задача 12 - ...spread оператор для копирования объекта')
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
};
// Создай копию объекта car и измени year на 2022
const newCar = { ...car, year: 2022};
console.log(newCar); // { brand: 'Toyota', model: 'Corolla', year: 2022 }       

console.log('')
console.log('Задача 13 - ...spread оператор для обновления вложенных объектов')
const user5 = {
    id: 1,
    profile: {
        name: 'Anna',
        email: 'anna@example.com'
    }
};
// Создай копию объекта user и обнови email
const updatedUser = { ...user, profile: { name, email: 'new.email@example.com' }};
console.log(updatedUser);
console.log(user5);
// {
//   id: 1,
//   profile: { name: 'Anna', email: 'new.email@example.com' }
// }       

console.log('')
console.log('Задача 14 - деструктуризация параметров функции')
function displayUserInfo(obj) {
    const {name, age} = obj
    console.log(`Имя: ${name}, Возраст: ${age}`);
}
const user6 = {
    name: 'John',
    age: 28,
    country: 'USA'
};
displayUserInfo(user6);
// Имя: John, Возраст: 28       