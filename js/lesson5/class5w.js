// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let numbers = (num1, num2, num3) => {
//         if (num1 < num2 && num1 < num3) {
//             console.log(num1);
//         } else if (num2 < num1 && num2 < num3) {
//             console.log(num2);
//         } else if (num3 < num1 && num3 < num2) {
//             console.log(num3);
//         } else {
//             console.log(0);
//     }
// };
// numbers(6,22,5);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let numbersbig = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1)
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(num2);
//     } else if (num3 > num1 && num3 > num2) {
//         console.log(num3);
//     } else {
//         console.log(0);
//     }
// };
// numbersbig(11, 15, 14);

// - створити функцію яка повертає найбільше число з масиву
// let num = [1, 214, 5321, 533, 55, 3];
// let check = (bignum) => {
//     let max = bignum[0];
//     for (let number of bignum) {
//         if (number > max) {
//             max = number;
//         }
//     }
//     return max
// };
// document.write(`${check(num)}`);


// - створити функцію яка повертає найменьше число з масиву
// let array = [12, 3123, 44, 23, 6, 5432, 42];
// let arraynamber = (arr) => {
//     let number = arr[0];
//     for (let num of arr) {
//         if (num < number) {
//             number = num;
//         }
//     }
//     return number
// };
// document.write(`${arraynamber(array)}`);



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let num = [1, 214, 5321, 533, 55, 3];
// let check = (bignumber) => {
//     let result = 0;
//     for (let number of bignumber) {
//         result = result + number;
//     }
//     return result
// };
//
// let qqq = check(num);
// console.log(qqq);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//     let num = [1, 214, 5321, 533, 55, 3];
// let check = (bignumber) => {
//     let result = 0;
//     for (let number of bignumber) {
//         result = result + number;
//     }
//     return result / num.length
// };
//
// let qqq = check(num);
// console.log(qqq);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let number = (...xxx) => {
//     let min = xxx[0];
//     let max = xxx[0];
//     for (let num of xxx) {
//         if (min > num) {
//             min = num;
//         } else if (max < num) {
//             max = num;
//         }
//     }
//     console.log("Min: ", min)
//     console.log("Max: ", max)
// };
//
// number(11,22,33,44)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let number = () => {
//     let array = [];
//     for (let i = 0; i < 100; i++) {
//         let a = Math.random()
//         array.push(a)
//     }
//     console.log(array);
// };
// number()


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.

// let arrey = (num, limit) => {
//     let number = [];
//     for (let i = 0; i < num; i++) {
//         number.push(Math.round(Math.random()*limit))
//     }
//     return number
// };
// document.write(arrey(3, 10000));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array = [1, 2, 3];
// let number = (qqq) => {
//         console.log(qqq.reverse());
// };
// number(array)


// let array = [1, 2, 3];
//
// let number = (qqq) => {
//     let sss = [];
//     for (let i = 0; i < qqq.length; i++) {
//         sss.unshift(qqq[i])
//     }
//     return sss
// };
//
// console.log(number(array));

