module.exports = function reverse (n) {
    n = Math.abs(n)
    n = String(n);
    let nReversed = n.split('').reverse().join('');
    return nReversed;
}
