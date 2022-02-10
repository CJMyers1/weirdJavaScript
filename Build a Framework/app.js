// gets new object
var g = G$('John', 'Doe');

// uses our chainable methods
g.greet().setLang('es').greet(true).log();

// lets us use our object on click of login button
$('#login').click(function() {

    // creates a new Greetr object
    var loginGrtr = G$('John', 'Doe');

    //hides the login on the screen
    $('#lgoindiv').hide();

    // fire off an HTML greeting
    loginGrtr.setlang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});