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

function defer(func, ms) {
    return function() {
        setTimeout(() => func.apply(this, arguments), ms)
    }
}

const user = {
    name: 'Tom',
    sayHi() {
        console.log(`Hi, I'm ${this.name}!`)
    }
}

const deferredHi = defer(user.sayHi, 1000);

deferredHi.call({ name: 'Bob' });