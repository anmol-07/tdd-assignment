const sumOfNumbersPassedInString = require("./app");

test("First test case for empty string and expecting a 0", () => {
  expect(sumOfNumbersPassedInString("")).toBe(0);
});

test("Second test case for passing only a single number i.e. 1 in string", () => {
  expect(sumOfNumbersPassedInString("1")).toBe(1);
});

test("Third test case for passing two number i.e. 1 and 2 in string", () => {
  expect(sumOfNumbersPassedInString("1,2")).toBe(3);
});
