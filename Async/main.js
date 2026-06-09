import * as tasks from "./ext.js"
import loadedData from './data.json' with{ type: 'json'}

const container = document.querySelector('.buttons_container')
const render = document.querySelector('.render')


container.addEventListener('click', function (e) {
    const button = e.target.closest('.btn')
    if (!button) return

    const taskBtn = button.dataset.task
    const functionName = `task_${taskBtn}`

    if (typeof tasks[functionName] === 'function') {
        // Если функция существует, вызываем её
        console.clear()
        tasks[functionName]();
    } else {
        console.error(`Функция ${functionName} не найдена.`);
    }

    let resData = loadedData[taskBtn - 1]

    if (resData) {
        render.innerHTML = `
        <h2>${resData.title}</h2>
        <p>${resData.description}</p>
        <pre>${resData.code}</pre>
        `
    } else {
        render.innerHTML = `<p>Идет загрузка..</p>`
    }
})


// console.log('')
// console.log('Задания в консоль 4 - Promise и setTimeout')


// console.log('')
// console.log('Задания в консоль 5 - несколько микротасок')
// console.log(`start end microtack 1 2 3 по приоритету между собой они одинаковы будут выводится в стек по очереди FIFO`)

// console.log('Start');
// queueMicrotask(() => console.log('Microtask 1 задание 5'));
// Promise.resolve().then(() => console.log('Microtask 2 задание 5'));
// queueMicrotask(() => console.log('Microtask 3 задание 5'));
// console.log('End');

// console.log('')
// console.log('Задания в консоль - ')
// console.log(``)
// console.log('')
// console.log('Задания в консоль - ')
// console.log(``)
// console.log('')
// console.log('Задания в консоль - ')
// console.log(``)
// console.log('')
// console.log('Задания в консоль - ')
// console.log(``)
// console.log('')
// console.log('Задания в консоль - ')
// console.log(``)
// console.log('')
// console.log('Задания в консоль - ')
// console.log(``)
// console.log('')
// console.log('Задания в консоль - ')
// console.log(``)
// console.log('')
// console.log('Задания в консоль - ')
// console.log(``)