const add = require("./app");

test("First test case for empty string and expecting a 0", () => {
  expect(add("")).toBe(0);
});

test("Second test case for passing only a single number i.e. 1 in string", () => {
  expect(add("1")).toBe(1);
});

test("Third test case for passing two number i.e. 1 and 2 in string", () => {
  expect(add("1,2")).toBe(3);
});

test("Test case to handle unknown amount of numbers", () => {
  // creating a function to get array with unknown amount of numbers
  function createRandomArray(length, max) {
    return [...new Array(length)].map(() => Math.round(Math.random() * max));
  }

  let randomInteger = Math.floor(Math.random() * 100 + 1); //getting some random numbers

  let resultingRandomArray = createRandomArray(randomInteger, randomInteger);

  // sums up the resultant array
  const sumOfArrayOfUnknownAmountOfNumbers = resultingRandomArray.reduce(
    (previousValue, nextValue) => previousValue + nextValue,
    0
  );

  // converts the array to a string
  let resultingRandomArrayToString = resultingRandomArray.join();

  expect(add(resultingRandomArrayToString)).toBe(
    sumOfArrayOfUnknownAmountOfNumbers
  );
});

test("Test case for passing \n next line character in string", () => {
  expect(add("1,2\n3\n6,5\n7")).toBe(24);
});

test("Test case for negative numbers in string", () => {
  expect(add("1,-2")).toThrow(new Error('negatives not allowed'));
});


test("Test case for string with delemiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});
