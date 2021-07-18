
// const parseArray = arr => arr
//     .map (el => Number.parseFloat(el));

// const elementList = [4, 5.88, '  5.77kl', null, NaN, Infinity, undefined];

// console.log(parseArray(elementList));


        // multiRound
// num => []

//     const multiRound = num =>[
//         Math.round(num * 100) / 100, 
//         Math.floor(num * 100) / 100, 
//         Math.ceil(num * 100) / 100, 
//         Math.trunc(num * 100) / 100,
//         num.toFixed(2),
//     ];
    
//     console.log(multiRound(Math.PI));

// ((0.1 * 34) + (0.2 * 14)).toFixed(2);



        // getMaxAbsoluteNumber
    // [12, -33, 21, -99,] => 99
    
        // const getMaxAbsoluteNumber = arr => {
        //     let max = -Infinity;

        //     arr.forEach(num => {
        //         if(Math.abs(num) > max){
        //             max = Math.abs(num);
        //         }
        //     });

        //     return max;
        // }
        
        const getMaxAbsoluteNumber = arr => {
            const absoluteValues = arr
                .map(num => Math.abs(num))

            return Math.max(...absoluteValues);

        }
        console.log(getMaxAbsoluteNumber([12, -33, 21, -97]));


