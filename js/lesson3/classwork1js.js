// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

//     1. перебрати його циклом while
// let numb_1 = [2,17,13,6,22,31,45,66,100,-18];
// i = 0;
// while (i <= numb_1.length -1) {
//     console.log(numb_1[i]);
//     i++
// }

// 2. перебрати його циклом for
// let numb_1 = [2,17,13,6,22,31,45,66,100,-18];
// for (i = 0; i <= numb_1.length -1; i++) {
//     console.log(numb_1[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let numb_1 = [2,17,13,6,22,31,45,66,100,-18];
// i = 1;
// while (i <= numb_1.length - 1) {
//     console.log(numb_1[i]);
//     i += 2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let numb_1 = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 1; i <= numb_1.length - 1; i += 2) {
//     document.write(`<div>${numb_1[i]}</div>`);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let numb_1 = [2,17,13,6,22,31,45,66,100,-18];
// i = 0;
// while (i < numb_1.length - 1) {
//     document.write(`<div>${numb_1[i]}`);
//     i += 2;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let numb_1 = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i <= numb_1.length - 1; i += 2) {
//     document.write(`<div>${numb_1[i]}`);
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let numb_1 = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i <= numb_1.length-1; i++) {
//     if (numb_1[i] % 3 === 0) {
//         numb_1[i] = "okten";
//     }
// }
// console.log(numb_1);

// 8. вивести масив в зворотньому порядку.
// let numb_1 = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = numb_1.length - 1; i >= 0; i--) {
//     console.log(numb_1[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let numb_1 = [2,17,13,6,22,31,45,66,100,-18];
// i = numb_1.length -1
// while (i >= 0) {
//     console.log(numb_1[i]);
//     i--
// }

// let numb_1 = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = numb_1.length - 1; i >= 0; i--) {
//     console.log(numb_1.reverse());
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let numb_1 = [2,17,13,6,22,31,45,66,100,-18, 6];
// let i = numb_1.length - 1;
// while (i >= 0) {
//     console.log(numb_1[i]);
//     i -= 2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let numb_1 = [2, 17, 13, 4554, 55, 55, 6, 7, 998, 34];
// for (let i = numb_1.length - 1; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(numb_1[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let numb_1 = [2,17,13,6,22,31,45,66,100,-18, 6];
// let numb_2 = [1,2,3,4,5,6,7,8,9,0,12];
//
// const fun = (numbers) => {
//     let i = numbers.length -1;
//     while (i >= 0) {
//         if (numbers[i] % 2 === 0) {
//             console.log(numbers[i]);
//         }
//         i--
//     }
// }
//
// fun(numb_1)
// console.log('_______')
// fun(numb_2)




// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону template1.1

// <ul>
//     <li>ITEM OF ARRAY</li>
//     for (let i)
//     інші об'єкти масиву
//   ...
//   ...
//   ...
//     -->
// </ul>


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);

for (let i = 0; i < listOfItems.length -1; i++) {
    console.log(11)
    document.write(`<li>${listOfItems[i]}</li>`);
}
document.write(`</ul>`);
