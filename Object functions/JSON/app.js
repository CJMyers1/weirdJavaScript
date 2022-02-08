var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstName": "Marry", "isAPRogerammer": true }');

console.log(jsonValue);