let person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {

        let fullname = this.firstname + ' ' + this.lastname;
        return fullname;

    }
}

let logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-------------');

}

let logPersonName = logName.bind(person);
logPersonName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------');

}).apply(person, ['en', 'es,']);

//function borrowing
let person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName(person2));

//function currying
function multiply(a, b) {
    return a*b;
}
let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

let multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4));
