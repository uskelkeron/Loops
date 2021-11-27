const prompt = require("prompt-sync")();

const number = parseInt(prompt("please enter which tables you would like to lean: "));

for(let i=1; i<=12; i++)
{
    console.log(` ${i} x ${number} = ${number*i}`);
}
                                                                                                                                                                                                                                                                                                                         