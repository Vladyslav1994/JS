// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((jsons) => {
        let wrap = document.createElement('div');

        for (let post of jsons) {
            let div_postId = document.createElement('div');
            let div_id = document.createElement('div');
            let div_title = document.createElement('div');
            let div_body = document.createElement('div');
            let btn1 = document.createElement('button');

            div_postId.innerText = `${post.userId}`;
            div_id.innerText = `${post.id}`;
            div_title.innerText = `${post.title}`;
            div_body.innerText = `${post.body}`;
            btn1.innerText = 'click';

            wrap.classList.add('wraps')
            btn1.classList.add('btn1');
            div_id.classList.add('div_id1');


            btn1.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then((response) => response.json())
                    .then((jsons) => {
                        const oldWrap = document.getElementsByClassName('commentsWrapper')[0]
                        if(oldWrap) {
                            oldWrap.remove();
                        }

                        let wrapComments = document.createElement('div');
                        wrapComments.classList.add('commentsWrapper');

                        jsons.forEach(comment => {
                            let div_commentId = document.createElement('div');
                            let div_commentName = document.createElement('div');

                            div_commentId.innerText = `${comment.id}`;
                            div_commentName.innerText = `${comment.name}`;

                            wrapComments.append(div_commentId, div_commentName);
                        })

                        document.body.append(wrapComments);
                    })
            }
            wrap.append(div_postId, div_id, div_title, div_body, btn1);

        }
        document.body.append(wrap);



    })
;