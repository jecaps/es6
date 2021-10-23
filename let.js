/* Variables defined with let cannot be Redeclared.
Variables defined with let must be Declared before use.
Variables defined with let have Block Scope.
*/

let camper = "James";
// let camper = "David"; cannot overwrite variable once its declared
console.log(camper);

// When let is declared inside a blockm statement, or expression, its scope is limited to that block, statement, or expression:

function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

console.log(checkScope());
