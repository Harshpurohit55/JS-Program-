console.log(console)

console.error("This is an error")

// console.assert(555>53)

obj = { a: 1, b: 2, c: 3 }
console.table(obj)

console.warn("Don't Drink Whisky")

console.time("for loop")
for (i = 0; i < 5; i++) 
{
    console.log(233)
}

console.timeEnd("for loop")

console.time("whileLoop")

let i = 0;
while(i<5){
    console.log(233)
    i++;
}
console.timeEnd("whileLoop")