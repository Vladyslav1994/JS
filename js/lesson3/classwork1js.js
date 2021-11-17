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


// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`);
//
// for (let i = 0; i < listOfItems.length -1; i++) {
//     document.write(`<li>${listOfItems[i]}</li>`);
// }
// document.write(`</ul>`);


// <div>
//     NAME- SURNAME- AGE- INFO- <img src="PHOTO" alt="">
// </div>

//
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв '
//             + 'мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є ' +
//             'дві ' + 'молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі.' +
//             ' Разом ' + 'зі ' + 'своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». ' +
//             'Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний.' +
//             ' Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/thumb/0/02/Homer_Simpson_2006.png/200px-Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — ' +
//             'постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит ' +
//             'зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом ' +
//             'универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза ' +
//             'цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, ' +
//             'детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж' +
//             ' — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не ' +
//             'только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир.' +
//             ' Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». ' +
//             'Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего ' +
//             'своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала' +
//             ' «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night ' +
//             '(англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, ' +
//             'пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления ' +
//             'в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox,' +
//             ' дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// for (const simpson of simpsons) {
// document.write(`<div>`)
//     document.write(`<!--${simpson.name} - ${simpson.age} - ${simpson.info} - <img src="${simpson.photo}" alt=""/>-->`);
// document.write(`</div>`);
// }
//
// for (let i = 0; i < simpsons.length - 1; i++) {
//     document.write(`<div>`)
//     document.write(`${simpsons[i].name} - ${simpsons[i].age} - ${simpsons[i].info} - <img src="${simpsons[i].photo}" alt=""/>`);
// document.write(`</div>`);
// }
// for (const simpson of simpsons) {
//     document.write(`<div>`);
//     document.write(`<h1>${simpson.name} ${simpson.surname}. Age is - ${simpson.age}</h1>`)
//     document.write(`<p> ${simpson.info} </p>`)
//     document.write(`<img src="${simpson.photo}" alt="">`);
//     document.write(`</div>`);
// }

//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// document.write(`<div>`)
// for (let product of products) {
//     document.write(`<div class="product-card"></div>`);
//     document.write(`<h3> ${product.title} цена ${product.price} </h3>`);
//     document.write(`<img src="${product.image}" alt="">`)
// }
document.write(`</div>`)
