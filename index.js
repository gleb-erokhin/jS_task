let task = ''
let completedTaskCount = 0

function completeTask(task) {
    if (task.length !== 0) {
        completedTaskCount++
        return task = ''
    } else {
        return `"Задача отсутствует"`
    }
}

function showTask(task) {
    if (task.length === 0) {
        // return `"Задача отсутствует"`
        console.log("Задача отсутствует")
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

console.log('completedTaskCount:', completedTaskCount)