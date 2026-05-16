console.log('')
console.log('Задача 1 - подсчет чисел')

function printNumbers(num) {
    if(num === 0) return 1

    printNumbers(num - 1)
    console.log(num)
}
printNumbers(5); // 1 2 3 4 5

console.log('')
console.log('Задача 2 - обратный отсчет')
function countdown(num) {
    if(num < 1) return 1

    console.log(num)
    countdown(num - 1)
}
countdown(5); // 5 4 3 2 1 Готово

console.log('')
console.log('Задача 3 - факториал числа')
function factorial(num) {
    if(num < 1) return 1

    return num * factorial(num - 1)
}
console.log(factorial(5)); // 120
console.log(factorial(3)); // 6

console.log('')
console.log('Задача 4 - числа фебоначи')
function fibonacci(num) {
    if (num === 0) {
        return 0
    } else if (num === 1) {
        return 1
    }

    return fibonacci(num - 1) + fibonacci(num - 2)
}
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55