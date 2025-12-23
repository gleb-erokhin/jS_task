function convertNumberSystems(num) {
    return {
        'binary': num.toString(2),
        'octal': num.toString(8),
        'hex': num.toString(16),
    }
}

// console.log(convertNumberSystems(255));
// { binary: '11111111', octal: '377', hex: 'ff' }

function generateAndRoundNumber(rounding) {
    let res = Math.random() * 1000
    console.log(res)

    switch (rounding) {
        case "nearest":
            return Math.round(res);
        case "up":
            return Math.ceil(res);
        case "down":
            return Math.floor(res);
        case "two-decimals":
            return res.toFixed(2);

        default:
            return "неверный параметр для типа округления";
    }
}

// console.log(generateAndRoundNumber("nearest"));
// console.log(generateAndRoundNumber("two-decimals"));
// console.log(generateAndRoundNumber("up"));
// console.log(generateAndRoundNumber("down"));

function filterFiniteNumbers(value) {
    if (Number.isNaN(value) || !Number.isFinite(value)) {
        return true
    } else {
        return false
    }
}

// console.log(filterFiniteNumbers(10));        // false
// console.log(filterFiniteNumbers(Infinity));  // true
// console.log(filterFiniteNumbers(NaN));       // true

// преоброзование строк в числа
function parseNumbers(str) {
    if (/^\d/.test(str)) { // Проверяем, начинается ли строка с цифры
        return str.includes('.') ? parseFloat(str) : parseInt(str);
    }
    throw new Error('Неверный ввод: строка не начинается с числа.');
}

// console.log(parseNumbers("123.456px")); // 123.456
// console.log(parseNumbers("42em"));      // 42

// Проверка точности вычислений
function addFloats(a, b) {
    // Ваш код здесь
    return (a + b).toFixed(1);
}

// console.log(addFloats(0.1, 0.2)); // 0.3

// округление пдо нужного знака
function roundToDecimals(num, decimals) {
    // Ваш код здесь
    return num.toFixed(decimals)
}

// console.log(roundToDecimals(123.456789, 3)); // 123.457

// нахождение максимума и мнимума
function findMax(...numbers) {
    // Ваш код здесь
    return Math.max(...numbers)
}

function findMin(...numbers) {
    // Ваш код здесь
    return Math.min(...numbers)
}

// console.log(findMax(1, 5, 3, 10)); // 10
// console.log(findMin(1, 5, 3, 10)); // 1

// проверка целого числа
function checkIfInteger(num) {
    // Ваш код здесь
    if (Number.isInteger(num)) {
        return `${num} is an integer`
    } else {
        return `${num} is not an integer`
    }
}

// console.log(checkIfInteger(5));   // "5 is an integer"
// console.log(checkIfInteger(5.1)); // "5.1 is not an integer"

// сравнение чисел с плавающей точкой
function areFloatsEqual(a, b, precision = 5) {
    // Ваш код здесь
    return a.toFixed(precision) === b.toFixed(precision)
}

// console.log(areFloatsEqual(0.1 + 0.2, 0.3)); // true

// генерация случайного числа
function getRandomInRange(min, max) {
    // Ваш код здесь
    return (Math.random() * (max - min + 1) + min).toFixed(4)
}

// console.log('getRandomInRange:', getRandomInRange(10, 20)); // например, 13.4821


// перевод градусов в радианы
function toRadians(degrees) {
    // Ваш код здесь
    return degrees * (Math.PI / 180)
}

function toDegrees(radians) {
    // Ваш код здесь
    return radians * (180 / Math.PI)
}

// console.log('toRadians:', toRadians(180)); // 3.141592653589793
// console.log('toDegrees:', toDegrees(Math.PI)); // 180

// форматирование чисел с помощью toLocaleString
function formatCurrency(value, currency = "USD") {
    // Ваш код здесь
    return value.toLocaleString('en-US', { style: 'currency', currency: currency })
}

// console.log('formatCurrency:', formatCurrency(1234567.89)); // "$1,234,567.89"
// console.log('formatCurrency:', formatCurrency(1234567.89, "EUR")); // "€1,234,567.89"

// Проверка на четность
function isEven(num) {
    // Ваш код здесь
    return num % 2 === 0
}

// console.log('isEven:', isEven(4)); // true
// console.log('isEven:', isEven(7)); // false

// Безопасные числа
function isSafeInteger(num) {
    // Ваш код здесь
    if (Number.isInteger(num)) {
        return Number.isSafeInteger(num)
    }
    throw new Error('Указано не число')
}

console.log(isSafeInteger(9007199254740991));  // true
console.log(isSafeInteger(9007199254740992));  // false
console.log(isSafeInteger(1.5));  // false

// квадратные корень
function getPowers(num) {
    // Ваш код здесь
    return {
        sqrt: Math.sqrt(num), 
        square: Math.pow(num, 2), 
        cube: Math.pow(num, 3)
    }
}

// console.log(getPowers(4));
// { sqrt: 2, square: 16, cube: 64 }

