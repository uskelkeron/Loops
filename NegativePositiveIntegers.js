const prompt = require("prompt-sync")();

let sumNegative = 0, count=0, numbers;

for (let i = 0; i <6; i++)
{

  numbers = parseFloat(prompt("Please enter number: "));
  if(numbers>0)
  {
      count++;
  }
  else
  {
      sumNegative = sumNegative + numbers;
  }

}

console.log(`The number of Positive Intergers: ${count} \n`);

console.log(`The SUM of Negative Integers: ${sumNegative} \n`);

