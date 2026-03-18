/** 1 Количество дней до указанной даты */
function daysUntil(date) {
    const now = Date.now(); // берем текущую дату в timestamp
    const future = new Date(date).getTime(); // создаем новый экземпляр класса с датой в переменной, получаем timestamp

    const diff = future - now; // вычисляем разницу

    return Math.ceil(diff / (1000 * 60 * 60 * 24)); // переводим милисекунды и округляем вверх, так как день считается уже начавшимся
}

// console.log(daysUntil("2026-03-10") + " дней"); 
// ожидаемый результат: количество дней

/** 2. Разница между двумя датами */
function dateDifference(date1, date2) {
    // получаем значения timestamp и вычисляем разницу
    let start = new Date(date1).getTime()
    let finish = new Date(date2).getTime()
    let ms = finish - start

    // создаем переменные вычисления милисекунд
    const dayMs = 24 * 60 * 60 * 1000;
    const hourMs = 60 * 60 * 1000;
    const minuteMs = 60 * 1000;

    // вычисляем значения через остаток от деления
    const days = Math.floor(ms / dayMs)
    ms %= dayMs
    const hours = Math.floor(ms / hourMs)
    ms %= hourMs
    const minute = Math.floor(ms / minuteMs)
    ms %= minuteMs

    return {days, hours, minute}
}

// console.log(dateDifference("2025-10-12T12:00", "2025-10-17T15:30"));
// ожидаемый результат: объект с days, hours, minutes


/** Тренировка */
// форматированный вывод даты, сначала в лоб, а потом упростил
function formatDate(date) {
    let result = ''
    // result = date.getDate() < 10
    //     ? '0' + date.getDate() + '.'
    //     : date.getDate() + '.' 

    // result += date.getMonth() + '.' 
    //     ? '0' + (date.getMonth() + 1) + '.'
    //     : date.getMonth() + '.'

    // result += date.getFullYear()

    result = date.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    })

    return result
}

// let date = new Date("2019-10-2")
// console.log(getDate(date))

// установить дату
let setsDate = new Date("2017-10-2")
setsDate.setDate(setsDate.getDate() + 5)
// console.log(getDate(setsDate))

// посчитать время выполнения программы
let start = Date.now()

for (let i = 0; i < 100000000; i++) {
    let d = i * 2544 * i
}

let finish = Date.now()
//  console.log(finish - start)

// сравнение даты
let date1 = new Date('11.06.2017')
let date2 = new Date('12.06.2017')
// console.log(date1.getTime() == date2.getTime) 