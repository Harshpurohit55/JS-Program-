// Normal Function

function test() {
    // do something
}

// Arrow Function Example 
const test = () => "5"; // if not curly bracket automatically return statment 

// Syntax of arrow function
const test = () => {
    //sfdghsfj
    //djfbdfn
    //dsjbvbu
};

// Passing Parameter

const test = (p1, p2) => {
    //sfdghsfj
    //djfbdfn
    //dsjbvbu
};

// Function Expression 

() => 5;


// Function 

const double = (p1) => {
    return p1 * 2;
}
//shortcut


(p1) => p1 * 2;

p1 => p1 * 2;

// Different vaariable
(p1, p2) => {
    const p1Double = p1 * 2;
    const p2Double = p2 * 2;
}

// this Keyword 

function test() {
    console.log(this);
}

const obj11 = {
    prop1: test,
};

test();                     // this => Global Object
obj11.prop1();              // this => obj11


const obj2 = {
    name: "object 2",
    prop2: test
}                   // this type of code requires this keyword

obj1.prop1();
obj2.prop2();