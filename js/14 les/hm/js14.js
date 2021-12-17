// 1.завдання з callback
// let myDayStart = 8;
//
// function day_8am (startday8am, callback) {
//     setTimeout(() => {
//         if (startday8am) {
//             myDayStart++;
//             console.log('clear teeth');
//             callback();
//         } else {
//             console.log('Alarm');
//         }
//     },500);
// }
//
// function day_9am(startday9am) {
//     setTimeout(() => {
//         if (startday9am === 9) {
//             console.log('come back to home with dog');
//         } else {
//             console.log('go to walk with dog');
//         }
//     }, 1000);
//
// }
//
// function day_10am(startday10am) {
//     setTimeout(() => {
//         if (startday10am === 10) {
//             console.log('working');
//         } else {
//             console.log('stand up man and start working!!!');
//         }
//     }, 1500);
// }
//
// function day_11am(startday11am) {
//     setTimeout(() => {
//         if (startday11am === 11) {
//             console.log('eat banana');
//         } else {
//             console.log('you be hungry');
//         }
//     }, 1900);
// }
//
// function day_12am(startday12am) {
//     setTimeout(() => {
//         if (startday12am) {
//             console.log('break');
//         } else {
//             console.log('end working and go to lunch');
//         }
//     },2200);
// }
//
// function day_13pm(startday13pm) {
//     setTimeout(() => {
//         if (startday13pm) {
//             console.log('go with dog');
//         } else {
//             console.log('remember about your dog');
//         }
//     },2400);
// }
//
// function day_14pm(startdDay_14pm) {
//     setTimeout(() => {
//         if (startdDay_14pm) {
//             console.log('remember about of home work');
//         } else {
//             console.log('you need make a home work');
//         }
//     }, 2400);
// }
//
// function day_15pm(startDay_15pm) {
//     setTimeout(() => {
//         if (startDay_15pm) {
//             console.log('give food for dog');
//         } else {
//             console.log('your dog is hungry');
//         }
//     },2600);
// }


// day_8am(true, () => {
//     day_9am(myDayStart,() =>{})
//     day_10am(myDayStart,() =>{})
//     day_11am(myDayStart,() =>{})
//     day_12am(myDayStart,() =>{})
//     day_13pm(myDayStart,() =>{})
//     day_14pm(myDayStart,() =>{})
//     day_15pm(myDayStart,() =>{})
// });


// 2. завдання з promisom
// let myDayStart = 8;
//
// function day_8am(startday8am) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startday8am) {
//                 myDayStart++;
//                 console.log('clear teeth');
//                 resolve(myDayStart);
//             } else {
//                 console.log('Alarm');
//                 reject('Error');
//             }
//         }, 500);
//     });
//
// }
//
// function day_9am(startday9am) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startday9am) {
//                 console.log('come back to home with dog');
//                 resolve(myDayStart)
//             } else {
//                 console.log('go to walk with dog');
//                 reject('error');
//             }
//         }, 1000);
//     });
//
// }
//
// function day_10am(startday10am) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startday10am) {
//                 console.log('working');
//                 resolve(myDayStart)
//             } else {
//                 console.log('stand up man and start working!!!');
//                 reject('error')
//             }
//         }, 1500);
//     });
// }
//
// function day_11am(startday11am) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startday11am) {
//                 console.log('eat banana');
//                 resolve(myDayStart)
//             } else {
//                 console.log('you be hungry');
//                 reject('error');
//             }
//         }, 1900);
//     });
// }
//
// function day_12am(startday12am) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startday12am) {
//                 console.log('break');
//                 resolve(myDayStart)
//             } else {
//                 console.log('end working and go to lunch');
//                 reject('error')
//             }
//         }, 2200);
//     });
// }
//
// function day_13pm(startday13pm) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startday13pm) {
//                 console.log('go with dog');
//                 resolve(myDayStart)
//             } else {
//                 console.log('remember about your dog');
//                 reject('error')
//             }
//         }, 2400);
//     });
// }
//
// function day_14pm(startdDay_14pm) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startdDay_14pm) {
//                 console.log('remember about of home work');
//                 resolve(myDayStart);
//             } else {
//                 console.log('y ou need make a home work');
//                 reject('error');
//             }
//         }, 2400);
//     });
// }
//
// function day_15pm(startDay_15pm) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startDay_15pm) {
//                 console.log('give food for dog');
//                 resolve(myDayStart);
//             } else {
//                 console.log('your dog is hungry');
//                 reject('error');
//             }
//         }, 2600);
//     });
// }


// day_8am(true)
//     .then(myDay => {
//         return day_9am(myDay);
//     })
//     .then(result => {
//         console.log(result);
//     });
// day_8am(true)
//     .then(myDay => {
//         return day_10am(myDay);
//     })
//     .then(result => {
//         console.log(result);
//     });
// day_8am(true)
//     .then(myDay => {
//         return day_11am(myDay);
//     })
//     .then(result => {
//         console.log(result);
//     });
// day_8am(true)
//     .then(myDay => {
//         return day_12am(myDay);
//     })
//     .then(result => {
//         console.log(result);
//     });
// day_8am(true)
//     .then(myDay => {
//         return day_13pm(myDay);
//     })
//     .then(result => {
//         console.log(result);
//     });
// day_8am(true)
//     .then(myDay => {
//         return day_14pm(myDay);
//     })
//     .then(result => {
//         console.log(result);
//     });
// day_8am(true)
//     .then(myDay => {
//         return day_15pm(myDay);
//     })
//     .then(result => {
//         console.log(result);
//     });





// 3 завдання
// let myDayStart = 8;
//
// function day_8am(startday8am) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startday8am) {
//                 myDayStart++;
//                 console.log('clear teeth');
//                 resolve(myDayStart);
//             } else {
//                 console.log('Alarm');
//                 reject('Error');
//             }
//         }, 500);
//     });
//
// }
//
// function day_9am(startday9am) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startday9am) {
//                 console.log('come back to home with dog');
//                 resolve(myDayStart)
//             } else {
//                 console.log('go to walk with dog');
//                 reject('error');
//             }
//         }, 1000);
//     });
//
// }
//
//
// function day_10am(startday10am) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startday10am) {
//                 console.log('working');
//                 resolve(myDayStart)
//             } else {
//                 console.log('stand up man and start working!!!');
//                 reject('err')
//             }
//         }, 1500);
//     });
// }
//
// function day_11am(startday11am) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startday11am) {
//                 console.log('eat banana');
//                 resolve(myDayStart)
//             } else {
//                 console.log('you be hungry');
//                 reject('er');
//             }
//         }, 1900);
//     });
// }
//
// function day_12am(startday12am) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startday12am) {
//                 console.log('break');
//                 resolve(myDayStart)
//             } else {
//                 console.log('end working and go to lunch');
//                 reject('error')
//             }
//         }, 2200);
//     });
// }
//
// function day_13pm(startday13pm) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startday13pm) {
//                 console.log('go with dog');
//                 resolve(myDayStart)
//             } else {
//                 console.log('remember about your dog');
//                 reject('error')
//             }
//         }, 2400);
//     });
// }
//
// function day_14pm(startdDay_14pm) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startdDay_14pm) {
//                 console.log('remember about of home work');
//                 resolve(myDayStart);
//             } else {
//                 console.log('y ou need make a home work');
//                 reject('error');
//             }
//         }, 2400);
//     });
// }
//
// function day_15pm(startDay_15pm) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (startDay_15pm) {
//                 console.log('give food for dog');
//                 resolve(myDayStart);
//             } else {
//                 console.log('your dog is hungry');
//                 reject('error');
//             }
//         }, 2600);
//     });
// }
// async function wholeDay() {
//     const days_8am = await day_8am(true);
//     const day9am = await day_9am(days_8am);
//     const day10am = await day_10am(days_8am);
//     const day11am = await day_11am(days_8am);
//     const day12am = await day_12am(days_8am);
//     const day13pm = await day_13pm(days_8am);
//     const day14pm = await day_14pm(days_8am);
//     const day15pm = await day_15pm(days_8am);
//
//     console.log(days_8am);
//     console.log(day9am);
//     console.log(day10am);
//     console.log(day11am);
//     console.log(day12am);
//     console.log(day13pm);
//     console.log(day14pm);
//     console.log(day15pm);
//
// }
// wholeDay();


