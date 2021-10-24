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
