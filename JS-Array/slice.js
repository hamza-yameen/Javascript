// The slice() method creates a new array by taking a part of an existing array.
// It doesn't change the original array or remove any elements from it

const colors = ["Red", "Green", "Blue", "Purple"];

const someColors = colors.slice(1);
console.log("colors : ", colors);
console.log("SomeColors : ", someColors);

const firstTwo = colors.slice(0, 2);
console.log("Colors : ", colors);
console.log("FirstTwo : ", firstTwo);

console.log("----------------------------------------------");
// Extracting from the beginning or end:
const fruits = ["apple", "banana", "orange", "mango", "kiwi"];

const subFruits = fruits.slice(2, 4);
console.log(fruits);
console.log(subFruits);

console.log("----------------------------------------------");
// Copying the entire array
const numbers = [1, 2, 3, 4, 5];

const copiedNumbers = numbers.slice();
console.log("Numbers : ", numbers);
console.log("CopiedNumbers : ", copiedNumbers);

console.log("----------------------------------------------");
// Using negative start and end indexes
const letters = ["a", "b", "c", "d", "e"];

const lastTwo = letters.slice(-2);
console.log("Letters : ", letters);
console.log("LastTwo", lastTwo);

const lastWithRange = letters.slice(-4, -2);
console.log("Letters :", letters);
console.log("lastWithRange : ", lastWithRange);
