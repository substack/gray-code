var test = require('tape');
var gray = require('../');

var codes = [
    [],
    [[0],[1]],
    [[0,0],[0,1],[1,1],[1,0]],
    [[0,0,0],[0,0,1],[0,1,1],[0,1,0],[1,1,0],[1,1,1],[1,0,1],[1,0,0]]
];

test('binary', function (t) {
    t.plan(4);
    t.same(gray(0, 2), codes[0], '0-bit binary');
    t.same(gray(1, 2), codes[1], '1-bit binary');
    t.same(gray(2, 2), codes[2], '2-bit binary');
    t.same(gray(3, 2), codes[3], '3-bit binary');
});

test('implicit binary', function (t) {
    t.plan(4);
    t.same(gray(0), codes[0], '0-bit binary');
    t.same(gray(1), codes[1], '1-bit binary');
    t.same(gray(2), codes[2], '2-bit binary');
    t.same(gray(3), codes[3], '3-bit binary');
});
