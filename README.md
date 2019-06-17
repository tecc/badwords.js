# badwords.js
Bad words in multiple different forms, and some methods to help you get rid of them!
Version 0.1.0 (alpha)

## Usage:
```javascript
const array = require('badwords.js/array') // This will return an array of swear words. This is also the default.
const object = require('badwords.js/object') // This will return an object of swear-words. Slightly more advanced.
const json = require('badwords.js/json') // This will return an array as well. WARNING: This is synchronous; the 'fs' NPM package does this asynchronous

// You can also reference different object types like this:
const badwordsjs = require('badwords.js');

let array = badwordsjs.ARRAY;

let object = badwordsjs.OBJECT;

let json = badwordsjs.JSON;

// If this didn't explain it clear enough, look through the source code!
```

## Credits:
The `bad-words` and `badwords` NPM packages.
