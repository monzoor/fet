const { sortString } = require("./utils.js");

const anagram = (str1, str2) => {
  if (
    str1.length !== str2.length ||
    (typeof str1 !== "string" && typeof str2 !== "string")
  ) {
    return false;
  } else {
    if (sortString(str1) === sortString(str2)) {
      return "Anagram";
    } else {
      return "Not Anagram";
    }
  }
};

module.exports = anagram;
