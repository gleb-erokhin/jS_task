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


function completeTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    // console.log('index find id', index, task.id)
    if (index !== -1) {
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

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    const task = tasks[index]; // получаем нужный объект из массива

    if (!task) return tasks; // проверяем на ошибку передачи индекса, если задачи нет ничего не делать и вернуть массив

    if (task.isCompleted) {
        const answer = confirm(`Задача ${task.id} выполнена. Удалить?`);

        if (!answer) {
            console.log(`Удаление задачи ${task.id} отменено`);
        } else {
            console.log(`Удаление задачи ${task.id} выполнено`);
            tasks.splice(index, 1);
        }
    }
}

function showTask(tasks, name = 'Задача') {
    if (tasks.length === 0) {
        // return `"Задача отсутствует"`
        console.log("Состояние: Задача отсутствует")
    } else {
        tasks.forEach((task) => {
            console.log(`${name} id ${task.id}:`);
            Object.entries(task).forEach(([key, value]) => {
                console.log(`${key}: ${value}`);
            });
            console.log('')
        });
    }
}

function clearTasks(tasks) {
    tasks.length = 0
}

function setTask(id, title, description, isCompleted = false, completedDate = false) {
    task = {
        id,
        title,
        description,
        isCompleted,
        createdDate: new Date('2026-03-02'),
        completedDate
    };
    tasks.push(task)
}

setTask(1, 'Купить', 'хлеб')
setTask(2 ,'зарядка', 'в 7 утра3')
setTask(3, 'сварить', 'кофе')

completeTask(3)
completeTask(2)
// completeTask(1)


// deleteTask(3)
// deleteTask(2)
// deleteTask(1)

console.log('')
console.log("выводим массив с новыми задачами")

console.log('') // раскоментировать чтобы очистить весь массив task, закоментировать delete, тогда он удалит все задачи
// clearTasks(tasks)
showTask(tasks)

console.log('')
console.log('Выводим массив завершенные задачи')
showTask(completedTasks, 'Задача завершена')


console.log('')
console.log('Выводим количество завершенных задач')
console.log('completedTaskCount:', completedTaskCount)
console.log('Выводим массив completedTasks:', completedTasks)

// console.log('Удалить все задачи')
