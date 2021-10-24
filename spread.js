// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus);

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
arr2 = [...arr1];
console.log(arr2);
