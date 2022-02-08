// Value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// reference for all objects
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);

// reference as parameters
function changeGreeting(obj) {
    obj.greeting = 'Hola'; //mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

// equal operator sets up new memory
c = { greeting: 'howdy' };
console.log(c);
console.log(d);