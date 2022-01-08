// Задача 1. С помощью метода prompt() получите сначала имя пользователя, затем год его рождения и сохраните в 2 переменные.
//     Вычислите возраст пользователя, и выведите его в абзаце с помощью document.write() в таком формате "Антон: 24".
// let name = prompt('write name and surname');
// let name2 = prompt('write name and surname');
// let name3 = prompt('write name and surname');
// document.write(`<ol>`)
//     for (let i = 0; i < 1 ; i ++) {
//         document.write(`<li>${name}</li>`)
//         document.write(`<li>${name2}</li>`)
//         document.write(`<li>${name3}</li>`)
//     }
// document.write(`</ol>`)
//
// document.write(`<ol>`)
// for (let i = 0; i < 3 ; i ++) {
//     let name = prompt('write name and surname');
//     document.write(`<li>${name}</li>`)
// }
// document.write(`</ol>`)

// let xxx = [1, 2, 3];
// console.log(Array.isArray(xxx));
//
// let name = "Ilya";
//
// alert( `hello ${1}` ); // ?
//
// alert( `hello ${"name"}` ); // ?
//
// alert( `hello ${name}` ); // ?

// let array = [1, 2, 3, 4, 5];
//
// function findMax(arr) {
//     return Math.min(...arr);
// }
//
// console.log(findMax(array))

// let array = [1, 2, 3, 45, 5];
//
// let xxx = (qqq) => {
//     let aaa = qqq[0];
//     for (let ddd of qqq) {
//         if (ddd < aaa) {
//             aaa = ddd;
//         }
//     }
// return aaa
// };
// let yyy = xxx(array);
// console.log(yyy);


// let xxx = prompt('who are you');
//  if (xxx === 'admin' && prompt('weditie parol') === 'privet') {
//     console.log('hello');
// } else {
//      alert('ya was ne znaju');
//  }

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < a.length; i++) {
//     if (i % 2==0) {
//         console.log(i);
//     }
// }

// !!!!!!!!! zdelat
// const first = [1, 2, 3, 4];
// const second = [3, 4, 5, 6];
//
// function intersection(a, b) {
//     for (let i = 0; i < intersection().length; i++) {
//
//         if (a===b) {
//             console.log(xxx)
//         }
//     }
//         return xxx;
// }
//
// let sss = intersection('first', 'second' );
// console.log(sss)

// let namex
// console.log(isNaN(namex));

// function calculator(a, b, znak) {
//     if (znak === '+') {
//         return(a + b)
//     } else if (znak === '-') {
//         return(a - b);
//     }
//
// }
//
// calculator(10, 20, '-');

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let firstUp = (str) => {
//     if (!str) return str; // перевірка на те чи стрічка не пуста, а саме чи не пустий [0] індекс
//     return str[0].toUpperCase() + str.slice(1)
// };
// document.write(firstUp('hello okten'));
// console.log(firstUp('hello okten'));

// let xxx = [1, 23, 3];
// let xx = xxx.reverse();
// console.log(xx);

// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
// let friends = +["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//     if (friends >= 3) {
//         console.log('big');
//     } else {
//         console.log('small')
//     }








// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
// let xxx = [1, 2, 3];
//
// if (1 < 2 && 2 < 3) {
//     console.log('2');
// } else if (1 > 2 && 1 > 3) {
//     console.log('1');
// } else if (3 > 2 && 3 > 1) {
//     console.log('3');
// }


//
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// let xxx = prompt('num');
// if (xxx>0 && xxx++ && xxx <= 100) {
//     console.log('pozitiv')
// } else if (xxx == 0) {
//     console.log('nul');
// } else if (xxx<0 && xxx-- && xxx >= -100) {
//     console.log('min');
// } else {
//     console.log('know');
// }