fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((user_detailes) => {


            for (const xxx of user_detailes) {

                let wrap = document.createElement('wrap')
                let user_div1 = document.createElement('div')

                wrap.classList.add('wrap1')
                user_div1.classList.add('user_div1')

                user_div1.innerText = `${xxx.id}, ${xxx.name}, ${xxx.username}, ${xxx.email}, ${xxx.address.street},
                ${xxx.address.suite}, ${xxx.address.city}, ${xxx.address.zipcode}, ${xxx.address.geo.lat},
                 ${xxx.address.geo.lng}`

                document.body.append(wrap);
                wrap.append(user_div1);


            }
        });