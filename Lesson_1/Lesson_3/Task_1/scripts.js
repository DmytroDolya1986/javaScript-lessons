// // Унарный плюс приводит операнд к числу
// +17;
// +'77';

// // Бинарный плюс складывает строки или прибавляет числа
// 10 + '5';
// 'some' + 'text';

// // Математические операции с undefined возвращают NaN
// undefined + 1;
// null + 8;
// undefined + '5';
// 7 - null;
// 5 - undefined;
// 'text' + null;
// let num = 17;

// // Постфиксная и префиксная форма записи
// ++num;
// num++;

// // математические операторы приводят операнды к числам
// const a = 17;
// const b = -a;
// '24' / 4;
// 18 * '3';
// '9' - '3';
// 'seventeen' / 3;
// 4 * 'four';
// 17 / 0;

// 10 + 'seven';
// undefined + 1;
// null + 8;
// undefined + '5';
// 'text' + null;


// /* сравнение чисел */

// const a = 17;
// const b = 5;
// a > b;
// a <= b;
// a == b;
// a != b;

// /* сравнение строк */

// 'a' < 'b';
// 'ab' > 'a';

// /* строгое сравнение */

// 17 === 1;
// 17 === 17;
// 17 === '17';
// 17 === true;
// '0' === '';
// true === false;
// true === true;
// null === undefined;
// false === 0

// /* нестрогое сравнение */

// 17 == '17';
// '0' == '';
// 0 == '';
// null == undefined;
// false == 0;

// /* осторожно c null и undefined */

// undefined == null;
// undefined == 0;
// null == 0;
// undefined < 0;
// undefined > 0;


// /* оператор || (OR) */
// false || true;
// false || true || false;
// false || false || false;

// /* оператор && (AND) */
// false && true;
// false && true && false;
// true && true && true;

// /* Логические операторы могут применятся к любым типам данных */

// /* || находит первое истинное значение */
// 'text' || false;
// true || 'text';
// undefined || null || 0 || '' || null;

// const customAmount = null; // не выводим
// const defaultAmount = 17; // не выводим
// const amount = customAmount || defaultAmount; // выводим значкние переменной amount в формате console.log('amount: ', amount);

// /* && находит первое ложное значение */
// 'text' && false;
// true && 'text';
// undefined && null && 0 && '' && null;

// /* оператор отрицания (OR) */
// !true;
// !false;
// !'text';
// !!'text';


// /* оператор || (OR) */
// console.log("false || true: ", false || true);
// console.log("false || true || false: ", false || true || false);
// console.log("false || false || false: ", false || false || false);

// /* оператор && (AND) */
// console.log("false && true: ", false && true);
// console.log("false && true && false: ", false && true && false);
// console.log("true && true && true: ", true && true && true);

// /* Логические операторы могут применятся к любым типам данных */

// /* || находит первое истинное значение */
// console.log("'text' || false: ", 'text' || false);
// console.log("true || 'text': ", true || 'text');
// console.log("undefined || null || 0 || '' || null: ", undefined || null || 0 || '' || null);

// const customAmount = null; // не выводим
// const defaultAmount = 17; // не выводим
// const amount = customAmount || defaultAmount; // выводим значкние переменной amount в формате console.log('amount: ', amount)

// console.log("amount: ", amount);

// /* && находит первое ложное значение */
// console.log("'text' && false: ", 'text' && false);
// console.log("true && 'text': ", true && 'text');
// console.log("undefined && null && 0 && '' && null: ", undefined && null && 0 && '' && null);

// /* оператор отрицания (OR) */
// console.log("!true: ", !true);
// console.log("!false: ", !false);
// console.log("!'text': ", !'text');
// console.log("!!'text': ", !!'text');

if (true) console.log('I\'m in');

if (false) {
    console.log('I\'m not in');
}

if ('text') {
    console.log('Yes');
}

if (null) {
    console.log('Yes');
} else {
    console.log('Else');
}

const age = 30;
if (age < 16) {
    console.log('Too young');
} else if (age >= 16 && age < 18) {
    console.log('Almost ready');
} else if (age >= 18 && age < 65) {
    console.log('Ready');
} else {
    console.log('Else');
}

// Оператор ? : ( const result = условие ? значение1 : значение2; )
const amount = 3;
const result = amount > 17 ? 'full' : 'empty';



// if (true) console.log('I\'m in');

// if (false) {
//     console.log('I\'m not in');
// }

// if ('text') {
//     console.log('Yes');
// }

// if (null) {
//     console.log('Yes');
// } else {
//     console.log('Else');
// }

// if (age < 16) {
//     console.log('Too young');
// } else if (age >= 16 && age < 18) {
//     console.log('Almost ready');
// } else if (age >= 18 && age < 65) {
//     console.log('Ready');
// } else {
//     console.log('Else');
// }

// // Тернаный оператор ? : ( const result = условие ? значение1 : значение2; )

// const result = amount > 17 ? 'full' : 'empty';
