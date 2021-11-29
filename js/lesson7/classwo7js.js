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


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class car {
//     constructor(model, manufacturer, year_of_manufacture, maximum_speed, engine) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//     drives () {
//         console.log(`їдемо зі швидкістю ${whis.speed} на годину`);
//     }
//     info (informa) {
//         for (let i = 0; i < informa.length; i++) {
//             console.log(`${this.informa}`);
//         }
//     }
//     newMaxSpeed (newSpeed) {
//         this.maxspeed = this.maximum_speed + newSpeed;
//     }
//     oldYear (newYear) {
//         this.year_of_manufacture = newYear;
//     }
//     addDriver (driver) {
//         this.drives = driver;
//     }
// }
// let addCar = new car('audi', 'Germany', 2013, 260, 2);
// console.log(addCar);
// addCar.drives(100);
// addCar.info('audi');
// addCar.newMaxSpeed(10);
// addCar.oldYear(2014);
// addCar.addDriver('vlad');
// console.log(addCar);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку



function popelushka(popelushka_name, popelushka_age, size) {
    this.name = popelushka_name;
    this.age = popelushka_age;
    this.size = size;

}

let pop = [
    new popelushka('Ania', 18, 37),
    new popelushka('Vika', 19, 36),
    new popelushka('Maria', 17, 35),
    new popelushka('Lili', 21, 38),
    new popelushka('Marina', 24, 39),
    new popelushka('Olya', 23, 37),
    new popelushka('Oliwia', 19, 37),
    new popelushka('Karina', 19, 37.5),
    new popelushka('Katya', 22, 39),
    new popelushka('Alina', 24, 38),
];
console.log(pop)

function Princ(name, age, shoes) {
    this.name = name;
    this.age = age;
    this.shoes = shoes;
}

let pric = new Princ('Johnny', 26, 36);

let couple = (pop, prince) => {
    for (let she of pop) {
        if (she.size === prince.shoes) {
            return `${she.name}`
        }
    }
};
console.log(couple(pop,pric))

let prrinc = pop.find((she) => she.size === prince.shoes);
console.log(prrinc);
