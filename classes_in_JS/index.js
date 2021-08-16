// opredilenie_klassa

// class User {
//     constructor(name, age) {
//         this.name =name;
//         this.age = age;
//     }

//     sayHi() {
//         console.log(`Hi, I am ${this.name}`);
//     }

//     requestsNewPhoto() {
//         console.log('Some text');
//     }

//     setAge(value) {
//         if (value < 0) {
//             return false;
//         }
//         this.age = value;
//         if (value >=25) {
//             this.requestsNewPhoto();
//         }
//         return value;
//     }
// }

// const user1 = new User('Tom', 17);

// console.log(user1);

// class Vehicle {
//     constructor(name, hasWheels) {
//         this.hasWheels = hasWheels;
//         this.name = name;
//     }

//     move() {
//         console.log (`${this.name} is moving`);
//     }

//     stop() {
//         console.log (`${this.name} stopped`);
//     }
// };

// class Ship extends Vehicle {
//     constructor(name, speed) {
//         super(name, false);
//         this.speed = speed;
//     }

//     move() {
//         console.log(`${this.name} lifting anchor up`)
//         super.move();
//     }

//     stop() {
//         super.stop();
//         console.log(`${this.name} lifting anchor down`)
//     }
// };
// const ship1 = new Ship('Aurora', 18);


// ship1.stop();
// // console.log(ship1);



// /////////////////////////////////////////////
// class User {
//     constructor(name, age) {
//         this.name =name;
//         this.age = age;
//     }

//     static compare(user1, user2) {
//         return user1.age - user2.age;
//     }

//     sayHi() {
//         console.log(`Hi, I am ${this.name}`);
//     }

//     requestsNewPhoto() {
//         console.log(`Some text ${this.name}`);
//     }

//     setAge(value) {
//         if (value < 0) {
//             return false;
//         }
//         this.age = value;
//         if (value >=25) {
//             this.requestsNewPhoto();
//         }
//         return value;
//     }
// }

// const user1 = new User('Tom', 17);
// const user2 = new User('Tom', 34);

// console.log(User.compare(user1, user2));
// /////////////////////////////////////////////

// Wallet

class Wallet {
    constructor() {
        this._balance = 0;
    }

    getBalance() {
        return this._balance;
    }

    deposite(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        if (amount > this._balance){
            console.log('No enoug funds');
            return;
        }

        this._balance -= amount;
    }
}

const wallet1 = new Wallet();

console.log(wallet1.getBalance());
wallet1.deposite(45);
console.log(wallet1.getBalance());
wallet1.withdraw(34);
console.log(wallet1.getBalance());
wallet1.withdraw(134);
console.log(wallet1.getBalance());
