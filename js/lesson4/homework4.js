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
// let mas=[1,2,3,4,5]
// function funct(ar1,ar2,ar3,ar4,ar5) {
//     for (const masi of mas) {
//         document.write(masi);
//     }
// }
//
// funct();


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylindr(r, h) {
//     let xxx = 2 * 3.14 * r * h;
//     return xxx;
// }
// console.log(cylindr(3,6))
// document.write(areaCylinder(3, 6))

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function argum(qwe) {
//     console.log(qwe);
// }
//
// argum('hello','dasdas');
// argum('oktem');
// argum('dz w poryadku?');

// function qwe(num){
//     document.write(`<div>`)
//
//     for (let i=0; i<num; i++){
//         document.write(`<p>hi${i}</p>`);
//     }
//     document.write(`</div>`);
// }
// qwe(10);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function one(text, num) {
    document.write(`<ul>`);
    for (let i = 0; i < (num || 3); i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

one("hello");


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let mas = [1231, 'hello', true];
//
// function qwe(fun) {
//     document.write(`<ul>`);
//     for (let i = 0; i < mas.length; i++) {
//         document.write(`<li>${fun[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// qwe(mas);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let one = [{id: 1, name: 'Vlad', age: 27}, {id: 2, name: 'Ania', age: 22}]
//
// function hit(togather) {
//     for (const xxx of togather) {
//         document.write(`<div>${xxx["id"]} ${xxx['name']} ${xxx["age"]}</div>`)
//     }
// }
// hit(one)
