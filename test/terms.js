var test = require('tape');
var gray = require('../');

var codes = [
    [],
    [['a'],['b'],['c']],
    [
        ['a','a'],['a','b'],['a','c'],['b','c'],['b','a'],['b','b'],['c','b'],
        ['c','c'],['c','a']
    ],
    [
        ['a','a','a'],['a','a','b'],['a','a','c'],['a','b','c'],['a','b','a'],
        ['a','b','b'],['a','c','b'],['a','c','c'],['a','c','a'],['b','c','a'],
        ['b','c','b'],['b','c','c'],['b','a','c'],['b','a','a'],['b','a','b'],
        ['b','b','b'],['b','b','c'],['b','b','a'],['c','b','a'],['c','b','b'],
        ['c','b','c'],['c','c','c'],['c','c','a'],['c','c','b'],['c','a','b'],
        ['c','a','c'],['c','a','a']
    ]
];

test('abc ternary terms', function (t) {
    t.plan(5);
    var terms = [ 'a', 'b', 'c'];
    
    t.same(gray(0, terms), codes[0], '0-digit ternary');
    t.same(gray(1, terms), codes[1], '1-digit ternary');
    t.same(gray(2, terms), codes[2], '2-digit ternary');
    t.same(gray(3, terms), codes[3], '3-digit ternary');
    
    t.same(terms, ['a','b','c'], 'terms not modified');
});
