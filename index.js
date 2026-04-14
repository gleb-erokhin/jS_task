let tasks = [] // создаем пустой массив
// let completedTasks = [] // пустой массив для выполненых задач
let completedTaskCount = 0 // счетчик выполненых задач

// При запуске страницы
const savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
    tasks = JSON.parse(savedTasks).map(task => ({
        ...task,
        createdDate: new Date(task.createdDate),
        completedDate: task.completedDate ? new Date(task.completedDate) : null
    }));
}
showTask(tasks)

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
        saveTask()
    } else {
        return `Выполнено: "Задача отсутствует"`
    }
}

// удаление задачи по id
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    const task = tasks[index]; // получаем нужный объект из массива

    if (!task) return tasks; // проверяем на ошибку передачи индекса, если задачи нет ничего не делать и вернуть массив

    if (task) {
        const answer = confirm(`Удалить задачу ${task.id}?`);

        if (!answer) {
            console.log(`Удаление задачи ${task.id} отменено`);
            saveTask()
        } else {
            console.log(`Удаление задачи ${task.id} выполнено`);
            tasks.splice(index, 1);
            saveTask()
        }
    }
}

// показываем массив с задачами, в атрибуты передаем массив, как основной так и с выполнеными задачами, необязательный параметр нужен для изменения вывода в консоль при необходимости
function showTask(arrays, name = 'Задача') {
    console.clear()
    if (arrays.length === 0) {
        console.log("Состояние: Задачи отсутствуют")
        return
    }
    // пробегаемся по массиву, и заходя в каждый объект через анонимную функцию которая обрабатывает каждую задачу task 
    arrays.forEach((task) => {
        // создаем заголовок для разделения отображения каждого объекта
        console.log(`${name} id ${task.id}:`);
        // функция преобразовываем объект task в массив пар ключ-значение, и с помощью консоли выводим на экран
        Object.entries(task).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
        console.log('')
    });

}

// удалить все задачи
function clearTasks() {
    tasks.length = 0
    saveTask()
}

// добавить новую задачу
function setTask(id, title, description) {
    const task = {
        id,
        title,
        description,
        isCompleted: false,
        createdDate: new Date(),
        completedDate: null,
    };
    tasks.push(task)
    // сохраняем массив задач в локальную память чтобы дата создания записывалась отдльно
    saveTask()
}

function saveTask() {
    // Перед сохранением
    const tasksToSave = tasks.map(task => ({
        ...task,
        createdDate: task.createdDate.getTime(),
        completedDate: task.completedDate ? task.completedDate.getTime() : null
    }));
    localStorage.setItem('tasks', JSON.stringify(tasksToSave));
}

console.log(' ')
console.log('Создать задачу - setTask(id, "title", "descryption")')
console.log('Выполнить задачу - completeTask(id)')
console.log('Показать задачи - showTask(arrays)')
console.log('Показать выполненые задачи - showTask(tasks.filter(t => t.isCompleted), "Задача завершена")')
console.log('Удалить задачу - deleteTask(id)')
console.log('Стереть все задачи - clearTasks(arrays)')
