/*for (let i =0; i <34; i++)
{
    alert(i)
}
*/

// program to fing natural number 
/*
let sum=0;
let n=prompt("Enter the value of n")
n=Number.parseInt(n)
for(let i=0; i<n; i++)
{
    sum+=(i+1)
}

alert("Sum of first "+ n +"natural number is " +sum)
*/

// for in ex

let obj={
 Harsh: 45,
 rahul: 42,
 shubh: 44,
 ridhi: 54,
 shivalika: 22    
}

for (let a in obj)
{
    alert("Marks of " + a + " are " + obj[a])
}

// for of loop 

for (let b of "Harsh")
{
    console.log(b)
}