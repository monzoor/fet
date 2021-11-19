const { sortString } = require("./utils.js");
const anagram = require("./");

describe("Unit testing", () => {
  const testString = "101 should be 101st";
  test("Checking sorting", () => {
    expect(sortString(testString)).toBe("   001111bdehlosstu");
  });
  test("Checking not sorting", () => {
    expect(sortString(testString)).not.toBe("abc");
  });
});

describe("Anagram testing", () => {
  const anagramResult = "Anagram";
  const notAnagramResult = "Not Anagram";
  test("`bleat` is anagram with `table`", () => {
    const testItem = anagram("bleat", "table");
    expect(testItem).toBe(anagramResult);
  });
  test("`a gentleman` is anagram with `elegant man`", () => {
    const testItem = anagram("a gentleman", "elegant man");
    expect(testItem).toBe(anagramResult);
  });

  test("`tead` is not anagram with `dead`", () => {
    const testItem = anagram("tead", "dead");
    expect(testItem).toBe(notAnagramResult);
  });

  test("Error if string length are not same", () => {
    const testItem = anagram("1011", "001");
    expect(testItem).toBe(false);
  });

  test("Error if string is not provided", () => {
    const testItem = anagram(112, 211);
    expect(testItem).toBe(false);
  });

  test("Test special character", () => {
    const testItem = anagram("#&&#", "&&##");
    expect(testItem).toBe("Anagram");
  });
});
