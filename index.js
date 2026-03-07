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

function deleteTask(index) {
    const task = tasks[index]; // получаем нужный объект из массива

    if (!task) return tasks; // проверяем на ошибку передачи индекса, если задачи нет ничего не делать и вернуть массив

    if (task.isCompleted) {
        const answer = confirm(`Задача ${index} выполнена. Удалить?`);

        if (!answer) {
            console.log(`Удаление задачи ${index} отменено`);
        } else {
            console.log(`Удаление задачи ${index} выполнено`);
            tasks.splice(index, 1);
        }
    }
}

function showTask(tasks, name = 'Задача') {
    if (tasks.length === 0) {
        // return `"Задача отсутствует"`
        console.log("Состояние: Задача отсутствует")
    } else {
        tasks.forEach((task, index) => {
            console.log(`${name} ${index}:`);
            Object.entries(task).forEach(([key, value]) => {
                console.log(`${key}: ${value}`);
            });
        });
    }
}

function clearTasks(tasks) {
    console.log(tasks.length = 0) 
}

function setTask(title, description, isCompleted = false, completedDate = false) {
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

completeTask(tasks, 2)
completeTask(tasks, 1)
completeTask(tasks, 0)

deleteTask(1)
deleteTask(0)
deleteTask(0)

showTask(completedTasks, 'Задача завершена')
console.log('')
console.log('Выводим массив tasks')
showTask(tasks)

clearTasks(tasks)

console.log('')
console.log('Выводим количество завершенных задач')
console.log('completedTaskCount:', completedTaskCount)
console.log('Выводим массив completedTasks:', completedTasks)

console.log('Удалить все задачи')
