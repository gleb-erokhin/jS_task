// 1. Простая деструктуризация массива
const nums = [10, 20, 30];
const [one, two] = nums;
console.log(one, two); // 10, 20

// 2. Пропуск элементов массива
const letters = ["x", "y", "z", "w"];
const [, second, , fourth] = letters;
console.log(second, fourth); // y, w

// 3. Деструктуризация с rest (массив)
const arr = [1, 2, 3, 4, 5];
const [first, ...rest] = arr;
console.log(first, rest); // 1, [2, 3, 4, 5]

// 4. Деструктуризация объекта
const user = { nameObj: "Alice", age: 25 };
const { nameObj, age } = user;
console.log(nameObj, age); // Alice, 25

// 5. Объект с переименованием переменных
const user2 = { firstName: "Bob", lastName: "Smith" };
const { firstName: fn, lastName: ln } = user2;
console.log(fn, ln); // Bob, Smith

// 6. Объект с rest
const user3 = { name: "Carol", age: 30, city: "Berlin" };
const { name: n, ...others } = user3;
console.log(n, others); // Carol, {age: 30, city: "Berlin"}

// 7. Вложенный объект
const data1 = { id: 1, info: { name: "Item1", category: "Tools" } };
const { info: { name: itemName, category } } = data1;
console.log(itemName, category); // Item1, Tools

// 8. Вложенный массив
const nestedArr = [1, [2, 3], 4];
const [firstEl, [secondEl, thirdEl], fourthEl] = nestedArr;
console.log(firstEl, secondEl, thirdEl, fourthEl); // 1 2 3 4 

// 9. Массив + rest + spread
const numbers = [1, 2, 3, 4, 5];
const [f, ...r] = numbers;
const newNumbers = [0, ...r, 6];
console.log(f, r, newNumbers); // 1, [2, 3, 4, 5], [0, 2, 3, 4, 5, 6]

// 10. Объект + rest + spread
const obj = { a: 1, b: 2, c: 3 };
const { a, ...restObj } = obj;
const newObj = { x: 0, ...restObj, y: 4 };
console.log(a, restObj, newObj); // 1, { b: 2, c: 3 }, { x: 0, b: 2, c: 3, y: 4 }

// 11. Пропуск при деструктуризации массива
const arr2 = [10, 20, 30, 40];
const [, , third] = arr2;
console.log(third); // 30

// 12. Частичная деструктуризация объекта
const config = { host: "localhost", port: 8080, protocol: "http" };
const { host } = config;
console.log(host); // localhost

// 13. Комбинированная деструктуризация (объект + массив)
const complex = { user: { name: "Dave" }, scores: [10, 20, 30] };
const { user: { name: uname }, scores: [s1, , s3] } = complex;
console.log(uname, s1, s3); // Dave, 10, 30

// 14. Деструктуризация массива с rest и пропусками
const arr3 = [5, 10, 15, 20, 25];
const [first3, , ...rest3] = arr3;
console.log(first3, rest3); // 5, [15, 20, 25]

// 15. Вложенная деструктуризация объекта + rest
const user4 = { name: "Eve", address: { city: "Paris", zip: 75000 }, role: "admin" };
const { name, address: { city}, ...otherInfo } = user4;
console.log(name, city, otherInfo); // Eve, Paris, { address: { zip: 75000 }, role: "admin" }
// ошибку оставил специально, так как второй объект мы взяли только city то zip пропадает

// 16. Объект + переименование + rest
const settings = { theme: "dark", version: 2, debug: true };
const { theme: t, ...otherSettings } = settings;
console.log(t, otherSettings); // dark, {version: 2, debug: true}

// 17. Spread с массивами
const a1 = [1, 2];
const a2 = [3, 4];
const combined = [...a1, ...a2];
console.log(combined); // [1 , 2, 3, 4]

// 18. Spread с объектами
const o1 = { a: 1, b: 2 };
const o2 = { b: 3, c: 4 };
const merged = { ...o1, ...o2 };
console.log(merged); // {a: 1, b: 3, c: 4}

// 19. Вложенный массив + rest
const arr4 = [1, [2, 3, 4], 5];
const [first4, [second4, ...rest4], last4] = arr4;
console.log(first4, second4, rest4, last4); // 1, 2, [3, 4], 5]

// 20. Деструктуризация с undefined
const objU = { a: 1 };
const { a: valA, b: valB } = objU;
console.log(valA, valB); // 1, undefined

