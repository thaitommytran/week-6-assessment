const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  // CODE HERE
  test("return an array", () => {
    let testArr = [1, 2, 3];
    expect(Array.isArray(shuffleArray(testArr))).toBe(true);
  });

  test("return an array of the same length", () => {
    let testArr = [4, 5, 6];
    let shuffledArr = shuffleArray(testArr);
    expect(shuffledArr.length).toEqual(testArr.length);
  })
});
