// // // vehicle and ship

// // const vehicle = {
// //     move() {
// //         console.log(`${this.name} moving`);
// //     },
// //     stop() {
// //         console.log(`${this.name} stopped`);
// //     }
// // };

// // const ship = {
// //     name: 'Aurora',
// //     hasWheels: false,
// //     liftAnchorDown() {
// //         console.log('lifting anchor down');
// //     },
// //     liftAnchorDown() {
// //         console.log('lifting anchor up');
// //     },
// // };

// // Object.setPrototypeOf(ship, vehicle);

// // // console.log(ship);
// // ship.move();

// // // const user = {
// // //     firstName: 'John',
// // //     lastName: 'Doe',
// // //     get fullName() {
// // //         return `${this.firstName} ${this.lastName}`;
// // //     },
// // //     setFullName(value) {
// // //         const [firstName, lastName] = value.split(' ');
// // //         this.firstName = firstName;
// // //         this.lastName = lastName;
// // //     },
// // // };
// // // user.setFullName('Tom Hardy');

// // // console.log(user.lastName);
// // // console.log(user.firstName);
// // // console.log(user.fullName);

// const vehicle = {
//     move() {
//         console.log(`${this.name} moving`);
//     },
//     stop() {
//         console.log(`${this.name} stopped`);
//     }
// };

// const ship = {
//     name: 'Aurora',
//     hasWheels: false,
//     liftAnchorDown() {
//         console.log('lifting anchor down');
//     },
//     liftAnchorUp() {
//         console.log('lifting anchor up');
//     },
// };

// Object.setPrototypeOf(ship, vehicle);

// // for(let prop in ship) {
// //     if (ship.hasOwnProperty(prop)) {
// //        console.log(prop);
// //     }
// // }
// ${this.age}
// console.log(Object.keys(ship));

// /// ///////// / / / /  / / // ////////////////////////////
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// };

// User.prototype.sayHi = function() {
//     console.log(`Hi, I am ${this.name}`);
// }

// const user1 = new User('Tom', 17);

// user1.sayHi();

// const user2 = new User('Bob', 21);

// user2.sayHi();

// console.log(user2.sayHi === user1.sayHi);
// // ///////////////////////////////////////////////////////

