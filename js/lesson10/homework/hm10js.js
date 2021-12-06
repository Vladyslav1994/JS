// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


// let text = document.getElementById('text');
// let click = document.getElementById('click')
// click.onclick = function () {
//     text.style.display = 'none'
// };

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let click = document.getElementById('click');
// click.onclick = function () {
//     click.style.display = 'none';
// };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// document.getElementById('button1').onclick = function () {
//     let age = document.getElementById('age').value;
//     if (age < 18) {
//         document.write('вам ще не виповнилося 18');
//     } else if (age >= 18) {
//         document.write('welcome');
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.querySelector('.menu');
// let titleelement = menu.querySelector('.title');
// titleelement.onclick = function () {
//     menu.classList.toggle('open');
// };


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let xxx = document.getElementsByClassName('xxx')[0];
// let array = [
//     {title:'lorem', body:'lorem ipsum dolo'},
//     {title:'lorem', body:'lorem ipsum dolo'},
//     {title:'lorem', body:'lorem ipsum dolo'},
//     {title:'lorem', body:'lorem ipsum dolo'}
// ]
//
// for (const arr of array) {
//     let div = document.createElement('div');
//     let h5 = document.createElement('h5');
//     let p = document.createElement('p');
//     let button = document.createElement('button');
//     let hr = document.createElement('hr');
//
//     h5.innerText = arr.title;
//     p.innerText = arr.body;
//     button.innerText = 'close';
//
//     button.onclick = () => {
//                 p.classList.add('pHidden');
//             }
//
//     div.append(h5, p, button);
//     xxx.append(div, hr);
// }
