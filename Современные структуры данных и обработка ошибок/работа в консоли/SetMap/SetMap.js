console.log('map')

// 1. Создание Set с повторяющимися элементами
const nums = new Set([1, 2, 2, 3, 3, 4]);
console.log(nums); // ? [1, 2, 3, 4]

// 2. Проверка наличия элемента
console.log(nums.has(2), nums.has(5)); // ? true, false

// 3. Добавление элементов
nums.add(5);
nums.add(3);
console.log([...nums]); // ? [1, 2, 3, 4, 5]

// 4. Удаление элемента
nums.delete(1);
console.log([...nums]); // ? [2, 3, 4, 5]

// 5. Итерация for...of
for (const n of nums) {
    console.log(n); // ? 2, 3, 4, 5
}

// 6. Итерация forEach
nums.forEach(n => console.log(n)); // ? 2, 3, 4, 5

// 7. Уникальные элементы из массива
const arr = [1, 2, 2, 3, 3, 4];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // ? [1, 2, 3, 4]

// 8. Объединение Set
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
const union = new Set([...set1, ...set2]);
console.log([...union]); // ? [1, 2, 3, 4, 5]

// 9. Пересечение Set
const intersection = new Set([...set1].filter(x => set2.has(x)));
console.log([...intersection]); // ? 3, значение которое есть в обоих массивах

// 10. Разность Set
const difference = new Set([...set1].filter(x => !set2.has(x)));
console.log([...difference]); // ? [1, 2] остается так как есть в 1 массиве и нет во втором. 

// 11. Set с объектами
const obj1 = { a: 1 }, obj2 = { a: 1 };
const setObjs = new Set([obj1, obj2, obj1]);
console.log(setObjs.size); // ? 2 так как obj1 по ссылке это один объект
console.log(setObjs.has(obj1)); // ? true
console.log(setObjs.has({ a: 1 })); // ? false сравнение по ссылке а не по значению

console.log('map')
// 1. Создание Map и чтение значения
const roles = new Map([['Alice', 'admin'], ['Bob', 'editor']]);
console.log(roles.get('Alice')); // ? admin
console.log(roles.get('Eve'));   // ? undefined

// 2. Проверка существования ключа
console.log(roles.has('Bob')); // ? true
console.log(roles.has('Eve')); // ? false

// 3. Добавление и обновление
roles.set('Eve', 'viewer');
roles.set('Alice', 'superadmin');
console.log([...roles]); // ? ['Alice', 'superadmin'], ['Bob', 'editor'], ['Eve', 'viewer'], ]

// 4. Удаление ключа
roles.delete('Bob');
console.log([...roles]); // ? [['Alice', 'superadmin'], ['Eve', 'viewer']]

// 5. Размер Map
console.log(roles.size); // ? 2

// 6. Итерация for...of по Map
for (const [key, value] of roles) {
    console.log(key, value); // ? 'Alice', 'superadmin' n/ 'Eve', 'viewer'
}

// 7. Итерация forEach по Map
roles.forEach((v, k) => console.log(k, v)); // ? 'Alice', 'superadmin' n/ 'Eve', 'viewer'

// 8. Map из объекта
const obj = { name: 'Alice', age: 25 };
const mapFromObj = new Map(Object.entries(obj));
console.log(mapFromObj.get('name')); // ? Alice
console.log(mapFromObj.get('age'));  // ? 25

// 9. Map в объект
const map = new Map([['name', 'Bob'], ['age', 30]]);
const objFromMap = Object.fromEntries(map);
console.log(objFromMap); // ? { 'name', 'Bob', 'age', 30 }

// 10. Map с объектами в качестве ключей
const u1 = { id: 1 }, u2 = { id: 2 };
const scores = new Map();
scores.set(u1, 100);
scores.set(u2, 200);
console.log(scores.get(u1)); // ? 100 
console.log(scores.get({ id: 1 })); // ? undefined потому что объект добавляется по содержимому а не по ссылке
