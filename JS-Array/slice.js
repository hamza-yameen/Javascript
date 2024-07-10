// The slice() method creates a new array by taking a part of an existing array.
// The slice() method slice out the piece of array fron the existing array.
// It doesn't change the original array or remove any elements from it

const colors = ["Red", "Green", "Blue", "Purple"];
console.log("colors : ", colors);
// Output: colors :  [ 'Red', 'Green', 'Blue', 'Purple' ]

const removeFirst = colors.slice(1);
console.log("removeFirst : ", removeFirst);
// Output: removeFirst :  [ 'Green', 'Blue', 'Purple' ]

const removeFirstTwoItems = colors.slice(2);
console.log("removeFirstTwoItems : ", removeFirstTwoItems);
// Output: removeFirstTwoItems :  [ 'Blue', 'Purple' ]

const removeFirstThreeItems = colors.slice(3);
console.log("removeFirstThreeItems : ", removeFirstThreeItems);
// Output:  removeFirstThreeItems :  [ 'Purple' ]

const remove1 = colors.slice(0, 2);
console.log("remove1 : ", remove1);
// Output: remove1 :  [ 'Red', 'Green' ]

const remove2 = colors.slice(0, 3);
console.log("remove2 : ", remove2);
// Output: remove2 :  [ 'Red', 'Green', 'Blue' ]

console.log("---------------------------------------------- 1");
// Extracting from the beginning or end:
const fruits = ["apple", "banana", "orange", "mango", "kiwi"];
console.log("fruits : ", fruits);
// Output: fruits :  [ 'apple', 'banana', 'orange', 'mango', 'kiwi' ]

const subFruits1 = fruits.slice(2, 4);
console.log("subFruits1 : ", subFruits1);
// Output: subFruits1 :  [ 'orange', 'mango' ]

const subFruits2 = fruits.slice(2, 5);
console.log("subFruits2 : ", subFruits2);
// Output: subFruits2 :  [ 'orange', 'mango', 'kiwi' ]

const subFruits3 = fruits.slice(1, 4);
console.log("subFruits3 : ", subFruits3);
// Output: subFruits3 :  [ 'banana', 'orange', 'mango' ]

console.log("---------------------------------------------- 2");
// Copying the entire array
const numbers = [1, 2, 3, 4, 5];
console.log("Numbers : ", numbers);
// Output: Numbers :  [ 1, 2, 3, 4, 5 ]

const copiedNumbers = numbers.slice();
console.log("CopiedNumbers : ", copiedNumbers);
// Output: CopiedNumbers :  [ 1, 2, 3, 4, 5 ]

console.log("---------------------------------------------- 3");
// Using negative start and end indexes
const letters = ["a", "b", "c", "d", "e"];
console.log("Letters : ", letters);
// Output: Letters :  [ 'a', 'b', 'c', 'd', 'e' ]

const lastTwo = letters.slice(-2);
console.log("LastTwo", lastTwo);
// Output: LastTwo [ 'd', 'e' ]

const lastWithRange = letters.slice(-4, -2);
console.log("lastWithRange : ", lastWithRange);
//Output: lastWithRange :  [ 'b', 'c' ]
