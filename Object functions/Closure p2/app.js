function buildFuncitons() {

    let arr = [];

    for (let i = 0; i < 3; i++) {

        arr.push(
            function() {
                console.log(i);
            }
        )
    }

    return arr;
}

let fs = buildFuncitons()

fs[0]();
fs[1]();
fs[2]();

function buildFuncitons2() {

    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }

    return arr;
}

let fs2 = buildFuncitons2();

fs2[0]();
fs2[1]();
fs2[2]();