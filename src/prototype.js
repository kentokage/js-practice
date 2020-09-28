// * prototype: inheritance through objects
// * The first major difference is that inheritance in JavaScript uses prototype chains.

Array.prototype.map = () => { console.log('map')}
[1,2,3].map();

// functional definition of inheritance, these are constructors?
function Foo() {
	this.value = 42;
}

// setting the prototype to inherit, inheriting an object
Foo.prototype = {
	method: function() {}
}

function Bar() {}

// set bar's prototype to a new instance of Foo, just setting an object into the prototype
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World'; // some property for Bar
Bar.prototype.constructor = Bar;

var test = new Bar();
console.log("bar 42", test.value);
console.log(test instanceof Foo);	// instance of Bar and Foo, instance of human => mammal

// * property lookup, it will traverse upwards until it finds the property with the requested name
// if it reaches Object.prototype and still not found, returns undefined

// * prototype property, Foo.prototype
// you can assign instance of objects to it, but primitivies will be ignored
// Foo.prototype = 1 // no effect

// * performance, bad if you have many inheritiance (length is long) in the prototype chain, especially looking up to the Objet.prototype when it is not found
// especially bad if you have to iterate over the properties of an object for every property 

// * monkey patching: override built-in types with additional non standard functionality
// Array.prototype.forEach = () => {}	// some new function
// doesn't work for console // maybe cause it's a browser object

// console.prototype.log = () => 1;	// doesn't work
Array.prototype.forEach = () => 1;
console.log([].forEach());

// * hasOwnProperty: properties are defined on itself, not from prototype chain
// this does not traverse the prototype chain

Object.prototype.bar = 1;
var foo = {goo: "i'm goo"};

console.log(foo.bar);
console.log('bar' in foo);		// didn't know you can do this!
// for (let prop in foo) {}		// similar to this

console.log(foo.hasOwnProperty('bar'));	// false;
console.log(foo.hasOwnProperty('goo'));	// true;

// * hasOwnProperty property can be overriden, so be careful, it's not protected
// you can use another objects or Object.prototype to call it

({}).hasOwnProperty.call(foo, 'goo')	// ({}) parenthesis is needed to evaluate it...
console.log({}.hasOwnProperty.call(foo, 'goo')); // true;
console.log(Object.prototype.hasOwnProperty.call(foo, 'goo')); // true;

// * for in loop will traverse the prototype chain when iterating over the properties of an object
// use hasOwnProperty to filter
// Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer (properties defined via Object. defineProperty and such default enumerable to false).
// if not enumerable, for in loop will not loop over it
// It is recommended to always use hasOwnProperty in ECMAScript 3 or lower, as well as in library code.

for (let prop in foo) {
	if (foo.hasOwnProperty(prop)) {
		console.log(foo[prop]);
	}
}