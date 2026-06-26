export const task_1 = function () {
    console.log(`синхронная операция, код выполнен по строчкам A B C`)

    console.log('A');
    console.log('B');
    console.log('C');
}
export const task_2 = function () {
    console.log(`Выполнятся синхронные операции. сразу, после start setTimeout уйдет в web API и отсчитав время перейдет в МАКРОТАСКИ. После того как цикл событий проверить что МИКРОТАКСКИ пустые выполнит когд и выведет setTimeout`)

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
    console.log(`выполнится start потом end таймаут уйдет в веб апи ожидать время даже если оно 0, в это время из стека в макротаску попадет промис, как только стек очистится колбек из промиса попадет в стек и выполнится, потом через макротаску в стек попадет settimout`)

    console.log('Start');
    setTimeout(() => console.log('Timeout'), 0);
    Promise.resolve().then(() => console.log('Promise'));
    console.log('End');
}
export const task_5 = function () {
    console.log(`синхронные операции start end выполняться сразу, в этом время microtack 1 2 3 по приоритету между собой они одинаковы будут выводится в стек по очереди FIFO из микротаска`)

    console.log('Start');
    queueMicrotask(() => console.log('Microtask 1'));
    Promise.resolve().then(() => console.log('Microtask 2'));
    queueMicrotask(() => console.log('Microtask 3'));
    console.log('End');
}
export const task_6 = function () {
    console.log('Ответ: во время прохода синхронных операций сначала отработает start потом операции setTimeout зарегистрируются в api потом выполнится end после чего колбеки из api будут переведы в МАКРОТАСКИ и от туда по очереди FIFO будут выводится в стек.')
    console.log('Start');
    setTimeout(() => console.log('Timeout 1'), 0);
    setTimeout(() => console.log('Timeout 2'), 0);
    console.log('End');

}
export const task_7 = function () {
    console.log('выполнится start, далее промис попадет в API и заригистрируется там, далее в API попадет второй промис и заригистриуется. потом выполнится end. После очистки стека EL начнет смотреть очереди из API первый then попадет в микротаски, затем второй из АПИ перейдет в микротаски. Далее первый промис попадет в стек, выведет Promis1 и зарегистрирует в АПИ внутренний промис, далее выполнится второй промис, а потом внутренний')
    console.log('Start');

    Promise.resolve().then(() => {
        console.log('Promise 1');
        queueMicrotask(() => console.log('Microtask inside Promise'));
    });

    Promise.resolve().then(() => console.log('Promise 2'));

    console.log('End');

}
export const task_8 = function () {
    console.log('пройдет в стек СТАРТ, зарегистрируется в АПИ setTimout, выполнится end, из АПИ setTimout перейдет в макротаску EL переведет колбек в стек выведет Timeout 1 и запустит промис в АПИ на регистрацию, после then уйдет в микротаску после освобождения стека выведет promis inside timeout')
    console.log('Start');

    setTimeout(() => {
        console.log('Timeout 1');
        Promise.resolve().then(() => console.log('Promise inside Timeout'));
    }, 0);

    console.log('End');

}
export const task_9 = function () {
    console.log(`Первым выведется Start, после чего будет зарегистрирована асинхронная функция и помещена в callstack, после чего функция будет вызвана в calctsck выше попадет вызов консоли Async 1, а как только JS увидит await он во первых поймет что это не промис и автоматически обернет его в Promise.resolve(null) приостановит его и переместит в Микротакски, от этого callsatck станет пустой и цикл событий продолжит выполнение, в выводе будет END, после чего callstack освободится и цикл событий увидит что в микротаске лежит код. Переведет его в callstack и выполнит консоль Async 2`)
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
    console.log('Порядок вывода: Script start => Script end, затем setTimeout перейдет в АПИ отсчитает время и колбек из него попадет в макрозадачи, Промис попадет в кучу, цикл событий видит первый then а затем видит queueMicrotask и добавляет их в очередь МИКРОТАСКОВ по очереди, второй then не выводится так как первый еще не выполнился. После выполнения и вывода Promise 1 => queueMicrotask, цикл событий видит второй then добавляет его в МИКРОТАСКИ и выполняет его. в итоге вывод будет таким: Script start => Script end => Promise 1 => queueMicrotask => Promise => setTimeout')
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