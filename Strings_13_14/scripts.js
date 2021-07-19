// const text = 'message';

// const myMassage = 'The text is ${text.toUpperCase()}, \nAnd something else';
// console.log(myMassage);

// const myMassage = `
//     The text is ${text.toUpperCase()},
//     And something else 
// `;


// const splitText = (text, len) => {
//     const strArr = [];
//     let startPosition = 0;

//     while(true) {
//         let chunk = text.substr(startPosition, len);
//         if (chunk.length === 0) {
//             break;
//         }
//         strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//         startPosition += len;
//     }

//     return strArr.join('\n')
// };



// console.log(splitText('abcdefg', 4));


                        // sort

// const contacts = [
//     {
//         name: 'Bob',
//         numberNumber: '111-11-11' 
//     },
//     {
//         name: 'Bill',
//         numberNumber: '222-22-22' 
//     },
//     {
//         name: 'Jack',
//         numberNumber: '333-33-33' 
//     },
//     {
//         name: 'Black',
//         numberNumber: '444-44-44' 
//     },
//     {
//         name: 'Murk',
//         numberNumber: '555-55-55' 
//     },
//     {
//         name: 'Adel',
//         numberNumber: '555-55-55' 
//     },
// ];

// const sortContacts = contacts => {
//     const result = contacts
//         .sort((a, b) => {
//             return b.name.localeCompare(a.name);
//         });
//     return result;
// };

// console.log(sortContacts(contacts));



                // calc

const calc = expression => {
    const [a, operator, b] = expression.split(' ');
    let result;


    switch(operator) {
        case '+':
            result = Number(a) + +b;
            break;
        case '-':
            result = a - b;
            break;
        }
    return `${expression} = ${result}`;
};

console.log(calc('6 - 9'));



