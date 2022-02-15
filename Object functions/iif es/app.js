// function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('John');

// use function experession
let greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('John');

//use immediately invoked function expression (IIFE)
let greeting = function(name) {

    return 'Hello ' + name;

}('John');

console.log(greeting);

// IIFE
let firstname = 'John';

(function(name) {

    let greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);

}(firstname));