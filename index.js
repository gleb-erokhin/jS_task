const name = "Gleb";
const age = 17
const subscription = 'free'
const lastLogin = 5

const $name = document.querySelector('#name')
const $age = document.querySelector('#age')
const $subscription = document.querySelector('#subscription')
const $lastLogin = document.querySelector('#lastLogin')
const $p = document.querySelector('#output')
// Кнопка отправки
const submitButton = document.getElementById('submit-btn');

// Назначаем обработчик на кнопку
submitButton.addEventListener('click', () => {
    const currentValue = $name.value;
    displayUserInfo(currentValue)
});

// $name.addEventListener('input', function (event) {
//     // Забираем текущее значение
//     const currentValue = event.target.value;
//     // Выводим его куда-то (например, в параграф)
//     // document.getElementById('output').innerText = `Введено: "${currentValue}"`;
// });

console.log($name)

function checkStrictType(value) {
    if (typeof value === 'number') {
        if ((Number.isFinite(value))) {
            return value < 18 ? " *Внимание!* Вы несовершеннолетний пользователь. " + value : value;
        } else {
            throw new Error(`Значение (${value}) не является обычным числом.`);
        }
    }

    if (typeof value === 'string') {
        return value.length !== 0 ? value : "*НЕТ данных* Передана пустая строка!";
    }

    throw new Error(`Тип данных (${typeof value}) не поддерживается. Поддерживаются только строки и числа.`);
}

function validateAge(age) {
    return age > 0 ? age : false
}

const validateName = function (name) {
    return name !== '' ? true : false
}

const validateSubscription = (subscription) => {
    if (subscription === "free" || subscription === "basic" || subscription === "premium") {
        return true
    } else {
        return false
    }
}

function getTimeOfDay(lastLogin) {
    if (lastLogin >= 5 && lastLogin <= 11) {
        return "утро"
    } else if (lastLogin > 11 && lastLogin <= 17) {
        return "день"
    } else if (lastLogin > 17 && lastLogin <= 21) {
        return "вечер"
    } else if ((lastLogin > 21 && lastLogin < 24) || lastLogin < 5) {
        return "ночь"
    } else {
        return "*Введите значение от 1 до 23 часов*"
    }
}

function getAccessLevel(level) {
    switch (level) {
        case 'free':
            return "Доступ только к бесплатному контенту";
        case 'basic':
            return "Ограниченный доступ";
        case 'premium':
            return "Полный доступ";
        case null:
        case undefined:
            return level ?? "Неверный уровень";
        default:
            break;
    }
}

function displayUserInfo(name, age, timeOfDay, accessLevel) {
    console.log(`Привет, ${name}! Вам ${age} лет. Сейчас: ${timeOfDay}. Уровень доступа: ${accessLevel}.
`)
}

displayUserInfo(checkStrictType(name), checkStrictType(age), getTimeOfDay(lastLogin), getAccessLevel(subscription))