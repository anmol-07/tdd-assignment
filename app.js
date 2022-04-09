function add(commaSeperatedStringOfNumbers) {
  commaSeperatedStringOfNumbers = commaSeperatedStringOfNumbers.replace(/\n/g, ',');  //to replace \n if present in the string
  const numberArray = commaSeperatedStringOfNumbers.split(",");  //spliting the string on ,
  let totalSum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    totalSum += Number(numberArray[i]);
  }
  return totalSum;
}
module.exports = add;
