// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :


// отримує текст з параграфа з id "content"
let id = document.getElementById('id')
console.log(id);

// -- отримує текст з блоку з id "rules"
let div = document.getElementsByTagName('div');
console.log(div);

// -- замініть текст параграфа з id 'content' на будь-який інший
id[0].innerText = 'hello';

// -- замініть текст параграфа з id 'rules' на будь-який інший
div[0].innerText = 'okten';

// -- змініть кожному елементу колір фону на червоний
id[0].style.background = 'red';
// div[0].style.background = 'red';

// -- змініть кожному елементу колір тексту на синій
// id[0].style.background = 'blue';
div[0].style.background = 'blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let text = document.getElementById("rules");
console.log(text);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let xxx = document.getElementsByClassName('fc_rules');
console.log(xxx);
for (let sss of xxx) {
        sss.style.background = 'red';
}