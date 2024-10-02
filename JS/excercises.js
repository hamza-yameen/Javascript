// Sorting Object of Array by a Numeric Property

const arr1 = [
	{ name: "John", age: 25 },
	{ name: "Jane", age: 22 },
	{ name: "Peter", age: 30 },
];
console.log(arr1.sort((a, b) => a.age - b.age)); // Ascending order
// Output:-
// [
//   { name: 'Jane', age: 22 },
//   { name: 'John', age: 25 },
//   { name: 'Peter', age: 30 }
// ]
console.log(arr1.sort((a, b) => b.age - a.age)); // Descending order
// Output:-
// [
//   { name: 'Jane', age: 22 },
//   { name: 'John', age: 25 },
//   { name: 'Peter', age: 30 }
// ]

console.log("---------------------------------------------- 1 ");
// Sorting Object of Array by a String Property

const arr2 = [
	{ name: "Peter", age: 25 },
	{ name: "Jane", age: 22 },
	{ name: "Adam", age: 30 },
];

console.log(arr2.sort((a, b) => a.name.localeCompare(b.name))); // Ascending order
// Output: -[
// 	{ name: "Adam", age: 30 },
// 	{ name: "Jane", age: 22 },
// 	{ name: "Peter", age: 25 },
// ];

console.log(arr2.sort((a, b) => b.name.localeCompare(a.name))); // Descending order
// Output: -[
// 	{ name: "Peter", age: 25 },
// 	{ name: "Jane", age: 22 },
// 	{ name: "Adam", age: 30 },
// ];

console.log("---------------------------------------------- 2 ");
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
console.log(resArr3);
// Output: -[
// 	{ name: "Jane", age: 22 },
// 	{ name: "John", age: 20 },
// 	{ name: "John", age: 25 },
// 	{ name: "Peter", age: 30 },
// ];

console.log("---------------------------------------------- 3 ");
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

console.log("---------------------------------------------- 4");

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
console.log(resArr3);
// Output: -[
// 	{ name: "Jane", age: 22 },
// 	{ name: "John", age: 20 },
// 	{ name: "John", age: 25 },
// 	{ name: "Peter", age: 30 },
// ];

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
console.log(resArr3);
// Output: -[
// 	{ name: "Jane", age: 22 },
// 	{ name: "John", age: 20 },
// 	{ name: "John", age: 25 },
// 	{ name: "Peter", age: 30 },
// ];

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
console.log(resArr3);
// Output: -[
// 	{ name: "Jane", age: 22 },
// 	{ name: "John", age: 20 },
// 	{ name: "John", age: 25 },
// 	{ name: "Peter", age: 30 },
// ];