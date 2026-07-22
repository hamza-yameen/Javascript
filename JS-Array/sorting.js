// Array sort()
// Array reverse()
// Array toSorted()
// Array toReversed()


const fruits_1 = ["banana", "apple", "orange"];

console.log("Fruits : ", fruits_1);
// Fruits :  [ 'banana', 'apple', 'orange' ]

console.log("Sorting : ", fruits_1.sort());
// Sorting :  [ 'apple', 'banana', 'orange' ]

console.log("Reversed : ", fruits_1.reverse());
// Reversed :  [ 'orange', 'banana', 'apple' ]

console.log("---------------------------------------------- 1 ");

const numbers_1 = [40, 100, 1, 5, 25, 10];

console.log("Numbers : ", numbers_1);
// Numbers :  [ 40, 100, 1, 5, 25, 10 ]

const sortedNumbers = numbers_1.sort((a, b) => a - b);
console.log("Sorted Numbers : ", sortedNumbers);
// Sorted Numbers :  [ 1, 5, 10, 25, 40, 100 ]

const reversedNumbers = sortedNumbers.sort((a, b) => b - a);
console.log("Reversed Sorted Numbers : ", reversedNumbers);
// Reversed Sorted Numbers :  [ 100, 40, 25, 10, 5, 1 ]

console.log("---------------------------------------------- 2 ");

const mixedNumbers = [40, "100", 1, "5", 25, "10"];
console.log("Mixed Numbers : ", mixedNumbers);
// Mixed Numbers :  [ 40, '100', 1, '5', 25, '10' ]

const sortedMixedNumbers = mixedNumbers.sort((a, b) => a - b);
console.log("Sorted Mixed Numbers : ", sortedMixedNumbers);
// Sorted Mixed Numbers :  [ 1, 25, 40, '100', '10', '5' ]

const reversedMixedNumbers = sortedMixedNumbers.sort((a, b) => b - a);
console.log("Reversed Sorted Mixed Numbers : ", reversedMixedNumbers);
// Reversed Sorted Mixed Numbers :  [ '100', '10', '5', 40, 25, 1 ]xw

console.log("---------------------------------------------- 3 ");

// Sorting Object of Array by a Numeric Property

const arr1 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Peter", age: 30 },
];

console.log("Ascending Order: ", arr1.sort((a, b) => a.age - b.age));
// Ascending Order:  [
//   { name: 'Jane', age: 22 },
//   { name: 'John', age: 25 },
//   { name: 'Peter', age: 30 }
// ]

console.log("Descending Order: ", arr1.sort((a, b) => b.age - a.age));
// Descending Order: [
//   { name: 'Peter', age: 30 },
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 22 }
// ]

console.log("---------------------------------------------- 4 ");
// Sorting Object of Array by a String Property

const arr2 = [
  { name: "Peter", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Adam", age: 30 },
];

console.log("Ascending Order: ", arr2.sort((a, b) => a.name.localeCompare(b.name)));
// Ascending Order:  [
//   { name: 'Adam', age: 30 },
//   { name: 'Jane', age: 22 },
//   { name: 'Peter', age: 25 }
// ]

console.log("Descending Order: ", arr2.sort((a, b) => b.name.localeCompare(a.name)));
// Descending Order:  [
//   { name: 'Peter', age: 25 },
//   { name: 'Jane', age: 22 },
//   { name: 'Adam', age: 30 }
// ]

console.log("---------------------------------------------- 5 ");
// Sorting by Multiple Properties

const arr3 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Peter", age: 30 },
  { name: "John", age: 20 },
];

const resArr3 = arr3.sort((a, b) => {
  if (a.name === b.name) {
    return a.age - b.age;
  }
  return a.name.localeCompare(b.name);
});
console.log("Multiple Properties Sort: ", resArr3);
// Multiple Properties Sort:  [
//   { name: 'Jane', age: 22 },
//   { name: 'John', age: 20 },
//   { name: 'John', age: 25 },
//   { name: 'Peter', age: 30 }
// ]

console.log("---------------------------------------------- 6 ");
// Get Max and Min Value From Array

const arr4 = [10, 20, 5, 8, 30, 15];
console.log("Max : ", Math.max(...arr4));
// Output:- Max :  30

console.log("Min : ", Math.min(...arr4));
// Output:- Min :  5

const maxNumberFromReduce = arr4.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  -Infinity
);
console.log("maxNumberFromReduce : ", maxNumberFromReduce);
// Output:- maxNumberFromReduce :  30

const minNumberFromReduce = arr4.reduce(
  (acc, cur) => (acc < cur ? acc : cur),
  Infinity
);
console.log("minNumberFromReduce : ", minNumberFromReduce);
// Output:- minNumberFromReduce :  5

let max4 = arr4[0];
let min4 = arr4[0];
for (let i of arr4) {
  if (i > max4) max4 = i;
  if (i < min4) min4 = i;
}
console.log(max4); // 30
console.log(min4); // 5

const arr44 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Peter", age: 30 },
  { name: "Lucy", age: 19 },
];
const maxAgePerson = arr44.reduce(
  (max, person) => (person.age > max.age ? person : max),
  arr44[0]
);
const minAgePerson = arr44.reduce(
  (min, person) => (person.age < min.age ? person : min),
  arr44[0]
);
console.log(
  `Max Age Person: ${maxAgePerson.name}, Min Age Person: ${minAgePerson.name}`
);
// Max Age Person: Peter, Min Age Person: Lucy

console.log("---------------------------------------------- 7");