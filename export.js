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

/* Use export default  if only one value is being exported from a file.
  It is also used to create a fallback value for a file or  module.
  Since this is used to declare a fallback value for a module or file, 
  you can only have one value be a default export in each module of file.
  Additionally, oýou cannot use export default with var, let, or const.*/

  export default function add(x, y) { // a named function
    return x + y;
  }
  
  export default function(x, y) { // an anonymous function
    return x + y;
  }

  // Challenge

  export default function subtract(x, y) {
    return x - y;
  }
  
  
  
  
