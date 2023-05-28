//q1 length of string

let str = "Har\"sh"
console.log(str.length)

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox2';

console.log(sentence.includes(word))

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

//q4

let str2 = "Please give Rs 1000"
let amount =Number.parseInt(str2.slice("Please give Rs".length))
console.log(amount)
console.log(typeof amount)


// q5

let friend = "Deepika"
friend[4] = "L"
console.log(friend)
