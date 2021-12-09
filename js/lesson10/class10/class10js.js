// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let main_wrap = document.createElement('div')
// document.body.appendChild(main_wrap);
// main_wrap.classList.add('number1')
//
// let click1 = document.createElement('form');
// click1.setAttribute('name', 'myForm')
// main_wrap.appendChild(click1);
//
// let input_name = document.createElement('input');
// input_name.setAttribute('name', 'first')
//
// click1.appendChild(input_name)
//
// let input_surname = document.createElement('input');
// input_surname.setAttribute('name', 'second')
//
// click1.appendChild(input_surname)
//
// let button = document.createElement('button');
// main_wrap.appendChild(button)
// button.innerText = 'click here'
// button.classList.add('buttonfirst')
//
// button.onclick = function () {
//     console.log(document.forms.myForm.first.value);
//     console.log(document.forms.myForm.second.value);
// };


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let main_wrap1 = document.createElement('div');
// document.body.appendChild(main_wrap1);
//
// let form_1 = document.createElement('form');
// main_wrap1.appendChild(form_1);
// form_1.setAttribute('name', 'myForm');
//
//
// let first = document.createElement('input');
// form_1.appendChild(first);
// first.setAttribute('name', 'first');
//
// let second = document.createElement('input');
// form_1.appendChild(second);
// second.setAttribute('name', 'second');
//
//
// let third = document.createElement('input');
// form_1.appendChild(third);
// third.setAttribute('name', 'third');
//
//
// let button1 = document.createElement('button');
// form_1.appendChild(button1);
// button1.classList.add('butt');
// button1.innerText = 'click';
//
//
// button1.addEventListener('button1', function () {
//     let tr = first.value;
//     let  td = second.value
//     let three = third.innerText = 'string';
//
//     function xxx(tr, td, three) {
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid blue';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid green';
//                 td.innerText = `${three}`;
//                 divTable.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     xxx(tr, td, enterText);
// });
