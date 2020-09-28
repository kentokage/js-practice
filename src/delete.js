// * delete operator
// ! imposibble to delete global vars, funcxtions, and some other JS specific stuff which have a "DontDelete" attribute set

var a = 1;
console.log(delete a);
console.log(a);

function f() {}
console.log(delete f);
console.log(typeof f);

// * explicity set properties can be deleted normally
var obj = { x: 1 };
obj.y = 2;
console.log(delete obj.x);
console.log(delete obj.y);
console.log(obj.x);
console.log(obj.y);

var globalObject = this;
globalObject.a = 1; // *explicitly declaring it as a property of an object allows us to delete it, no DontDelete property set
console.log(a === globalObject.a);
console.log(delete globalObject.a);
console.log(globalObject.a);

// * functions' normal arguments, arguments bojects and built in properties ahve DontDelete set

(function (x) {
	console.log(delete arguments);

	console.log(delete x);
	console.log(x);

	function f() {}
	console.log(f.length);
	console.log(delete f.length); // should be false, but came as true
	console.log(typeof f.length); //number;
})(1);

// * delete is unpredictable for hosted objects??? ohh... window, document, location, history, setTimeout, querySelectorAll

// ! delete operator often has unexpected behavior and can only be safely used to delete explicitly set properties in normal objects
