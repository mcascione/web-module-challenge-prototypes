// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
this.name = name; 
this.age = age;
this.stomach = [];
}

Person.prototype.eat = function (food){
  if (this.stomach.length < 10){
    this.stomach.push(food);
  }
};

Person.prototype.poop = function (){
  this.stomach = [];
};

Person.prototype.toString = function (){
  return `${this.name},${this.age}`;
};

// const miranda = new Person('Miranda', 32);
// console.log(miranda.toString());
// miranda.eat('pasta');
// console.log(miranda.stomach);
// miranda.poop();
// console.log(miranda.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
this.model = model;
this.milesPerGallon = milesPerGallon;
this.tank = 0;
this.odometer = 0;
}

Car.prototype.fill = function (gallons){
  this.tank += gallons;
};

Car.prototype.drive = function (distance){
  const driveableMiles = this.tank * this.milesPerGallon;
  if (distance <= driveableMiles){
    this.odometer += distance;
    this.tank -= (distance/this.milesPerGallon);
  } else {
    this.odometer += driveableMiles;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`
  }
};

// const car1 = new Car('honda', 20);
// console.log(car1);
// console.log(car1.fill(10));
// console.log(car1);
// console.log(car1.drive(201));
// console.log(car1);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function (){
  return `Play with ${this.favoriteToy}`;
};


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window or Global Binding - .this would bind to the global context in node or window in console
  2. Implicit Binding - invoking a method using dot syntax binds the object written out before the "." to .this and makes that object the context for .this in the method
  3. Explicit Binding - using a function (.call, .appy or .bind) to directly lay out the context for .this and pass in arguments
  4. New Binding - invoking a constructor function using the 'new' keyword binds .this to the newly created object returned from the constructor function
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
