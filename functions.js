const validateName = function (value) {
    return value.length !== 0 ? value : "*НЕТ данных* Передана пустая строка!"
}

const validateSubscription = function (subscription) {
    if (subscription === "free" || subscription === "basic" || subscription === "premium") {
        return true
    } else {
        return false
    }
}

export function checkStrictType(value) {
    if (typeof value === 'number') {
        if ((Number.isFinite(value))) {
            return validateAge(value);
        } else {
            throw new Error(`Значение (${value}) не является обычным числом.`);
        }
    }

    if (typeof value === 'string') {
        return validateName(value);
    }

    throw new Error(`Тип данных (${typeof value}) не поддерживается. Поддерживаются только строки и числа.`);
}

function validateAge(value) {
    return value < 18 ? " *Внимание!* Вы несовершеннолетний пользователь. " + value : value
}

export function getTimeOfDay(lastLogin) {
    if (lastLogin < 0 || lastLogin > 23 || isNaN(lastLogin)) {
        return "*Введите значение от 0 до 23 часов*";
    }

    if (lastLogin >= 5 && lastLogin < 12) {
        return "утро";
    } else if (lastLogin >= 12 && lastLogin < 18) {
        return "день";
    } else if (lastLogin >= 18 && lastLogin < 22) {
        return "вечер";
    } else {
        return "ночь";
    }
}

export function getAccessLevel(level) {
    if (validateSubscription(level)) {
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
    } else {
        return `*Внимание* Неверный тип подписки`
    }
}

export function displayUserInfo(name, age, timeOfDay, accessLevel) {
    return `Привет, ${name}! Вам ${age} лет. Сейчас: ${timeOfDay}. Уровень доступа: ${accessLevel}.`
}
