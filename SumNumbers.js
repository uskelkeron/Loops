
const prompt = require("prompt-sync")();
let escape = true;
let exitQuestion, number, answer=0, count=0, average, product=1, mod_test=1;

console.log(`Welcome to Sum Numbers Programs \n`);
number = parseFloat(prompt("Please Enter Number to Sum: "));
answer = answer + number;
product = number * product;
do 
{
    
   if(mod_test%3===0)
   {
  
    exitQuestion = prompt(`Will you like to add more numbers? Enter (Y)es or (N)o to exit Application and get results: `);

   }
   else if(exitQuestion === `n` || exitQuestion === `N`)
   {
       escape = false;
       break;
   }
   else
   {
     
      
      
      number = parseFloat(prompt(`Please Enter another number: `));
      answer = answer + number;
      product = number * product;
   }

   count++; 
   mod_test++;

}
while(escape == true)

if(answer !== 0)
{
    console.log(`The sum of all numbers entered: ${answer}`);
    console.log(`The average of ${count} numbers enter is ${(answer/count).toFixed(2)}`);
    console.log(`The product of the ${count} numbers entered is: ${product}`);
}