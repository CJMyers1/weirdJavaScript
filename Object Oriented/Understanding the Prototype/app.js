let person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

let john = {
    firstname: 'John',
    lastname: 'Doe'
}

//Demo only do not do
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);

let jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());

person.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());
console.log(jane.getFormalFullName());