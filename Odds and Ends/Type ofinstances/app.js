let a = 3;
console.log(typeof a);

let b = "Hello";
console.log(typeof b);

let c = {};
console.log(typeof c);

let d = [];
console.log(typeof d); // its an object?? should be array
console.log(Object.prototype.toString.call(d));

function Person(name) {
    this.name = name;
}

let e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefinded);
console.log(typeof null);

let z = function() { };
console.log(typeof z);