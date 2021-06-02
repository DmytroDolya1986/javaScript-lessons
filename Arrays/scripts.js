

// const numberOfElements = numbers.length;

// console.log(numberOfElements);

            // Description
// [11, 22, 33, 55, 66] => [length, first elem, last elem]
/*
const numbers = [11, 22, 33, 55, 66];

function getArrayBound(arr) {
    if(!Array.isArray(arr)){
        return null;
    }
    return [arr.length, arr[0], arr[arr.length - 1]];
}

const arrayBound = getArrayBound([]);

console.log(arrayBound);
*/
// perebor massiva

// let sumOfNumbers = 0;
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     sumOfNumbers += numbers[i];
// }
// console.log('Result: ' + sumOfNumbers);





// const numbers = [11, 22, 33, 55, 66];

// function sum(numbers) {
//     let sumOfNumbers = 0;
    
//     for(let i = 0; i < numbers.length; i++) {
//         // console.log(numbers[i]);
//         sumOfNumbers += numbers[i];
//     }
    
//     return sumOfNumbers;
// }

// const sumOfElements = sum(numbers)

// console.log('Result: ' + sumOfElements);


// const numbers = [11, 22, 33, 55, 66];

// const arr = numbers;

// arr[2] = 1000;

// console.log(numbers);


                            // methods 

// const people = ['Tom','Ann','Bob'];
// // people[people.length] = 'Jack';

// // people.push('Jack', 'Peter'); //add to and
// // people.unshift('Jack', 'Peter'); // add to start
// // people.pop('Jack', 'Peter');//add to and and rapleace all//
// const last = people.pop();
// const first = people.shift();//delete to start

// console.log(first);
// console.log(last);
// console.log(people);
// console.log(people.length);


                            //primer
  // from , to => [% 3 === 0]

//   function getSpecialNumbers(from , to){
//       let specialNumbers = [];

//       for(let i = from; i <= to; i++){
//           if(i % 3 === 0) {
//               specialNumbers.push(i);
//           }
//       }

//       return specialNumbers;
//   }

//   const specialNumbers = getSpecialNumbers(10, 30 );
//   console.log(specialNumbers)

////////////////////////  spread и деструктуризация

const numbers = [11, 22, 33, 55, 66];

const a = number[0];
const b = numbers[1];

console.log(a, b)





