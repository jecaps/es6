/*The export statement is used when creating JavaScript modules to export live bindings to functions, objects, 
or primitive values from the module so they can be used by other programs with the import statement. 
The value of an imported binding is subject to change in the module that exports it. 
When a module updates the value of a binding that it exports, the update will be visible in its imported value.

Exported modules are in strict mode whether you declare them as such or not. The export statement cannot be used in embedded scripts.*/

/*
export const add = (x, y) => {
  return x + y;
};
*/

// The above is a common way to export a single function, but you can achieve the same thing like this:
const add = (x, y) => {
  return x + y;
};
export { add };

// Challenge

const uppercaseString = (string) => {
  return string.toUpperCase();
};
const lowercaseString = (string) => {
  return string.toLowerCase();
};
export { uppercaseString, lowercaseString };
