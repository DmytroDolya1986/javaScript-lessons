// getAdults

// const user = {
//     name: 'Tom',
//     key: 17,
// };

// Object.keys();
// Object.values();
// Object.entries();

// console.log(Object.entries(user));

// const users = {
//     'Tom': 17,
//     'John Doe': 19,
//     'Bob': 18,
// };

// const getAdults = usersObj =>{
//     const usersArray = Object.entries(usersObj);
//     const filteredUsersArray = usersArray
//         .filter(user => user[1] >= 18);

//     const usersNames = filteredUsersArray
//         .map(user => user[0]);

//     return usersNames;
// }

// console.log(getAdults(users));

// const users = {
//     'Tom': 17,
//     'John Doe': 19,
//     'Bob': 18,
// };

// const getAdults = usersObj => Object.entries(usersObj)
//         .filter(user => user[1] >= 18)
//         .map(user => user[0]);

// console.log(getAdults(users));


// const user = {
//     name: 'Todoom',
//     key: 17,
// };

// const concatProps = obj => Object.values(obj);

// console.log(concatProps(user));

// copyObj

// const users = {
//     'Tom': 17,
//     'Bob': 100,
// };

// const players = {
//     'John Doe': 19,
//     'Bob': 18,
// }

// // const res = Object.assign({}, users);

// // console.log(res === users);

// // res.Tom = 90;

// // console.log(users);

// const copyObj = obj => Object.assign({}, obj);

// console.log(copyObj(players));

// const user = {
//     name: 'Tom',
//     age: 19,
// }

// // const player = {...user};

// // console.log(player === user);

// const { name = 'default', ...restProps } = user;

// const player = {
//     game: 'football',
//     ...restProps,
// }

// console.log(player);

                     // methods


const user = {
    'Tom': 17,
    'Bob': 11,
    sayHi: function () {
        console.log('Hi');
    }
};
user.sayHi();

// [1, 2].forEach()

console.log('text'.toLocaleUpperCase());






