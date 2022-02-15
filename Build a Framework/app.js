// gets new object
let g = G$('John', 'Doe');

// uses our chainable methods
g.greet().setLang('es').greet(true).log();

// lets us use our object on click of login button
$('#login').click(function() {

    // creates a new Greetr object
    let loginGrtr = G$('John', 'Doe');

    //hides the login on the screen
    $('#logindiv').hide();

    // fire off an HTML greeting
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});