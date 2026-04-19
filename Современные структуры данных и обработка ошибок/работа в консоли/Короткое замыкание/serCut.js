// 1. Оператор || простейший
console.log(false || "Hello" || 0); // ? hello

// 2. Оператор && простейший
console.log(true && "Hello" && 0); // ? 0

// 3. Смешанное использование
console.log(0 && "skip" || "default"); // ? default

// 4. Несколько falsy и truthy
console.log('' || null || undefined || 'OK' || 'Another'); // ? OK

// 5. Несколько && с falsy
console.log('Hi' && 42 && 0 && true); // ? 0

// 6. Присвоение через ||= (логическое ИЛИ с присваиванием)
let name1 = '';
name1 ||= 'Guest';
console.log(name1); // ? guest

// 7. Присвоение через &&= (логическое И с присваиванием)
let isAdmin = true;
isAdmin &&= 'SuperAdmin';
console.log(isAdmin); // ? superadmin

// 8. Присвоение &&= с falsy
let age = 0;
age &&= 18;
console.log(age); // ? 0

// 9. Присвоение ??= (нулевое слияние)
let settings = null;
settings ??= { theme: 'dark' };
console.log(settings); // ? { theme: 'dark' }

// 10. Короткое замыкание для условного выполнения
let user = { isAdmin: false };
user.isAdmin && console.log('Welcome'); // ? false

// 11. Сложное выражение с && и ||
console.log(false && 'skip' || 'show' && 0 || 'end'); // ? 'end'

// 12. Выражение с функциями и коротким замыканием
function f1() { console.log('f1'); return 0; }
function f2() { console.log('f2'); return 42; }
console.log(f1() || f2()); // ? 42

// 13. Короткое замыкание с && и функциями
function a1() { console.log('a1'); return true; }
function a2() { console.log('a2'); return 'done'; }
console.log(a1() && a2()); // ? done

// 14. Смешанное с nullish (??) и || 
let val = (null ?? undefined) || 5
console.log(val); // ? 5

// 15. Проверка существования объекта через &&
let data = null;
const length = data && data.items && data.items.length;
console.log(length); // ? null

// 16. Цепочка || для значения по умолчанию
let userInput = '';
let result = userInput || 'default';
console.log(result); // ? default

// 17. Комбинация с числами
console.log(0 || 42 && 0 || 99); // ? 99

// 18. Короткое замыкание и логическое присваивание
let count = 0;
count ||= 10;
count &&= 20;
console.log(count); // ? 20

// 19. Ловушка с falsy
console.log('' && 0 || 'fallback'); // ? fallback

// 20. Проверка короткого замыкания с функциями и || 
let executed = false;
function run() { executed = true; return "done"; }
console.log(true || run()); 
console.log(executed); // ? true
