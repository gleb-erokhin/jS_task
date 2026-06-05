console.log('')
console.log('Задания в консоль 1 - простой синхронный код')
console.log(`синхронная операция, код выполнен по строчкам A B C`)

console.log('A');
console.log('B');
console.log('C');

console.log('')
console.log('Задания в консоль 2 - setTimeout')
console.log(`сначала выполнится start end потом setTimeout`)

console.log('Start');
setTimeout(() => console.log('Timeout 0'), 0);
console.log('End');

console.log('')
console.log('Задания в консоль 3 - промис')
console.log(`сначала выполнится start end потом промис`)

console.log('Start');
Promise.resolve().then(() => console.log('Promise'));
console.log('End');

console.log('')
console.log('Задания в консоль 4 - Promise и setTimeout')
console.log(`порядок выполнения: start end Promise Timeout, таймаут уйдет в веб апи ожидать время даже если оно 0, в это время из стека в макротаску попадет промис, как только стек очистится колбек из промиса попадет в стек и выполнится, потом через макротаску в стек попадет settimout`)

console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');

console.log('')
console.log('Задания в консоль 4 - несколько микротасок')
console.log(``)

console.log('Start');
queueMicrotask(() => console.log('Microtask 1'));
Promise.resolve().then(() => console.log('Microtask 2'));
queueMicrotask(() => console.log('Microtask 3'));
console.log('End');

console.log('')
console.log('Задания в консоль - ')
console.log(``)
console.log('')
console.log('Задания в консоль - ')
console.log(``)
console.log('')
console.log('Задания в консоль - ')
console.log(``)
console.log('')
console.log('Задания в консоль - ')
console.log(``)
console.log('')
console.log('Задания в консоль - ')
console.log(``)
console.log('')
console.log('Задания в консоль - ')
console.log(``)
console.log('')
console.log('Задания в консоль - ')
console.log(``)
console.log('')
console.log('Задания в консоль - ')
console.log(``)