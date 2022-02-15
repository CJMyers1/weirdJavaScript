function makeGreeting(language) {

    return function(fisrtname, lastname) {

        if (language === 'en') {
            console.log('Hello ' + fisrtname + ' ' + lastname);
        }

        if (language === 'es') {
            console.log('Hola ' + fisrtname + ' ' + lastname);
        }
    }
}

let greetEnglish = makeGreeting('en');
let greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');