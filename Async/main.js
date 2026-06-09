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
