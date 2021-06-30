// transformToObject

// const transformToObject = arr =>{
//     let obj = {};

//     arr.forEach(el => {
//         obj[el] =el;
//     });

//     return obj;
// };

// const arr = [1, 'text'];
// const result = transformToObject(arr);

// console .log(result);

// const user = {
//     name: 'Tom'
// };

// user.name ='Bob';

// console.log(user.name);

// [1 , "text"] => { '1': 1, text 'text' }



// const prop = "my"

// const obj = { 
//     interest: "football",
//     age: 17,
//     name: 'Tom',
//     'my name': 'Bob',
//     [prop + 'name']: 'value',
// };

// // console.log(obj.age); //17

// // obj.age = 18; 

// // console.log(obj.age); //18


// console.log(obj['my name']);
// console.log(obj[prop + 'name']);

// // obj['my name'] = "rob"
// // console.log(obj['my name']);


// const a = {};
// const b = {};

// console.log(a === b);

// const name = 'Tom';
// const user = {
//     name,
// }



// const arr = ['a', 'b'];


// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// const arr = ['a', 'b'];

// for (let value of arr){
//     console.log(value);
// }

// const user = {
//      name: 'Tom',
//      key: 17,
// };

// for (let key in user){
//     console.log(user[key]); 
// } 

const user = {
    name: 'Tom',
    key: 17,
};

const concatProps = obj => {
    const arr = [];

    for (let key in obj){
        arr.push(obj[key]);
        // arr = arr.concat(obj[key]);
    }

    return arr;
};

console.log(concatProps(user));

// user => ['Tom', 17]