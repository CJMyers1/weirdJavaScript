let people = [
    {
        //John
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main st.',
            '222 third st.'
        ]
    },
    {
        //Jane
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 Main St.',
            '444 Fifth St.'
        ],
        greet: function() {
            return 'Hello!';
        }
    }
]

console.log(people);