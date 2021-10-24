/* Arrow functions allow us to write shorter function syntax.
  Arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
 */

const myFunc = function () {
  const myVar = "value";
  return myVar;
}; //This function...

const myFunc = () => {
  const myVar = "value";
  return myVar;
}; //... can also be written like this...

const myFunc = () => "value"; //If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.
