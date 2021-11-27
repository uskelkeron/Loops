const prompt = require("prompt-sync")();
let escape = true;

do{

    const number = parseInt(prompt("please enter which tables you would like to lean: "));


    for(let i=1; i<=12; i++)
    {
        if (number <= 1)
        {
            escape = false;
            break;
        }

        else 
        {
            console.log(` ${i} x ${number} = ${number*i}`);
        }
       
    }

    
}

while(escape == true)


                                                                                                                                                                                                                                                                                                                         