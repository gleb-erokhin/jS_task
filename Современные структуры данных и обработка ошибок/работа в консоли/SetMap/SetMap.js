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
