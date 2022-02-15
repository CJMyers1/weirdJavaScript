(function(global, $) {

    // 'new' an object set up
    let Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // hidden for IIFE accessible
    let supportedLangs = ['en', 'es'];

    // Informal Greeting
    let greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    // Fromal Greeting
    let formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // logger messages
    let logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    // prototype to hold methods and save memory space
    Greetr.prototype = {

        // 'this' refers to calling an object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            // checks for valid language
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        // retrieves messages from object baced on formal or informal properties
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        //chainable methods return their own containing object
        greet: function(formal) {
            let msg;
            // false if undefined or null
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            //'this' refers to calling object at execution time to make method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function(lang) {
            //sets language
            this.language = lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            // determins the message
            let msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            // injects the message in chosen place in DOM
            $(selector).html(msg);

            return this;
        }

    };

    // Actual object is created here
    Greetr.init = function(firstName, lastName, language) {

        let self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    // trick from jQuery to not use 'new'
    Greetr.init.prototype = Greetr.prototype;

    // attaches greetr to global object and provide a shorthand.
    global.Greetr = global.G$ = Greetr;


}(window, jQuery));