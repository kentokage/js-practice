// !Equality, ==, this is weak typing
// the quality operator coerces types in order to compare them
/*
""           ==   "0"           // false, b/c comparing string value, no conversion
0            ==   ""            // true, conversion, both falsy
0            ==   "0"           // true, conversion
false        ==   "false"       // false, no conversion, boolean and string
false        ==   "0"           // true, why is there a conversion here??? maybe because it is a #
false        ==   undefined     // false, no conversion
false        ==   null          // false, no conversion
null         ==   undefined     // true, omggg, no idea here, maybe because some kind of conversion makes them both falsy
" \t\r\n"    ==   0             // true, what? no idea here, maybe because these are all spaces
*/

// what's crazy is null is an object
/*
typeof null 
"object"
typeof undefined
"undefined"
*/

// also this doesn't work
/*
null instanceof Object
false
null instanceof undefined
VM1898:1 Uncaught TypeError: Right-hand side of 'instanceof' is not an object
    at <anonymous>:1:6
*/

// "0" is falsy

// too many complicated conversion rules
// !also performance impact from conversions

// * Strict Equality ===

/*
""           ===   "0"           // false
0            ===   ""            // false
0            ===   "0"           // false
false        ===   "false"       // false
false        ===   "0"           // false
false        ===   undefined     // false
false        ===   null          // false
null         ===   undefined     // false
" \t\r\n"    ===   0             // false

*/

// * Comparing Objects
// * it compares identity (reference), not the deep comparison of object

// * It is highly recommended to only use the strict equality operator.
// * In cases where types need to be coerced, it should be done explicitly and not left to the language's complicated coercion rules.

// ** typeof Operator
// !typeof and instanceof are biggest design flaws???

/*
Value               Class      Type
-------------------------------------
"foo"               String     string
new String("foo")   String     object
1.2                 Number     number
new Number(1.2)     Number     object
true                Boolean    boolean
new Boolean(true)   Boolean    object
new Date()          Date       object
new Error()         Error      object
[1,2,3]             Array      object
new Array(1, 2, 3)  Array      object
new Function("")    Function   function
/abc/g              RegExp     object (function in Nitro/V8)
new RegExp("meow")  RegExp     object (function in Nitro/V8)
{}                  Object     object
new Object()        Object     object

null                            object
undefined                       undefined
NaN                             number          // btw, NaN === NaN is false lol
*/

// * whenever it is a primitive, it works
// ! whenever new is used, constructor it almost always treats it as an object

// * highly recommend using this method to check for class instead of type
// * Object.prototype.toString()
function is(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas == type;
}

console.log(is('String', 'test'));
console.log(is('String', new String('test')));

// only thing typeof it is useful for
console.log("typeof foo! = undefined: ", typeof foo !== undefined);

// * instanceof operator
// * only useful for comparing custom made objects
// ! bad for built in types

function Bar() {}
function Foo() {}
Bar.prototype = new Foo();

console.log("new Bar() instanceof Foo", new Bar() instanceof Foo);
console.log("new Bar() instanceof Bar", new Bar() instanceof Bar);

Bar.prototype = Foo; // not true, cause i dont' know why you would do this
console.log("new Bar() instanceof Foo", new Bar() instanceof Foo);      

console.log(new Bar())

// ! using with native types, badddd
console.log(new String('foo') instanceof String);    // true
console.log(new String('foo') instanceof Object);    // true

console.log('foo' instanceof String); // false;
console.log('foo' instanceof Object); // false;

// * type casting
// * JS is a 'weakly typed' language, so it will apply type coercion wherever possible

/*

// These are true
new Number(10) == 10; // Number object is converted
                      // to a number primitive via implicit call of
                      // Number.prototype.valueOf method

10 == '10';           // Strings gets converted to Number
10 == '+10 ';         // More string madness
10 == '010';          // And more 
isNaN(null) == false; // null converts to 0
                      // which of course is not NaN

// These are false
10 == 010;  // wtf
10 == '-10';

*/

// * use ===, strict equal operator

// * constructors of built in types, like Nubmer and String, behave differently when being used with new keyword and without it
/*
new Number(10) === 10;     // False, Object and Number
Number(10) === 10;         // True, Number and Number
new Number(10) + 0 === 10; // True, due to implicit conversion
*/

// * passing in literals or non object values will result in more type coercion
// * best thing to do is to cast it explicitly

// cast string
console.log('' + 10 === '10'); // true, adding '' converts to string

// cast number
console.log(+'10' === 10); // true, using + unary plus operator

// cast boolean, using double not operator
/*
!!'foo';   // true
!!'';      // false
!!'0';     // true
!!'1';     // true
!!'-1'     // true
!!{};      // true
!!true;    // true
!!null      // false
!!undefined // false
!!NaN       // false
*/

