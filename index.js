let arr = require('./array')
let pkg = require('./package')
class Main {
  getInfo() {
    return {
      name: pkg.name,
      version: pkg.version,
      description: pkg.description,
      updates: pkg.updates
    }
  }
  setOptions(options = {
    censor: '*',
    blacklist: arr,
    whitelist: []
  }) {
    this.options = options;
    arr = arr.filter((item, index, arr) => {
      return !whitelist.includes(item);
    })
    return this;
  }
  /**
   * Returns whether or not a string contains profane
   * language
   *
   * @param {string} string
   * @returns {Boolean} whether or not it is profane
   */
  isProfane(str) {
    let string = str.trim().split(/ +/g);
    for (let i = 0; i < string.length; i++) {
      if (arr.includes(string[i])) return true;
    }
    return false;
  }
  /**
   * Clears a string off profane language
   *
   * @param {string} string
   * @returns {Boolean}
   */
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

module.exports.ARRAY = require('./array.js');
module.exports.OBJECT = require('./object.js');
module.exports.JSON = require('./json.json');
module.exports.REGEXP = require('./regexp.js');

module.exports = Main;
