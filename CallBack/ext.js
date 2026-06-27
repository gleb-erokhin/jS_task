export const task_1 = function () {
    console.log(`выполнение по очереди, в аргументы передаем колбек, вывод A C B`)
    function test(cb) {
        console.log("A");
        cb();
        console.log("B");
    }

    test(function () {
        console.log("C");
    });
}
export const task_2 = function () {
    console.log(`map применяется к каждому элементу массива  КОЛЕБЕК функция, выводит в каждой итерации текущее значение элемента массива после выводит новый массив не мутируя старый.`)
    const arr = [1, 2, 3];

    const result = arr.map(n => {
        console.log(n);
        return n * 2;
    });

    console.log(result);
}
export const task_3 = function () {
    console.log(`выполняется синхронный код start, после setTimeout переносится в web api на ожидание таймера, далее выполняется синхронная операция end, после этого setTimeout передает КОЛБЕК в МАКРОТАСКУ, проверив что МИКРОТАСКИ пустые выполняется Timeout`)
    console.log("Start");

    setTimeout(() => {
        console.log("Timeout");
    }, 0);

    console.log("End");
}
export const task_4 = function () {
    console.log(`setTimeout A передается из КОЛБЕКА в web API ожидает счетчика, далее по очереди добавляются в web api setTimeout B и С, первым выведится D, далее вывод setTimeout попадает в МАКРОТАСКИ по времени таймера B C A`)
    setTimeout(() => console.log("A"), 1000);
    setTimeout(() => console.log("B"), 0);
    setTimeout(() => console.log("C"), 500);

    console.log("D");
}
export const task_5 = function () {
    console.log(`функция load регистрируется в памяти но без вызова, далее добавляем в КОЛБЕК вызов функции load с параметром КОЛБЕКА. Первым выводится Loading..., далее setTimeout передается в web api на ожидание таймера, после чего выполняется синхронная команда и выведется Continue, после чего КОЛБЕК из МАКРОТАСКИ перейдет в КОЛЛСТЕК и запустит атрибут функции cb() и выведем в вывод Done`)
    function load(cb) {
        console.log("Loading...");

        setTimeout(() => {
            cb();
        }, 1000);
    }

    load(() => {
        console.log("Done");
    });

    console.log("Continue");
}
export const task_6 = function () {
    console.log(`setTimeout переходит в web api на учет таймера, далее КОЛСТЕК пустой и выполняется синхронный код и выводится start, после отсчета КОЛБЕК переносится в МАКРОТАСКИ. после проверки циклом событий КОЛБЕК добавляется в КОЛСТЕК выводим First, далее происходит запуск в КОЛЛСТЕКЕ вложенный setTimeout и переведтся в web api, после переносится в МАКРОТАСКИ, и выпоняется код и выводится Second`)
    setTimeout(() => {
        console.log("First");

        setTimeout(() => {
            console.log("Second");
        }, 500);

    }, 500);

    console.log("Start");

}
export const task_7 = function () {
    console.log(`регистриируем функцию run до выполнения, вызываем функцию передавая колбек как аргумент, передаем его в КОЛЛСТЕК сначала выводим код Run далее вызываем переданный колбек setTimeout уходит в web api для ожидания таймера, после он переводится в МАКРОТАСКИ и ожидает выполтение статического кода, после setTimeout выводит Later`)
    function run(cb) {
        console.log("Run");
        cb();
    }

    run(() => {
        setTimeout(() => {
            console.log("Later");
        }, 0);
    });

    console.log("End");
}
export const task_8 = function () {
    console.log(``)
    const nums = [1, 2];

    nums.map(n => {
        console.log("A", n);
        return n;
    }).map(n => {
        console.log("B", n);
    });
}
export const task_9 = function () {
    console.log(`функция регистрируется но ждет запуска, запускает функцию test с атрибутом в виде КОЛБЕКА, x внутри функции перебивается ее так как она объявленна как глобальная, и в выводе будет 10`)
    let x = 5;
    function test(cb) {
        x = 10;
        cb();
    }

    test(() => {
        console.log(x);
    });
}
// export const task_10 = function () {

// }
