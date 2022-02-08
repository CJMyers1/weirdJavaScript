// function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('John');

// use function experession
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('John');

//use immediately invoked function expression (IIFE)
var greeting = function(name) {

    return 'Hello ' + name;

}('John');

console.log(greeting);

// IIFE
var firstname = 'John';

(function(name) {

    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);

}(firstname));