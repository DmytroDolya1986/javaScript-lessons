// const n = 167;
// let sum = 0;
// let i = n;
// while (i > 0) {
//     sum += i;
//     i--;
// }
// console.log('Result: ' + sum);


// let n = 10;
// let sum = 0;

// while (n > 0) {
//     sum += n;
//     n -= 1;
// }

// console.log('Result: ' + sum);


// let m = 10;
// const n = 20;
// let result = 1;

//     do {
//         if (m % 2 === 1){
//             result *= m;
//         }
//         m++;
//     }
//     while (m <= n);

// console.log('Result: ' + result);


// let result  = 1;
// for (let m = 10; m <= 20; m++) {
//     if (m % 2 === 1){
//         result *= m; 
//     }
// }

// console.log('Result: ' + result); 

// for (let i = 1; i <= 5; i++) {
//     console.log('\n===> ' + i + ' <===\n\n');

//     for (let j = 1; j <= 10; j++) {
//         console.log(i + ' x ' + j + ' = ' + i * j);
//     }
// }


// let result =0;

//     while (true){
//         const userInput = prompt('Your number?');
//         if(!userInput){
//             break;
//         }

//         result += Number (userInput);
//     }

//     console.log('Result is: ' + result)
let result = 1;

for (let m = 10; m <= 20; m++){
    if (m % 2 === 0) continue;
    
    result *= m;
}

console.log('Result: ' + result);
