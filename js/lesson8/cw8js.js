// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let textID = document.getElementById('main_header');
// console.log(textID);
// textID.classList.add('main_header1');

// b) робить шириниу елементу ul 400px
// let ul = document.getElementsByTagName('ul');
// console.log(ul);
// ul[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let width = document.getElementsByClassName('linkList');
// console.log(width);
// width[0].style.width = '50%';

// d) отримує текст який зберігається в елементі з класом listElement2
// let findListElement2 = document.getElementsByClassName('listElement2');
// console.log(findListElement2)

// e) отримує всі елементи li та змінює ім колір фону на сірий
// ul[0].style.background = 'grey';

// f) отримує всі елементи 'a' та додає їм клас anchor
// let anch = document.getElementsByTagName('a');
// console.log(anch);
// for (let addList of anch) {
//     addList.classList.add('anchor')
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// for (let change of anch)
//     if (change.innerText.includes('link3')) {
//         change.style.fontSize = '40px';
//     }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let anch = document.getElementsByTagName('a');
// for (let changeText of anch) {
//     changeText.classList.add('element_' + changeText.innerText);
//
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub_head = document.getElementsByClassName('sub-header');
//
// for (const item of sub_head) {
//     item.style.background = prompt('')
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content_1_change = document.getElementsByClassName('content_1');
// console.log(content_1_change);
// for (const change of content_1_change) {
//     change.innerText = prompt('');
// }

// l) отримати елементи p та змінити їм padding на 20px
// let Padd = document.getElementsByTagName('p');
// for (const padd_20px of Padd) {
//     padd_20px.style.padding = '20px';
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let change_text2 = document.getElementsByClassName('text2')
// console.log(change_text2);
// change_text2[0].innerText = 'sep-2021';