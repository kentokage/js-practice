foo = 42;	// this works because global scope

console.log(foo);

var foo = 24;		// this works too... this is in the current scope
console.log(foo);

function test() {
    foo = 21;	// this assigns to global scope
}

test();

console.log(foo);

// * make sure to use var or let, otherwise because of closures, it thinks you are using the outer variable

// source for local vars are function parameters and variables declared


// global scope
var foo = 1;
var bar = 2;
var i = 2;

function test(i) {
    // local scope of the function test
    i = 5;

    var foo = 3;
    bar = 4;
}
test(10);

console.log(foo, bar, i);

// * javascript hoists declarations, both var and function declarations will be moved to top of their enclosing scope.

// Name Resolution Order
// * all scopes have the special name 'this', the current object (context)
// * function scopes have 'arguments'

/*
For example, when trying to access a variable named foo inside the scope of a function, JavaScript will look up the name in the following order:

    In case there is a var foo statement in the current scope, use that.
    If one of the function parameters is named foo, use that.
    If the function itself is called foo, use that.
    Go to the next outer scope, and start with #1 again.

*/

// Namespaces
// * use anonymouse wrappers to avoid global namespace clashes, this is suppose to provide modularization of programs
foob = 1000;
(function() {
	global.foob = function() {		// not sure how this avoids namespace conflicts, this is global

	}
})();	// evaluate the function inside the parenthesis, return it, then execute the function immediately

// A few other styles for directly invoking the 
// !function(){}()
// +function(){}()
// (function(){}());
// and so on...

console.log("last: ", foob);
