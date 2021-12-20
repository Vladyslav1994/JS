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
                    document.location = 'http://localhost:63342/JS/js/miniproect/user-details.html?_ijt=knh5tqnks7ausrgm6n7dkct5fm&_ij_reload=RELOAD_ON_SAVE';
                } else {
                    `sadas`
                }
            };





            // btn.onclick = () => {
            //     fetch('https://jsonplaceholder.typicode.com/users')
            //         .then((response) => response.json())
            //         .then((user_detailes) => {
            //
            //
            //             for (const xxx of user_detailes) {
            //
            //                 let wrap = document.getElementsByClassName('wrap')
            //                 let div_name = document.createElement('div');
            //                 let div_id = document.createElement('div');
            //                 let btn = document.createElement('button');
            //                 let datailes_username = document.createElement('div');
            //                 let datailes_email = document.createElement('div');
            //                 let datailes_address = document.createElement('div');
            //                 let datailes_street = document.createElement('div');
            //                 let datailes_suite = document.createElement('div');
            //                 let datailes_city = document.createElement('div');
            //                 let datailes_zipcode = document.createElement('div');
            //                 let datailes_geo = document.createElement('div');
            //                 let datailes_lat = document.createElement('div');
            //                 let datailes_ing = document.createElement('div');
            //
            //                 wrap.append(div_name, div_id, btn,datailes_username, datailes_email, datailes_address, datailes_street,
            //                     datailes_suite, datailes_city, datailes_zipcode, datailes_geo, datailes_lat, datailes_ing);
            //
            //             }
            //         });
            // };

        }
    });

