// * setTimeout

function foo() {
  console.log("foo");
}
var id = setTimeout(foo, 1000);
console.log(id);

// *Javascript is single threaded
// other code gets executed and might block the thread, not exact in terms of delay

// * the function that is passed as the first parameter will be called by the global object, the this is set to the context of the global object
// * need to bind the context

function Foo() {
  this.value = 42;
  this.method = function () {
    console.log(this.value);
  }; // need to bind here

  setTimeout(this.method, 500);
}

new Foo();

// * setInterval - will execute the function every X milliseconds, but its use is discouraged
// ! other code may block the timeout call of setInterval, causing execution stack backing up

// setInterval(foo, 2000);
// * it's better to use setTimeout in the function itself
function test() {
  // do something async
  console.log("test");
  if (true) {
    setTimeout(test, 2000);
  }
}

// * also, good to know is that after the delay argument, you can pass multiple arguments for the fn
// var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);

function testArgs(a, b, c) {
  console.log(a, b, c, this.name);
}

setTimeout(
  testArgs.bind({ name: "Kenny" }),
  1000,
  "Args: ",
  "Hi ",
  "my name is "
);

// test();

// * clear all time outs
// only for browsers
for (var i = 1; i < 1000; i++) {
  clearTimeout(i);
}

// * clearing all timeouts, best to have the biggestTimeout
var biggestTimeoutId = setTimeout(function () {}, 1000);

// only for browsers
// for (var i = 1; i <= biggestTimeoutId; i++) {
//   clearTimeout(i);
// }

// * better to just keep track of all IDs

// ! hidden use of eval
// ! setTimeout and setInterval can take a string as their first param, but should never be used!

// function footest() {
//   // will get called
//   console.log("outer footest");
// }

// function bartest() {
//   function footest() {
//     // never gets called
//     console.log("inner footest");
//   }
//   setTimeout("footest()", 1000); // not good since it will use the global context, doesn't even work in nodejs
// }
// bartest();

// function foobar(a, b, c) {
//   console.log(a, b, c);
// }

// // NEVER use this
// setTimeout("foobar(1, 2, 3)", 1000); // a string to pass arguments? not recommended, doesn't even work

// // Instead use an anonymous function
// setTimeout(function () {
//   foobar(1, 2, 3);
// }, 1000);

// ! string should never be used as a parameter of setTimeout or setInterval

// ! Furthermore, the use of setInterval should be avoided because its scheduler is not blocked by executing JavaScript.
