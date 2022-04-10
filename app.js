function findSeperator(numbersString) { // made a function to find out deleimiter in the string
  let arrOfStrings = numbersString.split("\n");
  if (arrOfStrings && arrOfStrings[0] && arrOfStrings[0].includes("//"))
    return arrOfStrings[0].substr(2, 1);
}
function add(commaSeperatedStringOfNumbers) {
  const seperatorInString = findSeperator(commaSeperatedStringOfNumbers);
  commaSeperatedStringOfNumbers = commaSeperatedStringOfNumbers.replace(/\n/g,","); //to replace \n if present in the string
  if (seperatorInString) {  // for replacing the delemiter with , 
    commaSeperatedStringOfNumbers = commaSeperatedStringOfNumbers
      .replace(new RegExp(seperatorInString, "g"), ",")
      .replace("//", "")
      .replace(/^,+/, "");
  }
  const numberArray = commaSeperatedStringOfNumbers.split(","); //spliting the string on ,
  let totalSum = 0;
  let negativeNumberArray = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (!numberArray[i].includes("-")) totalSum += Number(numberArray[i]);
    else negativeNumberArray.push(Number(numberArray[i]));
  }
  if (negativeNumberArray.length > 0)
    throw new Error("negatives not allowed: " + negativeNumberArray.toString());
  return totalSum;
}
module.exports = add;
