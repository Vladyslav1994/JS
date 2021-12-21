fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((user_detailes) => {


            for (const xxx of user_detailes) {

                let wrap1 = document.createElement('wrap')
                let user_div1 = document.createElement('div')
                let btn2 = document.createElement('button');
                let btn3 = document.createElement('button');

                wrap1.classList.add('wrap1');
                user_div1.classList.add('user_div1');
                btn2.classList.add('btn2')

                user_div1.innerText = `${xxx.id}, ${xxx.name}, ${xxx.username}, ${xxx.email}, ${xxx.address.street},
                ${xxx.address.suite}, ${xxx.address.city}, ${xxx.address.zipcode}, ${xxx.address.geo.lat},
                 ${xxx.address.geo.lng}`
                btn2.innerText = 'post of current user';
                btn3.innerText = 'click';

                document.body.append(wrap1);
                wrap1.append(user_div1, btn2);
                user_div1.append(btn3);


                btn2.onclick = () => {
                    fetch(`https://jsonplaceholder.typicode.com/users/${xxx.id}/posts`)
                        .then((response) => response.json())
                        .then((json) => {

                            const oldWrap = document.getElementsByClassName('titl')[0];
                            if(oldWrap) {
                                oldWrap.remove();
                            }

                            let titl = document.createElement('div');
                            titl.classList.add('titl')

                            json.forEach(user_info => {

                                let xxx = document.createElement('div')

                                xxx.innerText = `${user_info.title}`;

                                titl.append(xxx);
                            })
                            document.body.append(titl)

                        });
                };
                btn3.onclick = () => {
                    if (btn3) {
                        document.location = 'post-details_html.html';
                    } else {
                        'dsadas'
                    }
                };

            }
        });