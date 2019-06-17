# Cleaning words using `badwords.js`

Want to clean words using `badwords.js`? Simple!<br>
`badwords.js` contains an inbuilt method for that.

You can make your own method, but this is an example on how to do it using `badwords.js`.

### Step 1
First, we need..
- ..to reference the `badwords.js` module.
- ..a string to clean<br>

```javascript
const badwords = require('badwords.js');

let badwordstring = "If you are an ash0le, you don't deserve to be here."
```

### Step 2
Now, time to clean that string!<br>
Using the `clean()` method, this will be easy.

```javascript
const badwords = require('badwords.js');

let badwordstring = "If you are an ash0le, you don't deserve to be here."

let cleanstring = badwords.clean(badwordstring); // "If you are an ******, you don't deserve to be here."
```
And that's it!
