'use strict';
// const user = {
//     name: 'Doe',
//     sayHi(age, message) {
//         console.log(`${message}. I'm ${this.name}. I'm ${age} years old`);
//     }
// };

// const func = user.sayHi;

// const anotherUther = {
//     name: 'Tom',
// }

// func.apply({ name: 'Tom' }, [17, 'Hello']);



// // // // // //

// const callbackPrompt = {
//     message: 'Tell me your number',
//     showPrompt() {
//         const phoneNumber = prompt(this.message);
//         console.log(phoneNumber);
//     },
//     showDeferredPrompt(ms) {
//         console.log(this);
//         setTimeout(this.showPrompt.bind(this), ms);
//     }
// };

// callbackPrompt.showDeferredPrompt(2000);

// // // defer(func, ms) => Function

// function defer(func, ms) {
//     return function() {
//         setTimeout(() => func.apply(this, arguments), ms)
//     }
// }

// const user = {
//     name: 'Tom',
//     sayHi() {
//         console.log(`Hi, I'm ${this.name}!`)
//     }
// }

// const deferredHi = defer(user.sayHi, 1000);

// deferredHi.call({ name: 'Bob' });

// //// / / / / / // // / / strict mode// //  / / // / // / / / // // / /  / /// /  / / /  // / / / / / / / / 

// const user = {
//     name: 'Tom',
//     sayHi() {
//         console.log(this);
//     },
// };

// setTimeout(() => user.sayHi(), 100);

// const event = {
//     guests: [
//         { name: 'Tom', email: 'a@gmail.com', age: 17 },
//         { name: 'Bob', email: 'b@gmail.com', age: 18 }
//     ],
//     message: 'Welcome to the party',
//     getInvintations() {
//         return this.guests
//             .filter(({ age }) => age >= 18)
//             .map(({ name, email }) => ({
//                 text: `Hi ${name}. ${this.message}`,
//                 email
//             }));
//     }
// }
// console.log(event.getInvintations());

// const event = {
//     guests: [
//         { name: 'Tom', email: 'a@gmail.com', age: 17 },
//         { name: 'Bob', email: 'b@gmail.com', age: 18 }
//     ],
//     message: 'Welcome to the party',
//     getInvintations() {
//         return this.guests
//             .filter(({ age }) => age >= 18)
//             .map(function ({ name, email }) {
//                 console.log(this);
//                 return {
//                     text: `Hi ${name}. ${this.message}`,
//                     email
//                 };
//             }, event);
//     }
// }
// console.log(event.getInvintations());

// //// / / / / / / //  method deposit

// const wallet = {
//     transactions: [1, 2, 89, 337, 3],
//     getMax(){
//         return Math.max(...this.transactions)
//     },
//     getMin(){
//         return Math.min(...this.transactions)
//     }
// };
// console.log(wallet.getMax());
// console.log(wallet.getMin());


// ////// // pseudo  arrays

function argsSum() {
    return [].reduce.call(arguments, (acc, elem) => {
        return acc + elem;
    }, 0);
}

console.log(argsSum(1, 2, 3, 4));