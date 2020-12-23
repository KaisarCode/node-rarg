# Rarg
[nodejs] Read cli arguments.

### Install
```
npm install kc-rarg
```

### Use
```js
var rdarg = require('kc-rarg');

// @param s: search string
// @return:
//  - the next non-dashed argument (considered as value).
//  - true if arg found but no value
//  - false if argument not found
var arg = rarg('-v');
console.log(arg);
```
