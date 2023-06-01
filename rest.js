// function add(m, n) {
//     return m + n;
// }

const numbers = [4, 5, 6, 7, 8];
// addWithRest(4, 5, 6, 7, 8)
addWithRest(...numbers);


function addWithRest(m, n, o, p, q) {
    return m + n + o + p + q;
}
// function addWithRest(m, n, ...rest) {
//     let sum = 0;
//     rest.forEach(function (num) {
//         sum = sum + num;

//     });
//     return sum;
// }

// const rest = [4, 5, 6, 7, 8, 9];

// let sum = 0;

// rest.forEach(function (num, i) {
//     sum = sum + num;

// });
// return sum;

