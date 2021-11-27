// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let users = (user) => {
//     let split = user.split('');
//
//     let badArr = '!@#$%^&*()_+-.,'.split('')
//
//     const arr = split.map((item, i) => {
//         if (badArr.includes(item)) {
//             return badArr.includes(split[i-1]) ? '' : ' '
//         }
//         return item;
//     })
//     return arr.join('')
// };
// console.log(users('Harry..Potter'));
// console.log(users('Ron---Whisley'));
// console.log(users('Hermione__Granger'));
// console.log(users('Hermione__!@#$%^&*()__Granger'));


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let arrey = () => {
//     let number = [0];
//     for (let i = 0; i < 100; i++) {
//         // let a = Math.random() * 100 | 0;
//         let a = Math.round(Math.random() * 100);
//         number.push(a);
//     }
//     console.log(number)
// }
// arrey()


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let arrey = () => {
//     let number = [0];
//     for (let i = 0; i < 100; i++) {
//         // let a = Math.random() * 100 | 0;
//         let a = Math.round(Math.random() * 100);
//         number.push(a);
//         let b = number.sort()*10;
//         console.log(b);
//     }
//     console.log(number)
// }
// arrey()


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let arrey = () => {
//         let number = [0];
//         for (let i = 0; i < 100; i++) {
//             // let a = Math.random() * 100 | 0;
//             let a = Math.round(Math.random() * 100);
//             number.push(a);
//
//         }
//         console.log(number)
//
// }
// arrey()


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11,21,3];
// let filter = (n, direction) => n.sort((a,b) => direction ? a-b : b-a);
//
// console.log(filter(nums, true));



// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let array = (xxx) => {
//     return xxx.split(" ")
// };
//
// let qqq = 'Каждый охотник желает знать';
// let sss = array(qqq);
// console.log(sss);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый


// let sss = (str, index) => {
//     return str.substr(0,index)
//
// };
// let str = 'Каждый охотник желает знать';
// document.write(sss(str, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let sss = (insert) => {
//     return insert.replaceAll(' ', '-').toUpperCase();
//
// };
// let aaa = sss(str);
// console.log(aaa);

let str = 'охотник';
let xxx = (sss) => {
    return sss.replace('о', 'О');
};
let qwe = xxx(str);
console.log(qwe);