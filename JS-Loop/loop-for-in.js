// For....In loop iterates over the keys of an object.
// Here are multiple examples of the uses of the for...in loop.
// You can also use the for...in loop for arrays.

const person = {
	name: "John",
	age: 30,
	city: "New York",
};
for (let key in person) {
	console.log(`${key}: ${person[key]}`);
}
// Output:
/*
name: John
age: 30
city: New York
*/

console.log("---------------------------------------------- 1");

const fruits = ["apple", "banana", "cherry"];
for (let index in fruits) {
	console.log(`${index}: ${fruits[index]}`);
}
// Output:
/*
0: apple
1: banana
2: cherry 
*/

console.log("2 ---------------------------------------------- 2");

const str = "hello";
for (let char in str) {
	console.log(str[char]);
}
// Output:
/*
h
e
l
l
o
*/
