// Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

const user = { name: "John Doe", age: 34 };

/* const name = user.name;
  const age = user.age; */
const { name, age } = user; //This code works the same with the code above but this is written shorter and cleaner.
console.log(name, age);

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today, tomorrow);

/* Destructuring allows you to assign a new variable name when extracting values. 
  You can do this by putting the new name after a colon when assigning the value. */

const { name: userName, age: userAge } = user;
console.log(userName, userAge);

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log(highToday, highTomorrow);

// Destructuring values from nested objects

const theUser = {
  johnDoe: {
    theAge: 34,
    theEmail: "johnDoe@freeCodeCamp.com",
  },
};

// Here's how to extract the values of object properties and assign them to variables with the same name:
const {
  johnDoe: { theAge, theEmail },
} = theUser;
console.log(theAge, theEmail);

// And here's how you can assign an object properties' values to variables with different names:
const {
  johnDoe: { theAge: theUserAge, theEmail: theUserEmail },
} = theUser;
console.log(theUserAge, theUserEmail);

const THE_LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};
const {
  today: { low: theLowToday, high: theHighToday },
} = THE_LOCAL_FORECAST;
console.log(theLowToday, theHighToday);

// Destructuring an array lets us pick or choose which elements you want to assign to variables.

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

const [c, d, , , e] = [1, 2, 3, 4, 5, 6];
console.log(c, d, e);

let f = 8,
  g = 6;
[g, f] = [f, g];
console.log(f, g);

/* In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
  The result is similar to Array.prototype.slice()*/

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list;
  console.log(a, b);
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
