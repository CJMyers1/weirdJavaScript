function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This funciton is invoked.')

}

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastname;
}

let john = new Person('John', 'Doe');
console.log(john);

let jane = new Person('Jane', 'Does');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());