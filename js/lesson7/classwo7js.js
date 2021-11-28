// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function car(model, manufacturer, year_of_manufacture, maximum_speed, engine) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year_of_manufacture = year_of_manufacture;
//     this.maximum_speed = maximum_speed;
//     this.engine = engine;
//     this.drives = function (speed) {
//         console.log(`їдемо зі швидкістю ${speed} на годину`)
//     };
//     this.info = function (informa) {
//         for (let i = 0; i < informa.length; i++) {
//             console.log(`${informa}`);
//         }
//     };
//     this.newMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maximum_speed + newSpeed;
//     };
//     this.oldYear = function (newYear) {
//         this.year_of_manufacture = newYear;
//     };
//     this.addDriver = function (driver) {
//         this.drives = driver;
//     };
// }
//
// let addCar = new car('audi', 'Germany', 2013, 260, 2);
// console.log(addCar);
// addCar.drives(100);
// addCar.info('audi');
// addCar.newMaxSpeed(10);
// addCar.oldYear(2014);
// addCar.addDriver('vlad');
// console.log(addCar)


