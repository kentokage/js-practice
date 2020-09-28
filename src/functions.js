// * functions are first class objects: means they can be passed around like any value

// * function declaration
foo();
function foo() { console.log("foo") }	// * gets hoisted before the execution of the program starts, making it available everywhere in the scope it was defined

// * function expression

var fooExp = function() { console.log("foo exp")}
fooExp();

// * named function expression
var fooNamedFuncExp = function bar() {
	console.log("bar")
}

// bar(); // referenceError
// bar is not available in the outers cope
// * due to name resolution, the name of the function is always made available in the local scope of the function itself FUNCTION SCOPE!
fooNamedFuncExp();