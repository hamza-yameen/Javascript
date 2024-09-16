console.log("Factorial Calculation ----------------------- 1 ");

function factorial(n) {
	if (n <= 1) {
		return 1;
	}
	return n * factorial(n - 1);
}
const factorialResult = factorial(5);
console.log("factorialResult : ", factorialResult);

console.log("Sum of Array Element ----------------------- 2 ");

function sumArray(array) {
	if (array.length === 0) return 0;
	return array[0] + sumArray(array.splice(1));
}
console.log("Sum of Array : ", sumArray([1, 2, 3, 4, 5]));

console.log("Flatten a Nested Array ----------------------- 3 ");

function flatternArray(arr) {
	return arr.reduce((flat, toFlatten) => {
		return flat.concat(
			Array.isArray(toFlatten) ? flatternArray(toFlatten) : toFlatten
		);
	}, []);
}
console.log("flatternArray : ", flatternArray([1, [2, [3, 4], 5], 6]));
