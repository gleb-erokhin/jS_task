let tasks = []
let completedTasks = []
let completedTaskCount = 0

/**
 * const task = {
    title: "Купить продукты",
    description: "Молоко, хлеб, яйца",
    isCompleted: false,
    createdDate: new Date(),
    completedDate: null
};
 */


function completeTask(tasks, index) {
    if (tasks.length !== 0) {
        let currentTask = tasks[index]
        currentTask.isCompleted = true
        currentTask.completedDate = new Date()
        completedTaskCount++
        completedTasks.push(currentTask)
        // return task = ''
    } else {
        return `Выполнено: "Задача отсутствует"`
    }
}
// разобарться с delete
function deleteTask(task, index) {
    if (tasks.length !== 0) {
        return task = ''
    } else {
        if (isCompleted === false) {
            return 'Таска еще не выполнена'
        } else {
            tasks.splice(index, 1)
        }
        // return `Удаление: "Задача отсутствует"`
    }
}

function showTask(tasks, name = 'Задача') {
    if (tasks.length === 0) {
        // return `"Задача отсутствует"`
        console.log("Состояние: Задача отсутствует")
    } else {
        tasks.forEach((task, index) => {
            console.log(`${name} ${index + 1}:`);
            Object.entries(task).forEach(([key, value]) => {
                console.log(`${key}: ${value}`);
            });
        });
    }
}

function setTask(title, description, isCompleted = false, completedDate = null) {
    task = {
        title,
        description,
        isCompleted,
        createdDate: new Date('2026-03-02'),
        completedDate
    };
    tasks.push(task)
}

setTask('Купить', 'хлеб')
setTask('зарядка', 'в 7 утра3')
setTask('сварить', 'кофе')

completeTask(tasks, 1)
completeTask(tasks, 0)

deleteTask(tasks, 1)
deleteTask(tasks, 0)

showTask(tasks)
showTask(completedTasks, 'Задача завершена')
console.log('completedTaskCount:', completedTaskCount)
console.log('completedTasks:', completedTasks)