// //1 Add Number to array
// let arr = [1,2,3,4,5,6,7,83]
// let a = prompt("Enter a Number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

//2 until number = 0 

// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a;
// do {
//     a = prompt("Enter a Number")
//     a = Number.parseInt(a)
//     arr.push(a)
//     console.log(arr)
// }
// while (a != 0) 
// console.log(arr)

//3 filter number divisible by 10

// let arr = [1, 2, 30, 4, 50, 6, 7, 83,670]
// let n = arr.filter((x)=>{
//     return x%10 == 0
// })
// console.log(n)

//4 find square using map method
// let arr = [1, 2, 30, 4, 50, 6, 7, 83,670]
// let n = arr.map((x)=>{
//     return x*x
// })
// console.log(n)

//5 Reduce method to calculate factorial

let arr = [1, 2, 3, 4, 5]
let n = arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(n)

