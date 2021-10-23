/* const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. 
They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned. */

function printManyTimes(str) {
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");

// objects (including arrays and functions) assigned to a variable using const are still mutable.

const s = [5, 7, 2];
function editInPlace() {
  let i = s.pop();
  s.unshift(i);
}
console.log(s);

//  To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
