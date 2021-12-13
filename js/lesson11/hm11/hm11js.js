// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// let user_information = document.createElement('div')
// document.body.appendChild(user_information)
//
// let user_name = document.createElement('input');
// let user_age = document.createElement('input');
// let btn = document.createElement('button')
// btn.classList.add('btn')
// let keys = 'key';
//
// user_information.append(user_name, user_age, btn);
//
// let save = (nameu, ageu) => {
//     let us = {
//         user_name: nameu,
//         user_age: ageu
//     };
//     localStorage.setItem(keys, JSON.stringify(us));
// };
//
//
// btn.onclick = () => {
//     save(user_name.value, user_age.value);
// };


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


// let model = document.forms.car.model;
// let type = document.forms.car.type;
// let volume = document.forms.car.volume;
// let btn1car = document.getElementById('btn1');
// let item = 'keyCar';
//
// let save = (model_auto, type_auto, volume_auto) => {
//     let save_car = JSON.parse(localStorage.getItem(item)) || [];
//     save_car.push({model_auto, type_auto, volume_auto});
//     localStorage.setItem(item, JSON.stringify(save_car));
// };
// btn1car.onclick = function () {
//     save(model.value, type.value, volume.value);
// };



