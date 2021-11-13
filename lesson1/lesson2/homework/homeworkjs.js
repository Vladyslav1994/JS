// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time = prompt('writetime');
// if (time <= 15) {
//     document.write('<h1>перша частина години</h1>')
// } else if (time > 15 && time <= 30) {
//     document.write('<h1>друга частина години</h1>')
// } else if (time > 30 && time <= 45) {
//     document.write('<h1>третя частина години</h1>')
// } else if (time > 45 && time <= 59) {
//     document.write('<h1>четверта частина години</h1>')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day = prompt('number day');
// if (day <= 10) {
//     document.write('<h1>first decade</h1>');
// } else if (day >= 11 && day <= 20) {
//     document.write('<h1> second decade</h1>');
// } else if (day >= 21 && day <= 31) {
//     document.write('<h1>third decade</h1>');
// }



// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом
// (тернаркою)

// проба перша
// let test = '';
// if (test !== true) {
//     document.write('Вірно')
// }
// else if (test === true) {
//     document.write('Неправильно')
// }

// проба друга
// let test = prompt('Вірно') || ('Неправильно');
// if (test ===  true) || (test !== true)
// document.write(test);
// let test = 1;
// console.log(test === !true) || (test !== !false);
// document.write(test)

// перемога!
let test = 2;
let qwe = test === 1 ? 'Вірно' : 'Неправильно';
console.log(qwe);