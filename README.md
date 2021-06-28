# badwords.js
Bad words in multiple different forms, and some methods to help you get rid of them!
Version 0.1.9 (alpha)

## Usage:
```javascript
const array = require('badwords.js/array'); // This will return an array of swear words. This is also the default.

const object = require('badwords.js/object'); // This will return an object of swear words, which of all values are true. So if you're making if statements for single words, this is a better option than the array.

const json = require('badwords.js/json'); // This will return an array as well. Fair warning, this one is synchronous; feel free to use array instead.

const regexp = require('badwords.js/regexp'); // A regular expression. If you don't want to use the array.

// You can also reference different object types like this:
const badwordsjs = require('badwords.js');

let array = badwordsjs.ARRAY;

let object = badwordsjs.OBJECT;

let json = badwordsjs.JSON;

let regexp = badwordsjs.REGEXP;

// If this didn't explain it clear enough, look through the source code!
// Want more object types? Suggest it!
```

## Credits:
The `bad-words` and `badwords` NPM packages.
