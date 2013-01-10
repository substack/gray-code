var gray = require('./');
for (var n = 1; n <= 4; n++) {
    var xs = gray(n).map(digits);
    console.log(xs);
}

function digits (xs) { return xs.map(Number).join('') }
