// * Array Iteration and Properties

// !don't use for in for an Array....why would you?
// * because for in loop enumerates all the properties that are on the prototype chain, need to use hasOwnProperty to check

// * best to use classic for loop

var list = [1, 2, 3, 4, 5, 100000000];
// it's a good idea to cache the length
for (var i = 0, listLength = list.length, l = listLength; i < l; i++) {
	console.log(list[i]);
}

// * length can be set, but why?
// setting it will either truncate or add "undefined" empty placeholders

var arr = [1, 2, 3, 4, 5, 6];
arr.length = 3;
console.log(arr); // [1, 2, 3]

arr.length = 6;
arr.push(4);
console.log(arr); // [1, 2, 3, undefined, undefined, undefined, 4]

// * Array constructor

// use [] (literals) when creating new Arrays, not new Array, because it is ambiguous
console.log(new Array(1, 2, 3)); // [1,2,3]
console.log(new Array(3)); // ![ <3 empty items> ], only lenght is set, actual indexes of the array are not initialized
console.log(new Array("3")); //['3']

arr[100]; // undfined
console.log(1 in arr); // returns true if specified property is in the specified object or its prototype chain
console.log(100 in arr);

// setting length is only good repeating strings

console.log(new Array(11).join("Kenny ")); // not intuitive, it's always count + 1, join empty arrays, so in betweens
console.log("Kenny ".repeat(10));
