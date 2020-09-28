// * any function all that is preceded by the new keyword acts as a constructor
// * the value of this refers to the newly created object
// ! the prototype of this new object is set to the prototype of the function object that was invoked as the constructor
// * if the function that was called has no explicit return statement, then it implicityly returns the value the value of this - the new object

function Person(name) {
	this.name = name;
}

Person.prototype.logName = function () {
	// * .prototype is for the function that defines the prototype
	console.log(this.name);
};

var sean = new Person("Sean");

sean.logName();

console.log("sean person __proto__", sean.__proto__); // * .__proto__ is for the instances of the prototype

function Car() {
	return "ford";
}

console.log("car?", new Car()); // a new object, not 'ford';
console.log("car without new?", Car()); // this works because i am explicityly returning a string, but this is not what we want

function NewPerson() {
	this.someValue = 2;

	return {
		name: "Charles",
	};
}

console.log("new person?", new NewPerson());
console.log("new person without new?", NewPerson()); // this works because i am explicitly return an object

console.log("person without new:", Person("KennY"));

function Pirate() {
	this.hasEyePatch = true; // this uses the global context this
}

var somePirate = Pirate();

// * Factories
// * in order to omit new keyword, the constructor function has to explicitly return a value

// * note: that new Robot() doesnt' have any affect on the prototype of the returned object, because it returns a newly created object, it doesn't return the new object (this)
function Robot() {
	var color = "gray";
	return {
		getColor: function () {
			return color;
		},
	};
}

console.log(new Robot().__proto__);
console.log(Robot());

console.log("new robot __proto__", new Robot().__proto__);
console.log("robot __proto__", Robot().__proto__);

// ! always use new!
// * when using factories, construct a new object inside of that factory
// * makes use of private vars

function CarFactory() {
	var car = {};
	car.owner = "nobody";

	var milesPerGallon = 2;

	car.setOwner = function (newOwner) {
		this.owner = newOwner;
	};

	car.getMPG = function () {
		return milesPerGallon;
	};

	return car; // return new object
}

/* * disadvantages
 * 1) uses more memory, newly created object
 * 2) to inherit, manually copy all methods from another object or put the object on the prototype of the new object
 * 3) shouldn't drop the prototype chain, not best practice, always use new!
 */
