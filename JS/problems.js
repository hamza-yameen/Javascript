// 1. Program to find longest word in a given sentence ?

// const sentence = "Program to find longest word in a given sentence?";

// const resultLongestWord = sentence.split(" ").reduce((acc, word) => {
// 	return word.length >= acc.length ? word : acc;
// }, "");
// console.log("resultLongestWord : ", resultLongestWord);

console.log("--------------------------------------------------------");
// 2. Write a program to remove duplicates from an array ?

// const arrayOne = [1, 2, 3, 2, 4, 3, 5, 1, 6, 4];
// console.log("arrayOne : ", [...new Set(arrayOne)]);
// const arrayTwo = ["apple", "banana", "apple", "orange", "banana", "grape"];
// console.log("arrayTwo : ", [...new Set(arrayTwo)]);

console.log("--------------------------------------------------------");
// 3. How to check whether a string is palindrome or not ?

// const checkStringPalindrome = (palindrome) => {
// 	const palindromeString = palindrome.toLowerCase();
// 	let newpalindromeWord = "";
// 	for (let i = palindromeString.length; i > 0; i--) {
// 		newpalindromeWord = newpalindromeWord.concat(palindromeString.at(i - 1));
// 	}
// 	return newpalindromeWord === palindromeString ? "Yes" : "No";
// };
// const result = checkStringPalindrome("Level");
// console.log("Result : ", result);

// const palindrome = "level";
// const palindromeCheck = palindrome.split("").reverse().join("");
// console.log(palindromeCheck === palindrome ? true : false);

console.log("--------------------------------------------------------");
// 4. Program to find Reverse of a string without using built-in method?

// const inputString = "Hello World";
// let newInputString = "";
// for (let i = inputString.length; i > 0; i--) {
// 	// newInputString = newInputString.concat(inputString[i - 1]);
// 	newInputString += inputString[i - 1];
// }
// console.log("newInputString : ", newInputString);

// const inputStringArray = inputString.split(" ");
// const newInputStringArray = [];
// for (let i = inputStringArray.length; i > 0; i--) {
// 	newInputStringArray.push(inputStringArray[i - 1]);
// }
// console.log(newInputStringArray.join(" "));

console.log("--------------------------------------------------------");
// 5. Find the max count of consecutive 1’s in an array ?

// const inputArray = [1, 1, 0, 1, 1, 1, 0, 1, 1];
// let counter = 0;
// let maxCounter = 0;
// for (let i of inputArray) {
// 	if (i === 1) {
// 		counter++;
// 		if (maxCounter < counter) {
// 			maxCounter = counter;
// 		}
// 	} else {
// 		counter = 0;
// 	}
// }
// console.log("maxCounter : ", maxCounter);

console.log("--------------------------------------------------------");
// 6. Find the factorial of given number ?

// const factorial = (f) => {
// 	if (f === 1) return 1;
// 	return f * factorial(f - 1);
// };
// console.log(factorial(5));

console.log("--------------------------------------------------------");
// 7. Given two strings. Find if one string can be formed by rearranging the letters of other string.

// const checkReArranging = (str1, str2) => {
// 	const str1Sorting = str1.split("").sort().join("");
// 	const str2Sorting = str2.split("").sort().join("");
// 	if (str1Sorting === str2Sorting) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// };

// console.log("1 : ", checkReArranging("listen", "silent"));
// console.log("2 : ", checkReArranging("evil", "vile"));
// console.log("3 : ", checkReArranging("triangle", "integral"));
// console.log("4 : ", checkReArranging("dormitory", "dirtyroom"));
// console.log("5 : ", checkReArranging("hello", "world"));

console.log("--------------------------------------------------------");
//10. Write logic to get unique objects from below array ?

// const a = [
// 	{ name: "sai" },
// 	{ name: "Nang" },
// 	{ name: "sai" },
// 	{ name: "Nang" },
// 	{ name: "111111" },
// ];
// const b = [{ name: "sai" }, { name: "Nang" }, { name: "111111" }];

async function fetchWeatherData() {
	const api1Promise = fetch("https://api.weather.com/data");
	const api2Promise = fetch("https://api.openweathermap.org/data");
	const api3Promise = fetch("https://api.weatherapi.com/data");

	try {
		const resultData = await Promise.any([
			api1Promise,
			api2Promise,
			api3Promise,
		]);
		console.log("Result data:", resultData);
	} catch (error) {
		console.error("Error fetching weather data:", error);
	}
}

fetchWeatherData();
