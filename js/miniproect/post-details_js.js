// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const postId = location.search.split('post=')[1];

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((json) => {

        for (let us of json) {

            let xxx = document.createElement('div');

            xxx.classList.add('xxx');

            xxx.innerText = `${us.postId} ${us.id} ${us.name} ${us.email} ${us.body}`;

            document.body.append(xxx);

        }

    });