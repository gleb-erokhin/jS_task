console.log('')
console.log('Задача 1 - Обработка деления на ноль')

function divide(a, b) {
    // Твой код здесь
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b
}


try {
    console.log(divide(10, 2)) ; // Должно вывести: результат деления и "Operation completed"
    console.log(divide(10, 0)) ; // Должно вывести: результат деления и "Operation completed"
} catch (error) {
    console.log(error.message)
} finally {
    console.log("Operation completed")
}

console.log('')
console.log('Задача 2 - Валидация JSON')

function parseJSON(jsonString) {
    // Твой код здесь
    const string = JSON.parse(jsonString)
    if (string) {
        throw new Error("Invalid JSON format");
    }
    return string
}
console.log(parseJSON('{"name": "John", "age": 30}')); // Должно вывести объект и "Parsing completed"
console.log(parseJSON('{name: John, age: 30}')); // Должно вывести "Invalid JSON format" и "Parsing completed"
