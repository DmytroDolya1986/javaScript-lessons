// const compose = (...funcs) => arg =>
//  funcs.reduce((acc, func) => func(acc), arg);

 
const add3 = value => value + 3;
const mult2 = value => value * 2;
const div4 = value => value / 4;

const compose = (...funcs) => arg => {
  return funcs.reduce((acc, func) => func(acc), arg);
};

const doEverithing = compose(
    add3,
    mult2,
    div4,
);

console.log(doEverithing(3));
