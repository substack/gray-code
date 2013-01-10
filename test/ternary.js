var test = require('tape');
var gray = require('../');

test('3-bit ternary', function (t) {
    t.plan(1);
    t.same(gray(3, 3), [
        '000', '001', '002', '012', '010', '011', '021', '022', '020', '120',
        '121', '122', '102', '100', '101', '111', '112', '110', '210', '211',
        '212', '222', '220', '221', '201', '202', '200'
    ].map(function (x) { return x.split('').map(Number) }));
});
