// const getSpecialNumbers = numbers =>
//     numbers.filter(num => num % 3 === 0);

// const arr = [1, 2, 3, 4, 5, 6, 36, 21]

// console.log(getSpecialNumbers(arr));
// console.log(arr);

/*unsorted array => sorted array*/

// const sortArray = numbers =>

//     numbers.slice().sort((a, b) => a - b);

// const arr = [2, 4, 30, 1, 5, 21, 18, 36, 33]

// console.log(sortArray(arr));

// console.log(arr);

// [1, 2, 3, 4].reduce(function(acc, num) {
//     return acc + num;
// }, 0);

// 1 --0, + 1 = 1
// 2 --1, + 2 = 3
// 3 --3, + 3 = 6
// 4 --6, + 4 = 10
// console.log(flatArray)


// flat array

// [1, [2, 3, 4], 5,[6]]

// const flatArray = arr => arr
//     .reduce((acc, elem) => {
//         return acc.concat(elem);
//         }, []);

// const initArray = [1, [2, 3, 4], 5,[6]];

// console.log(flatArray(initArray));

                // FLATTTT
// const flatArray = arr => arr
//    .flat();

// const initArray = [1, [2, 3, 4], 5,[86]];

// console.log(flatArray(initArray));



                //    NAMES
// ['Ann', 'Tom', 'Bob', 'Kate'];  ['Tom', 'Bob'] => ['Good job, Ann', 'Good job, Kate'];

const getMassagesForPastStudents  = (allStudents, failedStudents) =>
    allStudents
        .filter(name => !failedStudents.includes(name))
        .map(name => 'God job, ' + name);

const allStudents = ['Ann', 'Tom', 'Bob', 'Kate'];
const failedStudents =  ['Tom', 'Bob'];

console.log(getMassagesForPastStudents(allStudents, failedStudents));