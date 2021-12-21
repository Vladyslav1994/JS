fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((user_detailes) => {

        for (const qqq of user_detailes) {


                fetch(`https://jsonplaceholder.typicode.com/users/${qqq.id}/comments`)
                    .then((response) => response.json())
                    .then((json) => {


                        let titl = document.createElement('div');
                        titl.classList.add('titl')

                        json.forEach(us => {

                            let xxx = document.createElement('div')

                            xxx.innerText = `${us.name}`;

                            titl.append(xxx);
                        })
                        document.body.append(titl)

                    });


        }
    });