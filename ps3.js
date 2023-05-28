//q1 using for loop print marks
/* 
let marks = {
    Harsh : 95,
    subham :9,
    lovish :56,
    monika : 4
} 
*/
/*for (i=0; Object.keys(marks).length; i++)
{
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])

}
*/

//q2 for in loop marks 
/*
for  (let i in marks)
{
    console.log("The marks of " + i + " are " + marks[i])

}
*/


//q3 correct number 
/*
let cn = 4;
let i;
while(i !=cn)
{
    alert("Try Again")
    i = prompt("Enter a Number")
}

alert("You have entered a correct number")
*/
//q4 find mean of numbers 

const mean = (a, b, c, d) =>{
    return (a+b+c+d)/4
}

alert(mean(4,5,6,7))
