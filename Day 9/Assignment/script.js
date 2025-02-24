// 1️ What will be the output of the following code? Explain why.
(function () {
    let x = "5";
    let y = 5;
    console.log(x == y); // when we use == then js check only x and y value is equal or not.
    console.log(x === y); // when we use === then js check x and y value,type is equal or not
})();

// op:- ture 
//      false









// 2️ How can you find the length of the longest word in this array?
// Write a function to get the longest word length
(function () {
    const words = ["JavaScript", "Programming", "Function", "Hoisting"];
    function getLongestWordLength(arr) {
        let maxLength = 0;
        for (let word of arr) {
            if (word.length > maxLength) {
                maxLength = word.length;
            }
        }
        return maxLength;
    }
    console.log(getLongestWordLength(words));
})()
// Output: 11






// Section 2: let, const, var & Scope
// 3️ What will be logged in the console? Explain your answer.
function testScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }
    console.log(a);
    console.log(b);
    console.log(c);
}
testScope();
// we can only see the output of console.log(a) will be  10 and we can't see b,c  output. because var has function scope, meaning it is accessible anywhere within the function testScope(). let and const are block-scoped, so they can only be accessed within the block where they are declared.Accessing let or const outside their block results in a ReferenceError.












// 4 Rewrite the following function using const and fix any issues.
const name = "John";
function greet() {
    if (true) {
        const message = "Hello " + name;
        console.log(message);
    }
}
greet();











// Section 3: Traditional Function vs. Arrow Function
// // 5. Convert this traditional function into an arrow function without changing the output.
function multiply(a, b) {
    return a * b;
}
const multiply = (a,b)=>{
    return a*b;
}
const multiply =(a,b)=> a*b;










// 6. What will be the output? Explain why.
const obj = {
    name: "Alice",
    sayHello: function () {
        setTimeout(() => {
            console.log("Hello, " + this.name);
        }, 1000);
    }
};
obj.sayHello();
output: Hello , Alice
// The output is "Hello, Alice" because the arrow function inherits this from sayHello, which refers to obj. Arrow functions don’t have their own this, preventing it from changing inside setTimeout. 










// Section 4: Hoisting
// 7️ What will be the output of this code? Explain why.
console.log(a);
var a = 10;
console.log(b);
let b = 20;
//output : undefined
//        ReferenceError: Cannot access 'b' before initialization

//JavaScript hoists variable declarations to the top of their scope before execution.However, only the declaration (var a;) is hoisted, not the assignment (a = 10).
// let is hoisted, but unlike var, it is not initialized to undefined.










// 8️ Rearrange the following function so it works correctly, explaining the problem.
console.log(square(5));

function square(n) {
    return n * n;
}
var double = function (n) {
    return n * 2;
};
console.log(double(4));
// Move the function assignment before calling double(4).
//  Use const or let instead of var to prevent hoisting-related confusion









// Section 5: 
// Operators (Arithmetic, Assignment, Comparison, Logical)
// 9️ What will be the output of the following expressions?
console.log(5 + "5"); //output : 55
console.log(5 - "3"); //output : 2
console.log(5 * "2"); //output : 55
console.log("10" / 2); //output :5
console.log(10 % "3");  //output :1
// + with a string → Concatenation
// Math operators (-, *, /, %) → Convert strings to numbers automatically














// 10 Rewrite this code using shorthand assignment operators.
let x = 10;
x += 5;  // Equivalent to: x = x + 5;
x *= 2;  // Equivalent to: x = x * 2;
x -= 3;  // Equivalent to: x = x - 3;
x /= 2;  // Equivalent to: x = x / 2;












// 1️1️ What will be logged in the console? Explain why.
console.log(5 > 3 && 10 < 20); // if both conditions are true then it return  true
console.log(5 > 3 || 10 > 20); // if at least one condition is true then it return true
console.log(!(5 > 3));  // negates the truth value.





//  Section 6: Function Parameters vs Arguments
// 1️2️.  What will be the output of the following function?
function sum(a, b, c = 5) {
    return a + b + c;
}
console.log(sum(2, 3));  // output : 10
console.log(sum(2, 3, 10)); // output : 15







// 1️3️. Write a function that takes any number of arguments and returns their sum
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Example usage:
console.log(sum(1, 2, 3));       // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100
console.log(sum());              // Output: 0









//1️4️ Fix the following function to work correctly and explain the issues.
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter1 = outer();
counter1();
counter1();
const counter2 = outer();
counter2();
counter2();
//No Issues Found












//                        ##Some statement questions:

// 1. Number Reversal without Using Built-in Methods
//  Problem:
// Write a function reverseNumber(num) that takes a number and returns its reverse.
// Example:
// reverseNumber(1234); // Output: 4️3️2️1️
// reverseNumber(-567); // Output: -7️6️5
//  Hint: Convert the number to a string manually and reverse it

function reverseNumber(num) {
    let rev = 0;
    let negative = num < 0;
    num = Math.abs(num);

    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return negative ? -rev : rev;
}

// Example usage:
console.log(reverseNumber(1234));  // 4321
console.log(reverseNumber(-567));  // -765








// 2. Custom Length Function
// Problem:
// Create a function customLength(str) that returns the length of a string without using length
// property.
// Example:
// customLength("JavaScript"); // Output: 1️0
function customLength(str) {
    let count = 0;
    for (let char of str) {
        count++; // Increase count for each character
    }
    return count;
}
console.log(customLength("JavaScript")); // Output: 10




// 3. Avoid Hoisting Bug
//  Problem:
// Fix the bug in the following code without changing the function calls.
console.log(add(2, 3)); // Should output: 5
function add(a, b) {
    return a + b;
}
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(2, 3));
// Should output: 6️





// 4 Function That Returns Another Function
//  Problem:
// Write a function counter() that returns another function. Each time the returned function is called, it
// should increase a count and return it.
//  Hint: Use closures
// Example:
// const count = counter();
// console.log(count()); // Output: 1️
// console.log(count()); // Output: 2️
// console.log(count()); // Output: 3️





function counter() {
    let count = 0;  // Private variable

    return function () {
        count++;  // Increment count
        return count;
    };
}
// Example usage:
const count = counter();
console.log(count()); // Output: 1
console.log(count()); // Output: 2
console.log(count()); // Output: 3
