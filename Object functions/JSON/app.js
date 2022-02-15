let objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

let jsonValue = JSON.parse('{ "firstName": "Marry", "isAPRogerammer": true }');

console.log(jsonValue);