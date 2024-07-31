// Summary
//1. All the three functions have one similarity, their first argument is always the ‘this’ value or context, that you want to pass to the function you call the method on.
//2. call() and apply() are invoked immediately, bind() returns a bound function, with the context, which will be invoked later.
//3. call() and apply() are similar the only difference being, arguments in apply() is passed as an array.

const finalPiValue = { pi: 3.14159 };
console.log("---------------------------------------------- 1");
// CAll

const calcAreaA = {
	pi: 3.14,
	area: function (r) {
		return this.pi * r * r;
	},
};

const resultA = calcAreaA.area.call(finalPiValue, 4);
console.log("resultA - Call : ", resultA);
// Output: resultA :  50.26544

console.log("---------------------------------------------- 2");

const cylinderA = {
	pi: 3.14,
	volume: function (r, h) {
		return this.pi * r * r * h;
	},
};

const resultB = cylinderA.volume.call(finalPiValue, 2, 4);
console.log("resultB - Call: ", resultB);
// Output: resultB - Call:  50.26544

console.log("---------------------------------------------- 3");

const cylinderB = {
	pi: 3.14,
	volume: function (r, h) {
		return this.pi * r * r * h;
	},
};

const resultC = cylinderB.volume.apply(finalPiValue, [2, 4]);
console.log("resultC - APPLY: ", resultC);
//Output: resultC - APPLY:  50.26544

console.log("---------------------------------------------- 4");

const cylinderC = {
	pi: 3.14,
	volume: function (...arg) {
		console.log(arg);
		// output: [ 2, 4 ]
		return this.pi * arg[0] * arg[0] * arg[1];
	},
};

const resultD = cylinderC.volume.apply(finalPiValue, [2, 4]);
console.log("resultD - APPLY: ", resultD);
// Output: resultD - APPLY:  50.26544

console.log("---------------------------------------------- 5");

const cylinderD = {
	pi: 3.14,
	volume: function (r, h) {
		return this.pi * r * r * h;
	},
};

const callBindMethod = cylinderD.volume.bind(finalPiValue);
const resultE = callBindMethod(2, 4);
console.log("resultE - Bind : ", resultE);

console.log("---------------------------------------------- 6");

const pokemon = {
	firstname: "Pika",
	lastname: "Chu",
	getPokeName: function () {
		const fullName = this.firstname + " " + this.lastname;
		return fullName;
	},
};

const pokeMonName = function (snack, hobby) {
	console.log(
		this.getPokeName() + " snack is " + snack + " and hobby is " + hobby
	);
};

const bindMethod = pokeMonName.bind(pokemon);
bindMethod("sushi", "algorithms");
