const prompt = require("prompt-sync")();

console.log(" Welcome to the Math Game of Triangles \n \n The degrees to each side to participate");

const name = prompt("Please enter your name: ");

for (let i=0; i<3; i++)
{

let  triangle1sum, triangle2sum, triangle3sum, triangle4sum, triangle5sum;
let triangle1status, angle_type1, flag=false, fs_triangle_side1 = 0, fs_triangle_side2 = 0, fs_triangle_side3 = 0;

    do
    {

         fs_triangle_side1 = parseInt(prompt("Please enter side A: "));
         fs_triangle_side2 = parseInt(prompt("Please enter side B: "));
         fs_triangle_side3 = parseInt(prompt("Please enter side C: "));
        
        if(fs_triangle_side1 > 0 && fs_triangle_side2 > 0 && fs_triangle_side3 > 0)
        {
            triangle1sum = (fs_triangle_side1 + fs_triangle_side2 + fs_triangle_side3);

            if(triangle1sum > 180)
                {
                    console.log(`${name}, this is not a valid Triangle! he values of a triangle must add up to 180`);
                    flag= true;
                }
            else if (triangle1sum < 180)
            {
                    console.log(`${name}, this is an invalid triangle, the values of a triangle must add up to 180`);
                    flag=true;
            }

            else
            {
                flag =false;
            }

        }

        else
        {
            console.log("Each side of a triangle must be greater than zero")
            flag = true;
        }

    }
    while(flag===true);
      

        if (fs_triangle_side1 === fs_triangle_side2 && fs_triangle_side3 === fs_triangle_side1)
        {
            triangle1status = "Equilateral Triangle";
                    
        }
        else if (fs_triangle_side1 === fs_triangle_side2 && fs_triangle_side1 !== fs_triangle_side3 ||fs_triangle_side3 === fs_triangle_side2 && fs_triangle_side3 !== fs_triangle_side1)
        {
            triangle1status = "Isosceles Triangle";
        }
        else if (fs_triangle_side1 !== fs_triangle_side3 && fs_triangle_side1 !== fs_triangle_side2 && fs_triangle_side3 !== fs_triangle_side2)
        {
           triangle1status = "Scalene Triangle";
        }

        
        switch(true)
        {
            case (fs_triangle_side1 < 90) && (fs_triangle_side2 < 90) && (fs_triangle_side3 < 90):
            angle_type1 = "Acute Triangle";
            break;
                
            case fs_triangle_side1 > 90 || fs_triangle_side2 > 90 || fs_triangle_side3 > 90:
            angle_type1 = "Obtuse Triangle";
            break;
                
            case fs_triangle_side1 === 90 || fs_triangle_side2 === 90 || fs_triangle_side3 === 90:
            angle_type1 = "Right Angle Triangle";
            break;
            
        }

           

            console.log(` Student: ${name} \n`);
            console.log(` Triangle Sides: A(${fs_triangle_side1}), B(${fs_triangle_side2}), C(${fs_triangle_side3}) \n`);
            console.log(` Triangle Type: ${triangle1status} \n`);
            console.log(` Angle Type: ${angle_type1} \n\n\n`);
        

    if(flag === true)
    {
        break;
    }

}