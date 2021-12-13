
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then(jsons => {
//         for (let xxx of jsons) {
//             let div1 = document.createElement('div');
//             let h5Text = document.createElement('h5')
//             let h4Text = document.createElement('h4')
//             let paragrafText = document.createElement('p')
//             let h6Text = document.createElement('h6')
//
//             div1.classList.add('classdiv1');
//
//             h4Text.innerText = `${xxx.userId}`;
//             h5Text.innerText = `${xxx.id}`;
//             h6Text.innerText = `${xxx.title}`;
//             paragrafText.innerText = `${xxx.body}`;
//
//             document.body.append(div1);
//             div1.append(h5Text, h4Text, h6Text, paragrafText);
//
//         }
//     });



// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then((response) => response.json())
//     .then(jsons => {
//         for (let xxx of jsons) {
//             let div1 = document.createElement('div');
//             let h2Text = document.createElement('h2')
//             let h3Text = document.createElement('h3')
//             let paragrafText = document.createElement('p')
//             let h4Text = document.createElement('h4')
//             let h5Text = document.createElement('h5')
//
//             h2Text.innerText = `${xxx.postId}`;
//             h3Text.innerText = `${xxx.id}`;
//             h4Text.innerText = `${xxx.name}`;
//             h5Text.innerText = `${xxx.email}`;
//             paragrafText.innerText = `${xxx.body}`;
//
//             div1.classList.add('classdiv1');
//
//
//             document.body.append(div1);
//             div1.append(h2Text, h3Text, h5Text, h4Text, paragrafText);
//
//         }
//     });


