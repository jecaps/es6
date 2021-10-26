/* A new feature of ES6 is the template literal. 
  This is a special type of string that makes creating complex strings easier.
  Template literals allow you to create multi-line strings and to use string interpolation features to create strings.*/

const person = {
  name: "Zodiac Hasbro",
  age: 56,
};
const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
console.log(greeting);

// Challenge
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  const failureItems = [];
  for (let i of arr) {
    failureItems.push(`<li class="text-warning">${i}</li>`);
  }
  return failureItems;
}
const failuresList = makeList(result.failure);
