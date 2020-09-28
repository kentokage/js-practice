// Object.create
// creating functions directly from object instances

const food = {
  init: function (type) {
    this.type = type;
  },

  eat: function () {
    console.log("you ate the " + this.type);
  },
};

// food.init("waffle");
// food.eat();

const waffle = Object.create(food);
const carrot = Object.create(food);

console.log("waffle protype", waffle.__proto__);
console.log("waffle protype", waffle.__proto__ === food);

function Food() {}

const hamburger = new Food();
console.log("hamburgers prototype", hamburger.__proto__);

// it creates a new empty object for waffle and create and assign food as a fallback
// it looks in it's prototype object, only if it lacks the prop
// if it can't find it on it's direct prototype, it will look at it's prototype's prototype
// until it reaches object
food.eat = function () {
  console.log("YOU TOTTALLY ATE THE " + this.type.toUpperCase());
};

// waffle.init("waffle");

food.type = "sdklfjdslfadsjf";
waffle.eat();
carrot.init("carrot");
carrot.eat();

// type checking

console.log(
  food.isPrototypeOf(waffle),
  food.isPrototypeOf(123456),
  food.isPrototypeOf(carrot)
);

// factory functions are flexible, just a normal function that creates an object
// factory functions are more robust
// using closures

// prototypes are faster than factory functions

// each object has a private property which holds a link to another object called it's prototype
// null has no prototype
// Object sits at the top

console.log(
  Object.getPrototypeOf(food),
  Object.getPrototypeOf(waffle),
  Object.getPrototypeOf(carrot),
  waffle.__proto__,
  carrot.__proto__
);

console.log(
  Object.prototype,
  food.prototype,
  waffle.prototype,
  carrot.prototype
);

function doSomething() {}
console.log(doSomething.prototype);

var doSomething = function () {};
console.log(doSomething.prototype);

// object.__proto__ is for instances
// Function.prototype.setNewProp for functions used to create new objects from prototypes

// prototype functions
// creating objects directly from functions using new PrototypeName
function User({ userName = "Anonymous", avatar = "test.png" } = {}) {
  this.userName = userName;
  this.avatar = avatar;
}

const kenny = new User({ userName: "Kenny", avatar: "kenny.png" });
console.log(kenny);

const test = new User();
console.log(test);
