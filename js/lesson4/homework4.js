// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function pryamokutnyk(a, b) {
//     let resss = a * b;
//     return resss;
// }
//
// let result = pryamokutnyk(7, 8);
// console.log(result)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function kolo(pi, r) {
//     let formula = pi*(r**2);
//     return formula;
// }
//
// let result = kolo(3, 5);
// console.log(result);

// - створити функцію яка приймає масив та виводить кожен його елемент
// let mainarray = [1, 2, 3, 4,'main'];
//
// function array(arr) {
//     for (const numb of arr) {
//         console.log(numb);
//     }
// }
//
// array(mainarray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function fun(a) {
//     document.write(`<p>${a}</p>`)
// }
//
// fun('hello');
// fun('hello');
// fun('hello');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function funct(num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>hello${i}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// funct(3);

//     function argumen(a) {
//     document.write(`<ul>`);
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`);
//
// }
//
// argumen('hello')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
//     який є числовим (тут використовувати цикл)

// function text(size, a) {
//
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${a}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// text(5, 'hello')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function other(array) {
//     document.write(`<ul>`)
//     for (const arr of array) {
//         document.write(`<li>${arr}</li>`)
//     }
//     document.write(`</ul>`)
// }
// other([true,false,123,'dasw'])



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let docum = [{id: 1, name: 'vlad', age: 27}];
// function mainarray(num) {
//     for (let number of num) {
//         document.write(`<div>${number.id} ${number.name} ${number.age}</div>`);
//     }
// }
//
// mainarray(docum);