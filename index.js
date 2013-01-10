module.exports = function gray (n) {
    if (n === 0) return [];
    if (n === 1) return [ [ false ], [ true ] ];
    
    var xs = gray(n - 1);
    var m = xs.length;
    var res = [];
    for (var i = 0; i < m; i++) {
        res.push([ false ].concat(xs[i]));
    }
    for (var i = m - 1; i >= 0; i--) {
        res.push([ true ].concat(xs[i]));
    }
    return res;
};
