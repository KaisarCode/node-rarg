// # Read cli ARG
// @param s: search string
// @return:
//  - the next non-dashed argument (considered as value).
//  - true if arg found but no value
//  - false if argument not found
function rarg(s) {
    var v = false;
    var r = process.argv;
    var i = r.indexOf(s);
    if (i >= 0) {
        v = true;
        var a = r[i+1];
        if (!a || a[0] !== '-') {
        typeof a == 'undefined' ?
        v = true : v = a; }
    } return v;
}

// Export
module.exports = rarg;
