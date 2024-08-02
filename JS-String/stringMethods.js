let str = "Hello, world!";

//toUpperCase method
console.log("Upper Case Method: ", str.toUpperCase());
// Output:- Upper Case Method:  HELLO, WORLD!

//toLowerCase method
console.log("Lower Case :", str.toLowerCase());
// Output: hello, world!

// length method
console.log(str.length);
// Output: 13

console.log("---------------------------------------------- 1");
// charAt method and at method
// The only difference between the charAt and at method is the at method support negative indexing value but charAt do not.

console.log(str.charAt(0));
// Output: H

console.log(str.at(0));
// Output: H

console.log(str.at(-1));
// Output: !

console.log("---------------------------------------------- 2");
// slice Method:
// The slice method is used to extract a part of a string.
// The method takes two parameters: startIndex and endIndex
// Support negative indexing
// Syntax: string.slice(startIndex, endIndex)

console.log("slice method 1 : ", str.slice(7, 14));
// Output:- slice method 1 :  world!

console.log("slice method 2 : ", str.slice(7));
// Output:- slice method 2 :  world!

console.log("slice method 3 : ", str.slice(-6, -1));
// Output:- slice method 3 :  world

console.log("---------------------------------------------- 3");
// Substring methos similar to the slice method, but it does not support negative indexing.
// It swaps startIndex and lastIndex if startIndex is greater than lastIndex
// Syntax: string.substring(startIndex, endIndex)

console.log("Substring method 1 :", str.substring(7, 12));
// Output:- Substring method 1 : world

console.log("Substring method 2 : ", str.substring(7));
// Output:- Substring method 2 :  world!

console.log("Substring method 3 : ", str.substring(12, 7));
// Output:- Substring method 3 :  world

console.log("Substring method 4 : ", str.substring(-6, -1));
// Output:- Substring method 4 :

console.log("---------------------------------------------- 4");
// substr() methos is similar to the slice and substring methods, used for extracting the part of the string.
// The difference it that the 2nd parameter specifies the length of the string.
// Support negative indexing
// Syntax: string.substr(startIndex, length)

console.log("substr method 1 : ", str.substr(7, 5));
// Output:- substr method 1 :  world

console.log("substr method 2 : ", str.substr(7));
// Output:- substr method 2 :  world!

console.log("substr method 3 : ", str.substr(-6, 5));
// Output:- substr method 3 :  world

console.log("---------------------------------------------- 4");
// trim() Method is used to removes whitespace both sides
// trimStart() Method is used to removes whitespace from starting
// trimEnd() Method is used to removes the whitespace from the ending

let text1 = "    Hello World!     ";
console.log("Trim method : ", text1.trim());
// Output:- Trim method :  Hello World!

console.log("Start Trim method : ", text1.trimStart());
// Output:- Start Trim method :  Hello World!

console.log("End Trim method : ", text1.trimEnd());
//Output:- End Trim method :      Hello World!

console.log("---------------------------------------------- 5");
// String_padStart() : method is used to pads a string form the start.
// String_padEnd() : method is used to pads a string form the end.

let padsString = "5";

console.log("padStart-1 : ", padsString.padStart(3, "0"));
// Output:- padStart-1 :  005

console.log("padStart-2 : ", padsString.padStart(2));
// Output:- padStart-2 :   5

console.log("padStart-3 : ", padsString.padStart(6, "*"));
// Output:- padStart-3 :  *****5

console.log("padEnd-1 : ", padsString.padEnd(3, "0"));
// Output:- padEnd-1 :  500

console.log("padEnd-2 : ", padsString.padEnd(5));
// Output:- padEnd-2 : 5

console.log("padEnd-3 : ", padsString.padEnd(6, "-"));
// Output:- padEnd-3 :  5-----

console.log(
	"padStart and padEnd-1 :",
	padsString.padStart(5, "0").padEnd(8, "*")
);
// Output: padStart and padEnd-1 : 00005***

console.log("padStart and padEnd-2 :", padsString.padStart(6).padEnd(10));
// Output: padStart and padEnd-2 :      5
