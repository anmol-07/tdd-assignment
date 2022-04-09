function add(commaSeperatedStringOfNumbers) {
  const numberArray = commaSeperatedStringOfNumbers.split(",");
  let totalSum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    totalSum += Number(numberArray[i]);
  }
  return totalSum;
}
module.exports = add;
