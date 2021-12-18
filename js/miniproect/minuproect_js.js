// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
        for (const xxx of json) {
            let wrap = document.createElement('div');
            let div_name = document.createElement('div');
            let div_id = document.createElement('div');

            div_name.innerText = `${xxx.name}`;
            div_id.innerText = `${xxx.id}`;


            document.body.append(wrap);
            wrap.append(div_name, div_id);
        }
    });