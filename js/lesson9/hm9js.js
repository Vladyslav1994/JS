// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let main = document.createElement('h1');
// console.log(main);
// main.innerText = 'hello';
// main.classList.add('wrap');
// main.classList.add('collapse');
// main.classList.add('alpha');
// main.classList.add('beta');
// main.style.background = 'blue';
// main.style.color = 'yellow';
// main.style.fontSize = '20px'
// document.body.appendChild(main);
// let xxx = document.getElementsByClassName('menu');
// xxx[0].appendChild(main);
// console.log(main);

// xxx[0].appendChild(main.cloneNode(true));
// xxx[0].appendChild(main.cloneNode(true));
// console.log(main);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let ul = ['Main', 'Products', 'About us', 'Contacts'];
// for (const xxx of ul) {
//     let lishka = document.createElement('li');
//     document.body.appendChild(lishka);
// }
// console.log(ul);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (let courses of coursesAndDurationArray) {
//         document.write(`<div>${courses.title} - ${courses.monthDuration}</div>`);
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let container = document.getElementsByClassName('item')[0];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let courses of coursesAndDurationArray) {
    // створення елементів
    let coursesdiv = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //додавання класу
    coursesdiv.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description');

    //додання елементів в наш головний дів
    coursesdiv.appendChild(h1);
    coursesdiv.appendChild(p);


    //виведення їх на екран
    h1.innerText = `${courses.title}`;
    p.innerText = `${courses.monthDuration}`;


    container.appendChild(coursesdiv);
}
