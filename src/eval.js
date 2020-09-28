// * eval function will execute a string of JS code in the local scope
var number = 1;
function test() {
	var number = 2;
	eval("number = 3");
	console.log(number);
	var copyOfEval = eval;
	copyOfEval("number = 4");
	console.log(number);
	return number;
}

test();
console.log(number);

// copy of eval will not work, has to be the exact name
// ! eval should be avoided, it's useless, and also potentially bad for XSS

// * setTimeout and setInterval can take a string for first argument and always execute in the global scope
// var timeoutID = scope.setTimeout(code[, delay]); !BAD

// ! eval also is a security problem, because it executes any code given to it. It should never be used with strings of unknown or untrusted origins.
