// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let a = prompt('напиши число перше');
// let b = prompt('напиши число друге');
// if (a > b) {
//     document.write(a);
// } else if (a < b) {
//     document.write(b);
// }else if (b === a) {
//     document.write(a = b);
// }



// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let user = prompt('number apartment');
// if (user <= 20) {
//     document.write('podjezd 1');
// } else if (user > 20 && user <= 41) {
//     document.write('podjezd 2');
// } else if (user > 41 && user <= 90) {
//     document.write('podjezd 3')
// }


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО


// let number = 1;
// let qwe = number === 10 ? 'ВІРНО' : 'НЕВІРНО';
// console.log(qwe);


// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let num = 1;
// if (typeof num === 'number') {
//     console.log('1');
// } else if (typeof num === 'string') {
//     console.log('2');
// } else if (typeof num === "boolean") {
//     console.log('3');
// } else if (typeof num === 'object') {
//     console.log('-3');
// } else {
//     console.log('не знаю що пишете');
// }


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let user = prompt('введи яка температура за вікном');
// if (user > 10 && user <= 22) {
//     document.write('ми йдемо ВЧИТИСЯ');
// } else {
//     document.write('сидимо вдома і вчимося ОНЛАЙН');
// }


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ...
// let num = prompt('number');
// switch (num) {
//     case '1':
//         console.log('you win a car');
//         break;
//     case '2':
//         console.log('you win a motocycle');
//         break;
//     case '3':
//         console.log('you win a McBook');
//         break;
//     case '4':
//         console.log('you win a iphone');
//         break;
//     case '5':
//         console.log('you win a screen');
//         break;
//     default:
//         console.log('your number is non-winning');
// }