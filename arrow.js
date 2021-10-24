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
