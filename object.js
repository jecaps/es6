/* ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. 
  You can simply write x once, and it will be converted to x: x (or something equivalent) under the hood.*/

/*
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
*/

const getMousePosition = (x, y) => ({ x, y }); // Here is the same function from above rewritten to use this new syntax.

// Challenge

const createPerson = (name, age, gender) => {
  return { name, age, gender };
};
console.log("Jerika Kanz", 27, "female");
