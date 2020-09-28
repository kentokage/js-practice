// * every function scope in javasdcript can access the special variable arguments
// not an array, it is an object, it is array like
// can't use push pop, slice
// iteration with a plan for loop (for of is fine)
// * need to convert it to an array first

function doFunction() {
	for (let item of arguments) {	// this works
		console.log(item);
	}
}

doFunction(1,2,3,'a','5',{name:"Kenny"});

// *convert to an array

function doSomething() {
	const slowArgs = Array.prototype.slice.call(arguments);	// this conversion is slow, not recommended
	doFunction.apply(null, arguments);		// this is recommended, passed it as arguments (an array or args);
}


doSomething(1,2,3,'a','5',{name:"Kenny"});

// not important, just setup
function Person(first, last) {
	this.first = first;
	this.last = last;
  }
  
  Person.prototype.fullname = function(joiner, options) {
	options = options || { order: "western" };
	var first = options.order === "western" ? this.first : this.last;
	var last =  options.order === "western" ? this.last  : this.first;
	return first + (joiner || " ") + last;
  };

  
Person.fullname = function() {
	return Function.call.apply(Person.prototype.fullname, arguments);		// Function.call is it's own function, but i'm applying arguments to it
	// same as Function.call(Person.prototype.fullname, ...arguments)
	// same as Person.prototype.fullname(..arguments);
}

var grace = new Person("grace", "hopper");

console.log(grace.fullname('test'));

// arguments has indices, even tho it's not iterable
// getters and setters are always created (arguments), but no performance impact
// except arguments.callee, which is highly discouraged
// not good to do this since it breaks encapsulation, it shouldn't know anything about it's caller
function foo() {
	console.log(arguments);
	arguments.callee;
	arguments.callee.caller;
}

foo();