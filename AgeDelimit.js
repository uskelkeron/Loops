const prompt = require("prompt-sync")();

const name = prompt(" Hello there, please enter you name: ");
let age, flag=true, number, average, count =0, sum=0, smallest=999999999999, largest=0;

do
{

    age = parseInt(prompt(` ${name}, please enter your age: `));

    if(age < 10 || age> 16)
    {
        flag = false;
        console.log(` ${name}, Please enter a valid age. Age range for valid age is between 10 - 16 `);
    }
    else
    {
        flag = true;
    }
 
}
while(flag===false);

do
{
    flag = false;

    number = parseInt(prompt(" Please enter number: "));
    sum = sum + number;
    count++;

    if(number > largest)
    {
        largest = number;
    }
     if (number < smallest)
    {
        smallest = number;
    }

    let exit = prompt(" Would you like to enter another number? (Y)es or (N)o: ");
    if(exit === 'N'|| exit ==='n')
    {
        flag = true;
    }
}
while(flag===false)

console.log(` The average of numbers entered is: ${(sum/count).toFixed(2)}`);
console.log(`Smallest number entered: ${smallest}`);
console.log(`Largest number entered: ${largest}`);



