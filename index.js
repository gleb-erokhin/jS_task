import { checkStrictType, getAccessLevel, getTimeOfDay, displayUserInfo  } from "./functions.js"

const $name = document.querySelector('#name')
const $age = document.querySelector('#age')
const $subscription = document.querySelector('#subscription')
const $lastLogin = document.querySelector('#lastLogin')
const $p = document.querySelector('#output')

// Кнопка отправки
const submitButton = document.getElementById('submit-btn');

// Назначаем обработчик на кнопку
submitButton.addEventListener('click', () => {
    const nameValue = $name.value;
    const ageValue = Number($age.value);
    const lastLoginValue = $lastLogin.value;
    const subscriptionValue = $subscription.value;

    const render = displayUserInfo(checkStrictType(nameValue), checkStrictType(ageValue), getTimeOfDay(lastLoginValue), getAccessLevel(subscriptionValue))

    $p.innerText = `Сообщение: ${render}`;
});
