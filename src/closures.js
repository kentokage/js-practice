// * scopes always keep access to the outer scope in which they were defined
// * all functions by default act as closures because of function scope

function Counter(start) {
	var count = start;
	return {
		increment: function() {
			count++;
		},

		get: function() {
			return count;;
		}
	}
}

var foo = Counter(4);	// should have been undefined??
console.log(foo);
foo.increment();
console.log(foo.get());

foo.hack = function() {
	count = 1337;		// will not override the internal count, since this is outside of the closure; this is overriding the global variable count
}

console.log(foo.get());

// closures inside loops
for (var i = 0; i < 10; i++) {	// this will print '10' 10 times because it is function scoped
	setTimeout(function() {
		console.log(i);
	}, 1000);
}

for (let i = 0; i < 10; i++) {	// this will print 1... 10 because it is block scoped, it copies the value because it does not have access to the i value
	setTimeout(function() {
		console.log(i);
	}, 1000);
}

// or use anonymous wrapper
for (var i = 0; i < 10; i++) {
	(function(e) {
		setTimeout(function() {
			console.log(e);
		}, 1000);
	})(i);		// receives a copy of the value, not a reference
}

for (var i = 0; i < 10; i++) {
	setTimeout(function(e) {
		console.log('pass 3rd arg', e);
	}, 1000, i);
}

for (var i = 0; i < 10; i++) {
	setTimeout(function(e) {
		console.log('bind', e);
	}.bind(null, i), 1000)
}