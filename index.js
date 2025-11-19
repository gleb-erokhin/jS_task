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
        console.log('task status:', task)
    }
}   

function setTask(taskDescription) {
    if (task.length !== 0) {
        return `"Не могу добавить задачу, завершите или удалите предыдущую"`
    } else {
        return task = taskDescription;
    }
}

let add = setTask('почистить зубы')
showTask(add)
task = completeTask(add)
showTask(task)

let add2 = setTask('заварить кофе')
showTask(add2)
task = completeTask(add2)
showTask(task)

let add3 = setTask('сделать омлет')
showTask(add3)
task = deleteTask(add3)
showTask(task)

let add4 = setTask('одеться')
showTask(add4)
task = completeTask(add4)
showTask(task)

let add5 = setTask('')
showTask(add5)
task = completeTask(add5)
showTask(task)

console.log('completedTaskCount:', completedTaskCount)