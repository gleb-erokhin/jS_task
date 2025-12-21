// вхождение подстроки
function containsSubstring(str, substr) {
    // Ваш код здесь
    return str.includes(substr)
}

// console.log(containsSubstring('Hello, World!', 'World')); // true
// console.log(containsSubstring('Hello, World!', 'world')); // false

// поиск и замена
function replaceFirstOccurrence(str, search, replaceWith) {
    // Ваш код здесь
    return str.replace(search, replaceWith)
}

// console.log(replaceFirstOccurrence('Hello, World!', 'World', 'JavaScript'));
// 'Hello, JavaScript!'

// console.log(replaceFirstOccurrence('Hello, World! World!', 'World', 'JavaScript'));
// 'Hello, JavaScript! World!'

// извлечение подстроки
function getSubstring(str, start, end) {
    // Ваш код здесь
    return str.substring(start, end)
}

// console.log(getSubstring('Hello, World!', 7, 12)); // 'World'
// console.log(getSubstring('Hello, World!', 0, 5));  // 'Hello'

// объединение строк
function joinStrings(strings) {
    // Ваш код здесь
    return strings.join(' ')
}

// console.log(joinStrings(['Hello', 'World', 'from', 'JavaScript']));
// 'Hello World from JavaScript'


// преоброзование регистра
function convertCase(str) {
    // Ваш код здесь
    if (str.includes('lowercase')) {
        return str.toLowerCase()
    } else if (str.includes('uppercase')) {
        return str.toUpperCase()
    }
}

// console.log(convertCase('This should be lowercase')); // 'this should be lowercase'
// console.log(convertCase('This should be uppercase')); // 'THIS SHOULD BE UPPERCASE'

// удаление пробелов
function trimSpaces(str) {
    // Ваш код здесь
    return str.trim()
}

// console.log(trimSpaces('   Hello, World!   '));
// 'Hello, World!'

// Поиск символа
function findCharIndex(str, char) {
    // Ваш код здесь
    return str.indexOf(char)
}

// console.log(findCharIndex('Hello, World!', 'W')); // 7
// console.log(findCharIndex('Hello, World!', 'z')); // -1

// сравнение строк
function compareStrings(str1, str2) {
    // Ваш код здесь
    return str1 === str2
}

// console.log(compareStrings('Hello', 'Hello')); // true
// console.log(compareStrings('Hello', 'hello')); // false

// извлечение последнего символа
function getLastCharacter(str) {
    // Ваш код здесь
    if(str.length === 0) {
        return null
    } else {
        return str.slice(-1)
    }
}
// console.log(getLastCharacter('Hello!')); // 'o'
// console.log(getLastCharacter(''));      // null
