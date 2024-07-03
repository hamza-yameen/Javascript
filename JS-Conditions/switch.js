// Switch provides a clear and readable alternative to using multiple if...else statements.
// The switch statement is used to perform different actions based on different conditions.

let fruit = "Orange";
let taste;
switch (fruit) {
	case "Apple":
		taste = "Sweet";
		break;
	case "Orange":
		taste = "Tangy";
		break;
	case "Banana":
		taste = "Creamy";
		break;
	default:
		taste = "Unknown";
}
console.log(`The taste of ${fruit} is ${taste}.`);
// OutPut:
// The taste of Orange is Tangy.

console.log("---------------------------------------------- 1");

let grade = "B";
let feedback;

switch (grade) {
	case "A":
	case "B":
		feedback = "Good job!";
		break;
	case "C":
	case "D":
		feedback = "You can do better.";
		break;
	case "F":
		feedback = "You need to improve.";
		break;
	default:
		feedback = "Invalid grade entered.";
}

console.log(feedback);
// Output:
// Good job!

console.log("---------------------------------------------- 2");

const day = new Date().getDay();
let dayName;

switch (day) {
	case 0:
		dayName = "Sunday";
		break;
	case 1:
		dayName = "Monday";
		break;
	case 2:
		dayName = "Tuesday";
		break;
	case 3:
		dayName = "Wednesday";
		break;
	case 4:
		dayName = "Thursday";
		break;
	case 5:
		dayName = "Friday";
		break;
	case 6:
		dayName = "Saturday";
		break;
	default:
		dayName = "Unknown";
}

console.log(`Today is ${dayName}.`);
// Output:
// Today is Tuesday.
