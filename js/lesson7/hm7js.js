// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function Users (usersid, usersname, userssurname, usersemail, usersphone) {
//     this.id = usersid;
//     this.name = usersname;
//     this.surname = userssurname;
//     this.email = usersemail;
//     this.phone = usersphone;
// }
// let user = [
//     new Users(123, 'Ania', 'Antonova', 'Ania@qwe.ua', 85564254546),
//     new Users(42, 'Misha', 'Faraonov', 'mis@qwe.ua', 8566654788),
//     new Users(351, 'Nastya', 'Afrimova', 'nast@qwe.ua', 856123188),
//     new Users(423, 'Yuri', 'Anatski', 'yyrr@qwe.ua', 8123654788),
//     new Users(52, 'Lili', 'Panova', 'li@qwe.ua', 85666124128),
//     new Users(65, 'Anton', 'Markov', 'ant@qwe.ua', 8564214188),
//     new Users(767, 'Maria', 'Franowa', 'mar@qwe.ua', 8531231228),
//     new Users(843, 'Nik', 'Bondarenko', 'Nik@qwe.ua', 8564214188),
//     new Users(92, 'Yaroslav', 'Panenko', 'yaro@qwe.ua', 856642141),
//     new Users(10, 'Eva', 'Radchenko', 'eeva@qwe.ua', 8563213788)];
// console.log(user)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


// let filtr = user.filter((item) => {
//     if (item.id % 2 === 0){
//     return item
//     }});
// console.log(filtr);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// user.sort((a, b) => {
//     return a.id - b.id;
// });
// console.log(user)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//
//     }
// }

// let client = [
//     new Client(123, 'Ania', 'Antonova', 'Ania@qwe.ua', 85564254546, [1,2,3,4,5,6,7]),
//     new Client(42, 'Misha', 'Faraonov', 'mis@qwe.ua', 8566654788,[1,2,3,4,5]),
//     new Client(351, 'Nastya', 'Afrimova', 'nast@qwe.ua', 856123188,[1,2,3,4,5,6]),
//     new Client(423, 'Yuri', 'Anatski', 'yyrr@qwe.ua', 8123654788,[1,2,3]),
//     new Client(52, 'Lili', 'Panova', 'li@qwe.ua', 85666124128,[1]),
//     new Client(65, 'Anton', 'Markov', 'ant@qwe.ua', 8564214188,[1,2,3,4,5,6,7,123,3]),
//     new Client(767, 'Maria', 'Franowa', 'mar@qwe.ua', 8531231228,[1,2]),
//     new Client(843, 'Nik', 'Bondarenko', 'Nik@qwe.ua', 8564214188,[1,2,3,4]),
//     new Client(92, 'Yaroslav', 'Panenko', 'yaro@qwe.ua', 856642141,[1,2,3,4,5,6,7,8]),
//     new Client(10, 'Eva', 'Radchenko', 'eeva@qwe.ua', 8563213788,[1,2,3,4,5,2,3,45,4])];
//
// console.log(client);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// client.sort((a, b) => {
//     return a.order.length - b.order.length;
//     });
// console.log(client)
