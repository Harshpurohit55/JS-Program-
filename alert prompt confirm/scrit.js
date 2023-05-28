alert("Enter the Value of a")
let a = prompt("Enter a Here", "5678")
 //document.write(a)
a = Number.parseInt(a) 
alert("You entered a of type " + ( typeof a))
let write = confirm("Do you want to write it to a page")

if(write)
{
    document.write(a)
}
else
{
    document.write("Please allow me to write")

}