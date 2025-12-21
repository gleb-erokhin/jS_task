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

function parseNumbers(str) {
    if (/^\d/.test(str)) { // Проверяем, начинается ли строка с цифры
        return str.includes('.') ? parseFloat(str) : parseInt(str);
    }
    throw new Error('Неверный ввод: строка не начинается с числа.');
}

// console.log(parseNumbers("123.456px")); // 123.456
// console.log(parseNumbers("42em"));      // 42

