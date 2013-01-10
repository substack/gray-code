module.exports = function gray (n, k) {
    if (k === undefined) k = 2;
    if (n === 0) return [];
    
    var codes = [];
    var max = Math.pow(k, n);
    
    for (var i = 0; i < max; i++) {
        var res = [];
        var shift = 0;
        
        for (var j = n - 1; j >= 0; j--) {
            var x = (digit(i, k, j) + shift) % k;
            shift += k - x;
            res.push(x);
        }
        codes.push(res);
    }
    return codes;
};

function digit (n, radix, i) {
    return Math.floor(n / Math.pow(radix, i)) % radix;
}
