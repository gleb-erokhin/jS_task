export const task_1 = function () {
    console.log('')
    console.log('Задания в консоль 1 - простой синхронный код')
    console.log(`синхронная операция, код выполнен по строчкам A B C`)

    console.log('A');
    console.log('B');
    console.log('C');
}

export const task_2 = function() {
    console.log('')
    console.log('Задания в консоль 2 - setTimeout')
    console.log(`сначала выполнится start end потом setTimeout`)

    console.log('Start');
    setTimeout(() => console.log('Timeout'), 0);
    console.log('End');
}

export const task_3 = function () {
    console.log(' ')
    console.log('Задания в консоль 3 - промис')
    console.log(`сначала выполнится start end потом промис, промис уйдет в микротаски и будет выполнен когда стек освободится после консоля end`)

    console.log('Start');
    Promise.resolve().then(() => console.log('Promise'));
    console.log('End');
}
export const task_4 = function () {
    console.log(`порядок выполнения: start end Promise Timeout, таймаут уйдет в веб апи ожидать время даже если оно 0, в это время из стека в макротаску попадет промис, как только стек очистится колбек из промиса попадет в стек и выполнится, потом через макротаску в стек попадет settimout`)

    console.log('Start');
    setTimeout(() => console.log('Timeout'), 0);
    Promise.resolve().then(() => console.log('Promise'));
    console.log('End');
}
export const task_5 = function () {

}
export const task_6 = function () {

}
// const task_ = function () {

// }
// const task_ = function () {

// }
// const task_ = function () {

// }
// const task_ = function () {

// }
// const task_ = function () {

// }
// const task_ = function () {

// }
// const task_ = function () {

// }
// const task_ = function () {

// }
// const task_ = function () {

// }
// const task_ = function () {

// }