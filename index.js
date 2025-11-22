let task = ''
let completedTaskCount = 0

function completeTask(task) {
    if (task.length !== 0) {
        completedTaskCount++
        return task = ''
    } else {
        return `Выполнено: "Задача отсутствует"`
    }
}

function deleteTask(task) {
    if (task.length !== 0) {
        return task = ''
    } else {
        return `Удаление: "Задача отсутствует"`
    }
}

function showTask(task) {
    if (task.length === 0) {
        // return `"Задача отсутствует"`
        console.log("Состояние: Задача отсутствует")
    } else {
        // return task
        console.log('show task:', task)
    }
}   

function setTask(taskDescription) {
    if (task.length !== 0) {
        return `"Не могу добавить задачу, завершите или удалите предыдущую"`
    } else {
        return task = taskDescription;
    }
}

task = setTask('почистить зубы')
showTask(task)
task = completeTask(task)
showTask(task)

task = setTask('заварить кофе')
showTask(task)
task = completeTask(task)
showTask(task)

task = setTask('сделать омлет')
showTask(task)
task = deleteTask(task)
showTask(task)

task = setTask('одеться')
showTask(task)
task = completeTask(task)
showTask(task)

task = setTask('')
showTask(task)
task = completeTask(task)
showTask(task)

console.log('completedTaskCount:', completedTaskCount)