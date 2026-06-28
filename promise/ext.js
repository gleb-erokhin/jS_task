export const task_1 = function () {
    console.log(`через конструктор создаем промис с параметром resolve, после выполнения кода и попадания его в очередь МИКРОТАСКИ он выполнится и выведет в консоль слово Hello`)
    const p = new Promise(resolve => {
        resolve("Hello");
    });

    p.then(result => console.log(result));
}
export const task_2 = function () {
    console.log(`выполняется синхронный код выводится start, promise выполняется сразу так как он уже в resolve, setTimeout передается на ожидание в web api, then выполняется сразу но ничего не выдает так как сам промис находится в ожидании (pending) и выполняется end. как только сработает таймер и setTimeout перейдет в МАКРОТАСКУ он выполнится. а промис получит данные и значение пеерйдет в resolve, и ввыводе появится Done`)
    console.log("Start");

    const p = new Promise(resolve => {
        setTimeout(() => {
            resolve("Done");
        }, 1000);
    });

    p.then(res => console.log(res));

    console.log("End");
}
export const task_3 = function () {
    console.log(`промис выполнится сразу и по цепочке мы получим сначала 1 + 1, потом 2 * 2, в вывод будет 4`)
    Promise.resolve(1)
        .then(n => n + 1)
        .then(n => n * 2)
        .then(n => console.log(n));
}
export const task_4 = function () {
    console.log(`промис выполнится сразу, в первом then получим вывод сначала 10, потом промис вернет 15 и передаст его в следующий then, после чего второй then выведет его в консоль`)
    Promise.resolve(10)
        .then(n => {
            console.log(n);
            return n + 5;
        })
        .then(n => console.log(n));
}
export const task_5 = function () {
    console.log(`регистрируется функция, далее в работу уходит промис, первый then передается по очереди в МИКРОТАСКИ второй ждет, так как промис в состоянии ожидание. После проверки что очередь КОЛЛСТЕК пустая колбеки достаются из МИКРОТАСОК, запускается функция wait, далее выполняется промис и setTimeout уходит в web api ожидать таймер. После чего выполняется resolve("ok") передается второму then и он уже выводит результат в консоль`)
    function wait() {
        return new Promise(resolve => {
            setTimeout(() => resolve("OK"), 500);
        });
    }

    Promise.resolve()
        .then(() => wait())
        .then(res => console.log(res));
}
export const task_6 = function () {
    console.log(`промис в состоянии resolve сразу выполнится со значением start. Далее первый then в msg получит start и выведет его, далее throw error сработает, так в текущей ситуации она искуственно генерирует ошибку и пробрасывает её в блок catch чтобы отобразить в переменной err.message`)
    Promise.resolve("Start")
        .then(msg => {
            console.log(msg);
            throw new Error("Fail");
        })
        .then(() => console.log("Next"))
        .catch(err => console.log("Error:", err.message));
}
export const task_7 = function () {
    console.log(`создается новый объект промис отработает функцией Исполнителя в которой вызываем reject("Problem"). Данное действие переводит промис в состояние ОТКЛОНЕН. then ожидает состояние onFulfilled поэтому будет проигнорирован, так как catch ожидает промиса со стотусом отмена он попадет в МИКРОТАСКУ, далее переходит в КОЛСТЕК и выполняется и выведет Problem`)
    const p = new Promise((resolve, reject) => {
        reject("Problem");
    });

    p.then(res => console.log(res))
        .catch(err => console.log(err));
}
export const task_8 = function () {
    console.log(`промис выполнится со значением 5 и перейдет в состояние Fulfiled, в then передастся 5, но так как там запускается объект error с данными Oops, вызов по цепочке переходит в catch, так как в нем нет логики вывода (err) то будет выведено Caught, второй then выведет 10 так как предыдущий промис завершился в состоянии Fulfiled`)
    Promise.resolve(5)
        .then(n => {
            throw new Error("Oops");
        })
        .catch(err => {
            console.log("Caught");
            return 10;
        })
        .then(n => console.log(n));
}
export const task_9 = function () {
    console.log(`промис выполнится со значением 2 и будет переведет в статус fulfiled. then перейдет в микротаски по очереди и будет ждать очистки КАЛЛСТЕК. После по очереди будет выполнятся и выведет 2, но так как нет return во второй then передасться промис со значением underfined, второй then принимает промис со значением undefined и выводит его в консоль`)
    Promise.resolve(2)
        .then(n => {
            console.log(n);
        })
        .then(n => {
            console.log(n);
        });
}
export const task_10 = function () {
    console.log(`функция step ожидает выполнения. запустив функцию step с параметром 1 через сработку таймера мы получаем промис со сзначением 2, далее промис попадает на первый then функция step используется бех (), она возвращает созданный промис в состоянии resolve он выполняется сразу и запускает setTimeout, переводит его в web api и ожидает исполнения. Выводит промис со значением 3. следующий then ждет выполнение первого. Как только КОЛСТЕК очистился setTimeout запускает resolve со значением 3 и передает его дальше по цепочке. Второй then получает промис со значением 3 и повторяет запуск функции step, пройдя через web api и МИКРОТАСКУ setTimeout выполняет колбек и выводит 4, промис со значением 4 передается в третий then и выводится в консоль`)
    function step(n) {
        return new Promise(resolve => {
            setTimeout(() => resolve(n + 1), 500);
        });
    }

    step(1)
        .then(step)
        .then(step)
        .then(result => console.log(result));
}

