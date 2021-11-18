// let arrey = ['1, 2, 3, 4, 5, 6'];
// for (const page of arrey) {
//     document.write(`<div>`)
//     document.write(page);
//     document.write(`</div>`);
// }
// let users = [
//     {name: 'vasya', age: 21, status: true},
//     {name: 'julia', age: 22, status: false},
//     {name: 'Jura', age: 21, status: false},
//     {name: 'anton', age: 22, status: true}
// ];
// for (const user of users) {
//     if (user.age ===22) {
//         console.log(user);
//     }
// }

// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let num_1 = [1, 2, 3, 4, 5];
// for (ind = 0; ind < 5; ind++) {
//     document.write(num_1[ind]);
// }

// let num_2 = ['name1', 'name2', 'name3', 'name4', 'name5'];
// for (i = 0; i < 5; i++) {
//     document.write(`<div>${num_2[i]}</div>`);
// }

// let num_3 = [
//     {name : 'ania', age : 16, passport: false},
//     {name : 'anton', age : 17, passport: true},
//     {name : 'julia', age : 17, passport: true},
//     {name: 'dima', age: 16, passport: true},
//     {name : 'alex', age: 16, passport: false}
// ]
// for (const user of num_3) {
//     console.log(user);
// }
// for (const user of num_3) {
//     if (user.age === 17) {
//         console.log(user);
//     }
// }
// for (const user of num_3) {
//     console.log('---------');
//     for (const key in user) {
//         console.log(key, user[key]);
//     }
// }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let mas = [];
// mas[0] = 'hello';
// mas[1] = 'people';
// mas[2] = 'ukraine';
// mas[3] = 'basket';
// console.log(mas);


//     - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.



// for (let i = 0; i < 10; i++) {
//     document.write(`<div>me</div>`);
// }
// let qwe = [0];
// for (i = 0; i < 10; i++) {
//     document.write(`<div>new year${[i]}</div>`);
// }

// i = 1;
// while (i < 21) {
//     document.write(`<h1>lear</h1>`);
//     i++
// }


// let i = 1;
// while (i < 21) {
//     document.write(`<h1>auto${[i]}</h1>`);
//     i++
// }



// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const p of numb) {
//     document.write(`<div>`)
//     document.write(p);
//     document.write(`</div>`);
// }


// let str = ['h', 'e', 'l', 'l', 'o', 'o', 'k', 't', 'e', 'n'];
// for (const z of str) {
//     document.write(`<div>`)
//     document.write(z);
//     document.write(`</div>`);
// }

// let something = [1, 2, 3, 'eqw', '123', 'feasewf', false, true, 1, 'q'];
// for (let p of something) {
//     document.write(`<div>`)
//     document.write(p);
//     document.write(`</div>`);
// }

// let something = [1, 2, 3, 'eqw', '123', 'feasewf', false, true, 1, 'q'];
// for (i = 0; i < something.length; i++) {
//     if (typeof something[i] === 'boolean') {
//         console.log(something[i])
//     }
// }
// let something = [1, 2, 3, 'eqw', '123', 'feasewf', false, true, 1, 'q'];
// for (i = 0; i < something.length; i++) {
//     if (typeof something[i] === "string") {
//         console.log(something[i]);
//     }
// }
// let something = [1, 2, 3, 'eqw', '123', 'feasewf', false, true, 1, 'q'];
// for (i = 0; i < something.length; i++) {
//     if (typeof something[i] === "number") {
//         console.log(something[i])
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на  100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let num = [1, 2, 3, 4, 5, 'q', 'w', 'e', true, false,1];
// for (i = 0; i <= num.length; i++) {
//     console.log(`<div>${num[i]}</div>`);
// }
// for (let a = 1; a <= 10; a++) {
//     console.log(`<div>hello${a}</div>`);
//     document.write(`<div>hello${a}</div>`);
// }
// for (let a = 1; a <= 100; a++) {
//     console.log(`<div>name${a}</div>`);
//     document.write(`<div>name${a}</div>`);
// }
// for (let a = 2; a <= 100; a+=2) {
//     console.log(`<div>name${a}</div>`);
//     document.write(`<div>name${a}</div>`);
// }
// for (let a = 2; a <= 100; a+=2) {
//     console.log(`<div>name${a}</div>`);
//     document.write(`<div>name${a}</div>`);
// }
// for (let a = 1; a <= 100; a+=2) {
//     console.log(`<div>name${a}</div>`);
//     document.write(`<div>name${a}</div>`);
// }


// let qwe = prompt('');
// if (qwe >= 18) {
//     document.write('price your ticket 500');
// } else if (qwe >= 14 && qwe < 18) {
//     document.write('price your ticket 300');
// } else if (qwe < 14) {
//     document.write('price your ticket 100');
// }
// let key = '';
// switch (key) {
//     case 'glass':
//         console.log('zakapay oczi');
//         break;
//     case 'noga':
//         console.log('widpoczyn');
//         break;
//     default:
//         console.log('fasfas');
// }

// let exser = ['vasia', 'julia', 'anton', 'max', 'vlad', 'ania'];
// for (let exer of exser) {
//     console.log(exer);
// }