// The javascript SET is a collection of unique values.
// In javascript SET each value only occur once in a set.
// The values can be any type, primitives values or objects.

// Methods
/* 
size
add
has
keys
values
enteries
*/

const lettersA = new Set(["a", "b", "c"]);
console.log("lettersA : ", lettersA);
// Output: lettersA :  Set(3) { 'a', 'b', 'c' }
console.log("lettersA typeof: ", typeof lettersA);
// Output: lettersA typeof:  object
console.log("lettersA size : ", lettersA.size);
// Output: lettersA size :  3
for (const x of lettersA) {
	console.log("Letter : ", x);
}
// Output
/*
Letter :  a
Letter :  b
Letter :  c
*/
lettersA.add("c");
lettersA.add("c");
lettersA.add("c");
lettersA.add("c");
lettersA.add("d");
console.log("lettersA size : ", lettersA.size);
//Output: lettersA size :  4

console.log("---------------------------------------------- 1 ");

const checkLetterA = lettersA.has("a");
console.log("checkLetterA : ", checkLetterA);
// Output:  checkLetterA :  true
const checkLetterB = lettersA.has("y");
console.log("checkLetterB : ", checkLetterB);
// Output:  checkLetterB :  false

console.log("---------------------------------------------- 2 ");

lettersA.forEach((letter) => {
	console.log("letter : ", letter);
});
// Output
/*
letter :  a
letter :  b
letter :  c
letter :  d
*/

console.log("---------------------------------------------- 3 ");

for (const x of lettersA) {
	console.log("Letter : ", x);
}
// Output
/*
Letter :  a
Letter :  b
Letter :  c
Letter :  d
*/

console.log("---------------------------------------------- 4 ");

const letterB = lettersA.values();
console.log("letterB - Values: ", letterB);
// Output: letterB :  [Set Iterator] { 'a', 'b', 'c', 'd' }

for (const x of lettersA.values()) {
	console.log("Letter : ", x);
}
// Output
/*
Letter :  a
Letter :  b
Letter :  c
Letter :  d
*/

console.log("---------------------------------------------- 5 ");

const letterC = lettersA.keys();
console.log("letterC - Keys: ", letterC);
// Output: letterC :  [Set Iterator] { 'a', 'b', 'c', 'd' }

for (const x of lettersA.keys()) {
	console.log("Letter : ", x);
}
//Output
/*
Letter :  a
Letter :  b
Letter :  c
Letter :  d
*/

console.log("---------------------------------------------- 6 ");

const letterD = lettersA.entries();
console.log("letterD - Entries: ", letterD);
// Output:
/*
letterD - Entries:  [Set Entries] {
  [ 'a', 'a' ],
  [ 'b', 'b' ],
  [ 'c', 'c' ],
  [ 'd', 'd' ]
}
*/
for (const x of lettersA.entries()) {
	console.log("Letter : ", x);
}
// Output
/*
Letter :  [ 'a', 'a' ]
Letter :  [ 'b', 'b' ]
Letter :  [ 'c', 'c' ]
Letter :  [ 'd', 'd' ]
*/

console.log("---------------------------------------------- 7 ");

// Remove Duplicates from an Array
const numbersA = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbersA = [...new Set(numbersA)];
console.log("uniqueNumbersA : ", uniqueNumbersA);
// Output: uniqueNumbersA :  [ 1, 2, 3, 4, 5 ]

console.log("---------------------------------------------- 8 ");

// Find Intersection of Two Arrays
const array1A = [1, 2, 3, 4, 5];
const array2A = [4, 5, 6, 7, 8];
const intersection = [...new Set(array1A)].filter((x) =>
	new Set(array2A).has(x)
);
console.log("intersection : ", intersection);

console.log("---------------------------------------------- 9 ");

// Track Unique Visitors on a Website
class UniqueVisitorTracker {
	constructor() {
		this.visitors = new Set();
	}

	addVisitor(visitorId) {
		this.visitors.add(visitorId);
	}

	getVisitorCount() {
		return this.visitors.size;
	}

	getAllVisitors() {
		return this.visitors;
	}
}

const tracker = new UniqueVisitorTracker();
tracker.addVisitor("user1");
tracker.addVisitor("user2");
tracker.addVisitor("user3");
tracker.addVisitor("user4");
getAllVisitorsSize = tracker.getVisitorCount();
console.log("getAllVisitorsSize : ", getAllVisitorsSize);
// Output: getAllVisitorsSize :  4
getAllVisitors = tracker.getAllVisitors();
console.log("getAllVisitors : ", getAllVisitors);
// Output: getAllVisitors :  Set(4) { 'user1', 'user2', 'user3', 'user4' }

console.log("---------------------------------------------- 10 ");

//  Find Unique Words in a Sentence
const sentence = "this is a test and only a test";
const uniqueWords = new Set(sentence.split(" "));
console.log("uniqueWords : ", uniqueWords);
// Output: uniqueWords :  Set(6) { 'this', 'is', 'a', 'test', 'and', 'only' }

console.log("---------------------------------------------- 11 ");

// Union, Intersection, and Difference of Sets
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Union
const unionA = new Set([...setA, ...setB]);
console.log("unionA : ", unionA);

// Intersection
const intersectionA = new Set([...setA].filter((sa) => setB.has(sa)));
console.log("intersectionA : ", intersectionA);

// Difference of Sets
const differenceA = new Set([...setA].filter((sa) => !setB.has(sa)));
console.log("differenceA : ", differenceA);

console.log("---------------------------------------------- 12 ");

// Real-time User Session Management
class SessionManager {
	constructor() {
		this.activeSessions = new Set();
	}

	addSession(session) {
		this.activeSessions.add(session);
	}

	removeSession(session) {
		if (this.activeSessions.has(session)) this.activeSessions.delete(session);
	}

	isSessionActive(session) {
		return this.activeSessions.has(session);
	}

	getActiveSessionCount() {
		return this.activeSessions.size;
	}
}

const sessionManager = new SessionManager();
sessionManager.addSession("session1");
sessionManager.addSession("session2");
console.log(sessionManager.isSessionActive("session1")); // Output: true
sessionManager.removeSession("session1");
console.log(sessionManager.getActiveSessionCount()); // Output: 1
