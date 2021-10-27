/*You can obtain values from an object and set the value of a property within an object.
  Getter functions are meant to simply return (get) the value of an object's private variable 
  to the user without the user directly accessing the private variable.
  Setter functions are meant to modify (set) the value of an object's private variable based 
  on the value passed into the setter function.

  Note: It is convention to precede the name of a private variable with an underscore (_). 
  However, the practice itself does not make a variable private.

*/

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);

// Challenge

class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }

  set temperature(celsius) {
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
