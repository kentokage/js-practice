// ! null and undfined are objects, but don't act like objects!

console.log(false.toString());
console.log(false);

console.log([1,2,3].toString());

// * functions are objects
function Foo(){};
Foo.bar = 1;
console.log(Foo.bar);

// * common misconception: Number literals cannot be used as objects, below throws error
// ! 2.toString(); 

console.log(2..toString());	// second dot is correclty recognized
2 .toString();	// space left of dot
(2).toString();	// 2 is evaluated first

// * objects in JS can also be hashmaps
// * {} plain object, inherits from Object.prototype, does not have own properties defined
// * hasOwnProperty is the only thing in JavaScript which deals with properties and does not traverse the prototype chain.
var obj = {};
console.log(obj);

obj = {name: 'kitten'}
var get = "name";
console.log(obj.name, obj['name'], obj[get]);

delete obj.name;
console.log(obj.name, obj['name'], obj[get]);

// for older JS engines: keywords for property keys, don't use case or delete as is, wrap with single quotes, notated as string
/*
 var test = {
    'case': 'I am a keyword, so I must be notated as a string',
    delete: 'I am a keyword, so me too' // raises SyntaxError
};
 */

 var test = {
	 'case': 'notated as string',
	 delete: 'delete is a keyword'
 }

 console.log(Object.keys(test));