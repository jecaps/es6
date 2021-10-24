/* Arrow functions allow us to write shorter function syntax.
  Arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
 */

/*const myFunc = function () {
  const myVar = "value";
  return myVar;
}; //This function...*/

/*const myFunc = () => {
  const myVar = "value";
  return myVar;
}; //... can also be written like this...*/

const myFunc = () => "value"; //If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.

// Just like a regular function,  you can pass argument into an arrow function.

const doubler = (item) => item * 2;
doubler(4); // If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2); //It is possible to pass more than one argument into an arrow function.

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// In order to help us create more flexible functions, ES6 introduces default parameters for functions.

const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
console.log(greeting());

const increment = (number, value = 1) => number + value;

/* In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. 
  With the rest parameter, you can create functions that take a variable number of arguments. 
  These arguments are stored in an array that can be accessed later from inside the function. */

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum(3, 6, 7));
