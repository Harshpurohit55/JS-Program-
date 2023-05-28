let a = prompt("Hey Whats your age?")



a = Number.parseInt(a) // Converting String in to Number
console.log(typeof a) 

if (a<0)
{
    alert("This is an invalid age");

}
else if(a<9)
{
    alert("You cannot even think of driving");
}

else if(a<18 && a>=9)
{
    alert("You are a kid and you can think of driving after 18");
}

else
{
    alert("You Can Drive as you are above 18");
}

console.log("You can", a<18? "not Drive" : "drive")
