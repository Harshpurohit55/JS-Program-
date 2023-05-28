//1q ages lies between 10 and 20
/*
let age = prompt("What is your age")
if(age > 10 && age < 20)
{
    alert("Your age lies between 10 and 20")

}
else{
    alert("Your age doesen't lies between 10 and 20")
}
*/
//q2 switch case statement in js

/*let age = prompt("What is your age")
switch(age)
{
    case '12':
        alert("Your age is 12")
        break
    case '13':
        alert("Your age is 13")
        break
    case '14':
        alert("Your age is 14")
        break
    case '15':
        alert("Your age is 15")
        break
        default:
        alert("Your age is not special")
}
*/

// q3 number divisible by 2 and 3 

/*
let num = prompt("What is your age")
num = Number.parseInt(num)
if(num % 2 ==0 && num % 3==0)
{
    alert("Your number is divisible by  2 and 3")
}
else
{
    alert("Your number is not divisible by  2 and 3")
}
*/

//q4 divisible by either 2 or 3
/*
let num = prompt("Enter a Number")
num = Number.parseInt(num)
if(num % 2 ==0 )
{
    alert("Your number is divisible by  2 ")
}
else (num % 3==0)
{
    alert("Your number is  divisible by and 3")
}
*/

//5 ternery operater
let age = 15;
let a = age>18? " you can drive " : "you cannot drive"
alert(a)
