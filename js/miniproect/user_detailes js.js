// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.


const userId = location.search.split('user=')[1];

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((user_detailes) => {

                let wrap1 = document.createElement('wrap')
                let user_div1 = document.createElement('div')
                let btn2 = document.createElement('button');

                wrap1.classList.add('wrap1');
                user_div1.classList.add('user_div1');
                btn2.classList.add('btn2')

                user_div1.innerText = `${user_detailes.id}, ${user_detailes.name}, ${user_detailes.username}, ${user_detailes.email}, ${user_detailes.address.street},
                ${user_detailes.address.suite}, ${user_detailes.address.city}, ${user_detailes.address.zipcode}, ${user_detailes.address.geo.lat},
                 ${user_detailes.address.geo.lng}`
                btn2.innerText = 'post of current user';

                document.body.append(wrap1);
                wrap1.append(user_div1, btn2);

                btn2.onclick = () => {
                    fetch(`https://jsonplaceholder.typicode.com/users/${user_detailes.id}/posts`)
                        .then((response) => response.json())
                        .then((json) => {

                            const oldWrap = document.getElementsByClassName('titl')[0];
                            if(oldWrap) {
                                oldWrap.remove();
                            }

                            let titl = document.createElement('div');
                            titl.classList.add('titl')

                            json.forEach(post => {

                                let xxx = document.createElement('div')
                                let btn3 = document.createElement('button');
                                btn3.classList.add('btn3')

                                xxx.innerText = `${post.title}`;
                                btn3.innerText = 'click';
                                btn3.onclick = () => {
                                    location.href = `post-details_html.html?post=${post.id}`;
                                };
                                xxx.append(btn3);
                                titl.append(xxx);
                            })
                            document.body.append(titl)

                        });
                };

        });