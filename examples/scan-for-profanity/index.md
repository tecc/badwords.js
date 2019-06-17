# Scanning for profanity using `badwords.js`
Scanning for profanity in strings is easy using `badwords.js`.<br>
As it is a quite useful method, the package contains a method for that. You can of course create your own method, but this is an example on how to do it using `badwords.js`<br>
Let's get started!

### Step 1
First, of course, we need a couple of things:
- the `badwords.js` package
- a string to clean

```javascript
const badwords = require('badwords.js');

let badwordstring = "If you are an ash0le, you don't deserve to be here."
```
### Step 2
Using the `.isProfane()` method, we can do this quickly.
```javascript
const badwords = require('badwords.js');

let badwordstring = "If you are an ash0le, you don't deserve to be here."

let profane = badwords.isProfane(badwordstring) // Should return true.
```
