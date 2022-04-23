function findSeperator(numbersString) { // made a function to find out deleimiter in the string
  let arrOfStrings = numbersString.split("\n");
  if (arrOfStrings && arrOfStrings[0] && arrOfStrings[0].includes("//"))
    return arrOfStrings[0].substr(2, 1);
}
function add(commaSeperatedStringOfNumbers) {
  const seperatorInString = findSeperator(commaSeperatedStringOfNumbers);
  let numberArray = [];
  if (seperatorInString) {  // for replacing the delemiter with ,
    commaSeperatedStringOfNumbers = commaSeperatedStringOfNumbers.replace(/\n/g, "").replace("//", "").replace(seperatorInString, ""); //to replace \n if present in the string 
    numberArray = commaSeperatedStringOfNumbers.split(seperatorInString);
  }
  else{
    commaSeperatedStringOfNumbers = commaSeperatedStringOfNumbers.replace(/\n/g,","); //to replace \n if present in the string
     numberArray = commaSeperatedStringOfNumbers.split(","); //spliting the string on ,
  }
  let totalSum = seperatorInString !== '*' ? 0 : 1;
  // let multiProduct = 1;
  let negativeNumberArray = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (!numberArray[i].includes("-") && numberArray[i] < 1000 && seperatorInString !== '*') totalSum += Number(numberArray[i]);
    else if(!numberArray[i].includes("-") && numberArray[i] < 1000 && seperatorInString === '*') {
      totalSum *= Number(numberArray[i]);
    }
    else if(numberArray[i].includes("-")) negativeNumberArray.push(Number(numberArray[i]));
  }
  if (negativeNumberArray.length > 0)
    throw "negatives not allowed: " + negativeNumberArray.toString();
  return totalSum;
}
module.exports = add;
