// * null, type is object...
// * undefined, more useful, type is undefined

// there's also a global undefined var

/*

    Accessing the (unmodified) global variable undefined.
    Accessing a declared but not yet initialized variable.
    Implicit returns of functions due to missing return statements.
    return statements that do not explicitly return anything.
    Lookups of non-existent properties.
    Function parameters that do not have any explicit value passed.
    Anything that has been set to the value of undefined.
    Any expression in the form of void(expression)

*/

console.log(undefined);
var undefined = 123;
console.log(undefined);

(function(something, foo, x) {		// this doesn't work
	let test = undefined;
	console.log(something, foo, x, test);
})('Hello World', 42);

(function(something, foo, x) {		// this sort of works, but you're just defining a local undefined var that is not defined...
	let undefined;
	console.log(something, foo, x, undefined);
})('Hello World', 42);

// * null, both is a literal and a type?
// useful for setting the end of the prototype chain, Foo.prototype = null;
// * can be replaced by undefined

// ! JavaScript is not a semicolon-less language. In fact, it needs the semicolons in order to understand the source code.
// ! Therefore, the JavaScript parser automatically inserts them whenever it encounters a parse error due to a missing semicolon.

// ! especially an issue if you have open brackets or open parenthesis, can change the logic of the code

/*
    (function(window, undefined) {
    function test(options) {
        log('testing!')

        (options.list || []).forEach(function(i) {  // ! where there is a leading parenthesis, the parser will not insert a semicolon

        })

        options.value.test(
            'long string to pass here',
            'and another long string to pass'
        )

        return
        {
            foo: function() {}
        }
    }
    window.test = test

})(window)

(function(window) {
    window.someLibrary = {}

})(window)

*/

/*

(function(window, undefined) {
    function test(options) {

        // Not inserted, lines got merged
        log('testing!')(options.list || []).forEach(function(i) { 

        }); // <- inserted

        options.value.test(
            'long string to pass here',
            'and another long string to pass'
        ); // <- inserted

        return; // <- inserted, breaks the return statement
        { // treated as a block

            // a label and a single expression statement
            foo: function() {} 
        }; // <- inserted
    }
    window.test = test; // <- inserted

// The lines got merged again
})(window)(function(window) {
    window.someLibrary = {}; // <- inserted

})(window); //<- inserted

*/

// ! It is highly recommended to never omit semicolons. It is also recommended that braces be kept on the same line as their corresponding statements and to never omit them for single-line if / else statements. 