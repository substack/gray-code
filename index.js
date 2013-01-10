module.exports = function gray (n, terms) {
    if (n === 0) return [];
    if (terms === undefined) terms = [ false, true ];
    if (typeof terms === 'number') {
        var terms_ = [];
        for (var i = 0; i < terms; i++) terms_.push(i);
        terms = terms_;
    }
    if (n === 1) return terms.map(lift);
    
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

function lift (x) { return [x] }
