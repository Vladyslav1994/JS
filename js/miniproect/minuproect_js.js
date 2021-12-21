// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
        for (const elements of json) {
            let wrap = document.createElement('div');
            let div_name = document.createElement('div');
            let div_id = document.createElement('div');
            let btn = document.createElement('button');


            div_name.innerText = `${elements.name}-`;
            div_id.innerText = `${elements.id}`;
            btn.innerText = 'click';

            wrap.classList.add('wrap_main');
            btn.classList.add('btn');
            div_name.classList.add('div_name')
            div_id.classList.add('div_id')


            document.body.append(wrap);
            wrap.append(div_name, div_id, btn,);


            btn.onclick = () => {

                if (btn) {
                    document.location='user-details.html'
                } else {
                    `sadas`
                }
            };
        }
    });

