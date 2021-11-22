// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function xxx (num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//     } else if (num2 < num1 && num2 < num3) {
//         console.log(num2);
//     } else if (num3 < num1 && num3 < num2) {
//         document.write(num3);
//     } else {
//         document.write('das')
//     }
// }
// xxx(8,5,4);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function xxx(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         document.write(num1);
//     } else if (num2 > num1 && num2 > num3) {
//         document.write(num2);
//     } else if (num3 > num1 && num3 > num2) {
//         document.write(num3);
//     }
// }
//
// xxx(5, 12, 14);

// - створити функцію яка повертає найбільше число з масиву
// let masiv = [11, 22, 33, 44, 55];
//
// function xxx(qwe) {
//     let mas = max[0];
//     for (const mas of masiv) {
//         if (mas > number) {
//             number = mas;
//         }
//     }
//     return mas
// }
//
// document.write(`${xxx}`);




// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let masive = [5,42,2,67,456,44]
//
// function mas(arrayNumbers) {
//     let result = 0;
//     for (const num of arrayNumbers) {
//         result = result + num
//     }
//
//     return result;
// }
//
// let qwe = mas(masive);
// console.log(qwe)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let masive = [5,42,2,67,456,44]
//
// function mas(arrayNumbers) {
//     let result = 0;
//     for (const num of arrayNumbers) {
//         result = result + num
//     }
//
//     return result / masive.length;
// }
//
// let qwe = mas(masive);
// console.log(qwe)



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let masive = [5, 23, 2];
//
// function xxx(array) {
//     let min = array[0]
//     for (let i = 0 ; i < array.length; i++) {
//         if ([array][i]){
//             console.log(masive)
//         }
//
//     }
//     return min
// }
//
// let qqq = xxx(masive);
// console.log(qqq);
// function xxx() {
//     let min;
//     let max;
//     for (let i = 0 ; i < arguments.length; i++) {
//             if (min < arguments[i] ){
//                 max = arguments[i]
//             } else min = arguments[i]
//     }
//     console.log(max, 'max');
//     return min
// }
//
// let qqq = xxx(11, 22, 33 ,33, 33, 55, 66, 77, 888, 99, 999, 100500, -1 );
// console.log(qqq)


// - створити функцію яка приймає три числа та виводить найменьше.



// function operation(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1)
//     } else if (num2 < num3 && num2 < num1) {
//         console.log(num2);
//     } else if (num3 < num1 && num3 < num2) {
//         console.log(num3);
//     } else {
//         console.log(111);
//     }
// }
// operation(7,22,53)


// - створити функцію яка повертає найбільше число з масиву

let bignumber = [22,33,44,55,66];

function big(count) {
    let count1 = count[0];
    for (let num of count) {
        if (num > count1) {
            count1 = num;
        }
    }
    return count1
}

document.write(`${big(bignumber)}`);