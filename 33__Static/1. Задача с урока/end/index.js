// const getValueWithDelay = (value, delay) => new Promise(resolve => {
//     setTimeout(() => {
//         console.log(value);
//         resolve(value);
//     }, delay);
// });
// const asyncNum1 = getValueWithDelay(56, 1000);
// const asyncNum2 = getValueWithDelay(undefined, 2000);
// const asyncNum3 = getValueWithDelay('10', 2000);

// // const getSum = numbers => 
// //     numbers
// //         .filter(value => !isNaN(value))
// //         .reduce((acc, num) => acc + Number(num),0);

// const asyncSum = (...asyncNumbers) => {
//     return Promise.allSettled(asyncNumbers)
//         .then(numbers => console.log(numbers));
// };

// asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3)
//     .then(result => console.log(result));



const servers = [
    'https://server.com/us',
    'https://server.com/eu',
    'https://server.com/au',
];

