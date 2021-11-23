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

//
// let xxx = (a, b) => a + b
//
// console.log(xxx(10, 2));
let func = (text) => {
    document.write(`<p>${text}</p>`)

};
func('hello');
