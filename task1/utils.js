const sortString = (string) => {
  return string.toLowerCase().split("").sort().join("");
};

module.exports = {
  sortString,
};
