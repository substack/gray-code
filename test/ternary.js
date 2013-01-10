var test = require('tape');
var gray = require('../');

var codes = [
    [],
    [[0],[1],[2]],
    [[0,0],[0,1],[0,2],[1,2],[1,0],[1,1],[2,1],[2,2],[2,0]],
    [
        [0,0,0],[0,0,1],[0,0,2],[0,1,2],[0,1,0],[0,1,1],[0,2,1],[0,2,2],[0,2,0],
        [1,2,0],[1,2,1],[1,2,2],[1,0,2],[1,0,0],[1,0,1],[1,1,1],[1,1,2],[1,1,0],
        [2,1,0],[2,1,1],[2,1,2],[2,2,2],[2,2,0],[2,2,1],[2,0,1],[2,0,2],[2,0,0]
    ]
];

test('ternary', function (t) {
    t.plan(4);
    t.same(gray(0, 3), codes[0], '0-digit ternary');
    t.same(gray(1, 3), codes[1], '1-digit ternary');
    t.same(gray(2, 3), codes[2], '2-digit ternary');
    t.same(gray(3, 3), codes[3], '3-digit ternary');
});
