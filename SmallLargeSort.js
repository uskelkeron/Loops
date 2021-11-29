const prompt = require("prompt-sync")();

let numbers = 0, smallest = 999999999999, largest = 1;

for(let i=0; i <5; i++)
{
    numbers = parseInt(prompt("Please enter number: "));

    if(largest < numbers)
    {
        largest = numbers;

    }
    if (smallest > numbers)
    {
        smallest = numbers;
    }
}

console.log(`the smallest number entered: ${smallest} `);
console.log(`The lagest number entered: ${largest}`);