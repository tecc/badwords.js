let arr = require('./array')

class Main {
  setOptions(options = {
    censor: '*',
    blacklist: arr,
    whitelist: []
  }) {
    this.options = options;
    return this;
  }
  clear(str) {
    let r = str;
    for (let i = 0; i < arr.length; i++) {
      let s = "";
      for (let j = 0; j <= arr[i].length; i++) {
        s += "*";
      }
      r.replace(arr[i], s);
    }
    return r;
  }
}

module.exports.ARRAY = require('./array');
module.exports.OBJECT = require('./not-done');
module.exports.JSON = require('./json');

module.exports = Main;
