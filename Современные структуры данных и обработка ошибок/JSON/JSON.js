console.log('')
console.log('Задача 1 - парсинг и сериализация')
const string = '{ "name": "Alice", "age": 30, "hobbies": ["reading", "biking", "cooking"], "isStudent": false }'

const stringNew = JSON.parse(string)
stringNew.age = 31
stringNew.hobbies.push("programming")
const stringObj = JSON.stringify(stringNew, null, 2)

console.log(stringObj)

console.log('')
console.log('Задача 2 - Игнорирование свойств')
const person = {
    name: "Bob",
    age: 25,
    greet: function () {
        console.log("Hello!");
    },
    address: {
        city: "New York",
        zip: "10001"
    }
};

const personString = JSON.stringify({...person, greet: person.greet.toString()}, null, 2)
// переводим метод в строку, через спред копируем объект и метод переводим в строку
console.log(personString)

console.log('')
console.log('Задача 3 - Глубокая копия объекта')
const book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    details: {
        publisher: "O'Reilly Media",
        pages: 176
    },
    tags: ["JavaScript", "Programming", "Web Development"]
};

const copyBook = JSON.stringify({ ...book }, null, 2)
const copyBookObj = JSON.parse(copyBook)
copyBookObj.title = "JavaScript: The Definitive Guide"
copyBookObj.details.pages = 1096
console.log(book)
console.log(copyBookObj)

console.log('')
console.log('Задача 4 - фильтрация полей')
const user = {
    id: 1,
    username: "johndoe",
    password: "supersecretpassword",
    email: "johndoe@example.com"
};

// через replacer фильтруем свойство по ключу и удаляем его, а undefined будет JSON пропущено
function serialisation (obj, removeValue) {
    return JSON.stringify(obj, (key, value) => {
        return key === removeValue ? undefined : value
    })
}

console.log(serialisation(user, 'password'))