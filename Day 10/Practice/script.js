
// splice()

(function(){let fruits = ["Apple", "Banana", "Cherry", "Date"];
// Remove 2 elements from index 1 and add "Blueberry" and "Cranberry"
fruits.splice(1, 2, "Blueberry", "Cranberry");

console.log(fruits); // Output: ["Apple", "Blueberry", "Cranberry", "Date"]
})()






// slice()
let fruits = ["Apple", "Banana", "Cherry", "Date"];
// Create a new array from index 1 to 3 (end index not included)
let slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits); // Output: ["Banana", "Cherry"]
console.log(fruits);       // Output: ["Apple", "Banana", "Cherry", "Date"]
