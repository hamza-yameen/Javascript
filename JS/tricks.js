// Currying

const applyDiscount = (discount) => (price) => price - (price * discount) / 100;
const tenPercentOff = applyDiscount(10);
const twentyPercentOff = applyDiscount(20);
console.log("Apply 10% Discount : ", tenPercentOff(100)); //Output: Apply 10% Discount :  90
console.log("Apply 20% Discount : ", twentyPercentOff(3000)); //Output: Apply 20% Discount :  2400

const applyTax = (taxRate) => (price) => price - (price * taxRate) / 100;
const applyTenPercentTax = applyTax(10);
console.log("Apply 10% Tax : ", applyTenPercentTax(2000)); //Output: Apply 10% Tax :  1800
console.log("---------------------------------------------- 1 ");
// Tagged Template Literals

function simpleTag(strings, ...values) {
	console.log("String : ", strings);
	console.log("Values : ", values);
	return strings.reduce((result, string, i) => {
		return result + string + (values[i] || " ");
	}, "");
}
const name = "John";
const age = 30;

const resultTag = simpleTag`Hello, my name is ${name} and I am ${age} years old.`;
console.log("resultTag : ", resultTag);
console.log("---------------------------------------------- 2 ");
