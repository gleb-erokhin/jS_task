export const task_1 = function () {
    console.log(`синхронная операция, код выполнен по строчкам A B C`)

    console.log('A');
    console.log('B');
    console.log('C');
}
export const task_2 = function () {
    console.log(`сначала выполнится start end потом setTimeout`)

    console.log('Start');
    setTimeout(() => console.log('Timeout'), 0);
    console.log('End');
}
export const task_3 = function () {
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
    console.log(`start end microtack 1 2 3 по приоритету между собой они одинаковы будут выводится в стек по очереди FIFO`)

    console.log('Start');
    queueMicrotask(() => console.log('Microtask 1'));
    Promise.resolve().then(() => console.log('Microtask 2'));
    queueMicrotask(() => console.log('Microtask 3'));
    console.log('End');
}
export const task_6 = function () {
    console.log('Ответ: во время прохода синхронных операций сначала отработает start потом операции setTimeout зарегистрируются в api потом выполнится end после чего колбеки из api будут переведы в МАКРОТАСКИ и от туда по очереди FIFO будут выводится в стек.copyWithin(target, start, end)')
    console.log('Start');
    setTimeout(() => console.log('Timeout 1'), 0);
    setTimeout(() => console.log('Timeout 2'), 0);
    console.log('End');

}
export const task_7 = function () {
    console.log('выполнение в порядке start end promis1 promis2 Microtask inside Promis: выполнится start, далее промис попадет в API и заригистрируется там, далее в API попадет второй промис и заригистриуется. потом выполнится end. После очистки стека EL начнет смотреть очереди из API первый then попадет в микротаски, затем второй из АПИ перейдет в микротаски. Далее первый промис попадет в стек, выведет Promis1 и зарегистрирует в АПИ внутренний промис, далее выполнится второй промис, а потом внутренний')
    console.log('Start');

    Promise.resolve().then(() => {
        console.log('Promise 1');
        queueMicrotask(() => console.log('Microtask inside Promise'));
    });

    Promise.resolve().then(() => console.log('Promise 2'));

    console.log('End');

}
export const task_8 = function () {
    console.log('процесс: start end timeOut 1 promise inside TimeOut, пройдет в стек СТАРТ, зарегистрируется в АПИ setTimout, выполнится end, из АПИ setTimout перейдет в макротаску EL переведет колбек в стек выведет Timeout 1 и запустит промис в АПИ на регистрацию, после then уйдет в микротаску после освобождения стека выведет promis inside timeout')
    console.log('Start');

    setTimeout(() => {
        console.log('Timeout 1');
        Promise.resolve().then(() => console.log('Promise inside Timeout'));
    }, 0);

    console.log('End');

}
export const task_9 = function () {
    console.log('Start');

    async function asyncFunc() {
        console.log('Async 1');
        await null;
        console.log('Async 2');
    }

    asyncFunc();
    console.log('End');

}
export const task_10 = function () {
    console.log('Порядок вывода: Script start, setTimeout перейдет в АПИ отсчитает время и колбек из него попадет в макрозадачи, Промис попадет в стек и выполнется, колбеки помещаются в очередь микрозадач, затем попадая в стек queueMicrotask в стеке выполняется и также попадает в очередь микрозадач, после чего выполняется Script end, после EL начинает обрабатывать микротаски и выводить в стек по одному ПРОМИС.')
    console.log('Script start');

    setTimeout(() => console.log('setTimeout'), 0);

    Promise.resolve()
        .then(() => console.log('Promise 1'))
        .then(() => console.log('Promise 2'));

    queueMicrotask(() => console.log('queueMicrotask'));

    console.log('Script end');
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