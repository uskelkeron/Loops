const prompt = require("prompt-sync")();

console.log("Welcome to leap year calculator :) ")

const startYear= parseInt(prompt("Please enter start year"));
const endYear = parseInt(prompt("Please enter end year "));

for (let i = startYear; i <= endYear; i++)
{
    if( (i%4 === 0)&&(i%100 !==0))
    {
        console.log(`${i} is a leap year`);
    }

    else if( (i%4 === 0)&&(i%100 ===0)&&(i%400===0))
    {
        console.log(`${i} is a leap year`);
    }
}