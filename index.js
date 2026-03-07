let tasks = [] // создаем пустой массив
let completedTasks = [] // пустой массив для выполненых задач
let completedTaskCount = 0 // счетчик выполненых задач

/**
 * пример задачи в массиве
 * const task = {
 *  id: id
    title: "Купить продукты",
    description: "Молоко, хлеб, яйца",
    isCompleted: false,
    createdDate: new Date(),
    completedDate: null
};
 */

// функция выполнения задач, поиск по id
function completeTask(id) {
    // ищем индекс нужного объекта в массиве по id
    const index = tasks.findIndex(task => task.id === id);
    // проверяем если индекс найден то выполняем код
    if (index !== -1) {
        let currentTask = tasks[index]
        currentTask.isCompleted = true
        currentTask.completedDate = new Date()
        completedTaskCount++
        completedTasks.push(currentTask)
    } else {
        return `Выполнено: "Задача отсутствует"`
    }
}

// удаление задачи по id
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

// показываем массив с задачами, в атрибуты передаем массив, как основной так и с выполнеными задачами, необязательный параметр нужен для изменения вывода в консоль при необходимости
function showTask(tasks, name = 'Задача') {
    if (tasks.length === 0) {
        console.log("Состояние: Задача отсутствует")
    } else {
        // пробегаемся по массиву, и заходя в каждый объект через анонимную функцию которая обрабатывает каждую задачу task 
        tasks.forEach((task) => {
            // создаем заголовок для разделения отображения каждого объекта
            console.log(`${name} id ${task.id}:`);
            // функция преобразовываем объект task в массив пар ключ-значение, и с помощью консоли выводим на экран
            Object.entries(task).forEach(([key, value]) => {
                console.log(`${key}: ${value}`);
            });
            console.log('')
        });
    }
}

// удалить все задачи
function clearTasks(tasks) {
    tasks.length = 0
}

// добавить новую задачу
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


deleteTask(3)
deleteTask(2)
// deleteTask(1)

console.log('')
console.log("выводим массив с текущими задачами")

console.log('') 
// раскоментировать чтобы очистить весь массив task, закоментировать delete, тогда он удалит все задачи
// clearTasks(tasks)
showTask(tasks)

console.log('')
console.log('Выводим массив завершенные задачи')
showTask(completedTasks, 'Задача завершена')


// console.log('')
console.log('Выводим количество завершенных задач')
console.log('completedTaskCount:', completedTaskCount)
console.log('Выводим массив completedTasks:', completedTasks)

// console.log('Удалить все задачи')
