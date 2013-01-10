module.exports = function gray (bits, terms) {
    if (bits === 0) return [];
    if (terms === undefined) terms = [ false, true ];
    if (typeof terms === 'number') {
        var terms_ = [];
        for (var i = 0; i < terms; i++) terms_.push(i);
        terms = terms_;
    }
    if (bits === 1) return terms.map(lift);
    
    var radix = terms.length;
    var codes = [];
    var max = Math.pow(radix, bits);
    
    for (var n = 0; n < max; n++) {
        var res = [];
        var shift = 0;
        
        for (var j = bits - 1; j >= 0; j--) {
            var x = (digit(n, radix, j) + shift) % radix;
            shift += radix - x;
            res.push(terms[x]);
        }
        codes.push(res);
    }
    return codes;
};

function lift (x) { return [x] }

function digit (n, radix, i) {
    return Math.floor(n / Math.pow(radix, i)) % radix;
}
