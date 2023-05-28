// nn bb ss u- Primitives in js 
let a = null;
let b = 345;
let c = true;
let d= BigInt("567") + BigInt("30");
let e = "Harsh";
let f = Symbol;
let g = undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof c);

// Non Primitive data type - Object in JS

const item = {
    "Harsh" : true,
    "Rahul" : false,
    "Lovish" : 67,
    "Mitesh" : undefined
}

console.log(item)
console.log(item["Harsh"])