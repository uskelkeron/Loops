const prompt = require("prompt-sync")();

let oddNumbers = 0, average, numbers = 0, count =0;

for(let i = 0; i< 6; i++)
{
    numbers = parseFloat(prompt("Please enter number: "));

    if(numbers%2 !== 0 )
    {
        oddNumbers = oddNumbers + numbers;
        count++;
    }
}

console.log(` Number of Odd Numbers: ${count} \n Sum of all Odd Numbers: ${oddNumbers} \n Average of all Odd Numbers: ${(oddNumbers/count).toFixed(2)} \n`)

