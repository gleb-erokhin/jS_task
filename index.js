let tasks = []
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

function showTask(tasks) {
    if (tasks.length === 0) {
        // return `"Задача отсутствует"`
        console.log("Состояние: Задача отсутствует")
    } else {
        tasks.forEach((task, index) => {
            console.log(`Задача ${index + 1}:`);
            Object.entries(task).forEach(([key, value]) => {
                console.log(`${key}: ${value}`);
            });
        });
    }
}   

function setTask(title, description) {
    task = {
        title,
        description,
        isCompleted: false,
        createdDate: new Date(),
        completedDate: null
    };
    tasks.push(task)
}

setTask('Купить', 'хлеб')
setTask('зарядка', 'в 7 утра3')
setTask('сварить', 'кофе')
console.log(tasks)
showTask(tasks)