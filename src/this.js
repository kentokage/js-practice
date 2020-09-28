// * global scope
this.data = "global data"
console.log(this.data);	// global scope


// * calling a function
function foo () {
	console.log("foo");	
}
foo();	// global object again




// just a constructor
function Foo() {
	this.name = "Tina";
	this.foo = function (...args) { console.log("test foo", this.name, args) }
	// ! common pitfall
	// this.method = function() {
	// 	var self = this;	// need this to access this, using closures
	// 	function test() {		// somehow this is function declaration's this is the global scope this, but this function is only available within this function block
	// 		// this is set to the global object here
	// 		console.log("inside test");
	// 		console.log(this.name);		// this is the global variable here
	// 		console.log(self.name);		
	// 	}
	// 	test();

		// you can bind the function  to achieve this
		// var test = function() {		
		// 	console.log("inside test");
		// 	console.log(this.name);	
		// 	console.log(self.name);		
		// }.bind(this);
}

Foo.prototype.method = function() {
	var self = this;	// need this to access this, using closures
	function test() {		// somehow this is function declaration's this is the global scope this, but this function is only available within this function block
		// this is set to the global object here
		console.log("inside test");
		console.log(this.name);		// this is the global variable here
		console.log(self.name);		
	}
	test();
}

// * calling constructor
// * function call that is preceded by the new keyword acts as a constructor
// * inside the function, this will refer to the newly created Object
const test = new Foo();

// * calling a mehtod
test.foo();	// this will bind to test
const kenny = { name: 'Kenny' }
test.foo.bind(kenny)(); // bind to another object for this context

// * call or apply are methods of Function.prototype, the value of this inside the called function gets explicityl set to the first argument
test.foo.apply(kenny, [1, 2, 3]);	// binds to Kenny, args are passed in as an array
test.foo.call(kenny, 1, 2, 3);		// binds to Kenny, args are passed in as individual arguments


test.method.bind(kenny)();

// * assigning methods
var assignedMethod = test.foo;
assignedMethod();	// this is no longer test

// this is great for prototypal inheritance, because you are only assigning the method definition, not taking the this of the object

// function Foo() {}
// Foo.prototype.method = function() {};

function Bar() {}
// Bar.prototype = Foo.prototype;	// inherits everything
Bar.prototype.method = Foo.prototype.method;	// works too

new Bar().method.bind(kenny)();
