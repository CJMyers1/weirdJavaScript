var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // its an object?? should be array
console.log(Object.prototype.toString.call(d));

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefinded);
console.log(typeof null);

var z = function() { };
console.log(typeof z);