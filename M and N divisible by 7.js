let M = parseInt(prompt("Enter the value of M: "));
let N = parseInt(prompt("Enter the value of N: "));

let count = 0;
for (let number = M; number <= N; number++) {
    if (number % 7 === 0) {
        count++;
    }
}

console.log("The count of numbers divisible by 7 between", M, "and", N, "is:", count);
