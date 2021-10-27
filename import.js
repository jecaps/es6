/* import allows you to choose which parts of a file or module to load.
  The static import statement is used to import read only live bindings which are exported by another module.
  Imported modules are in strict mode whether you declare them as such or not.*/

import { add, subtract } from "./math_functions.js";

// Challenge

import { uppercaseString, lowercaseString } from "./string_functions.js";

uppercaseString("hello");
lowercaseString("WORLD!");
