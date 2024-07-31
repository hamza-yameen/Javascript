// Prototype and __proto__

function Vehicle(make, model, color) {
	this.make = make;
	this.model = model;
	this.color = color;
	this.getName = function () {
		return this.make + " " + this.model;
	};
}
const car1 = new Vehicle("Toyota", "2020", "Black");
const car2 = new Vehicle("Toyota", "2020", "Black");
console.log("Vehicle-1 : ", car1.__proto__);
// output: Vehicle-1 :  {}
console.log("Vehicle-2 : ", car2.__proto__);
// output: Vehicle-2 :  {}
console.log("Vehicle-3 : ", Vehicle.prototype);
// output: Vehicle-3 :  {}
console.log("Vehicle-4 : ", Vehicle.prototype.constructor);
// output: Vehicle-4 :  [Function: Vehicle]
Vehicle.prototype.year = "2024";
console.log("Vehicle-5 : ", car1.__proto__);
// Output: Vehicle-5 :  { year: '2024' }
console.log("Vehicle-6 : ", car2.__proto__);
// Output: Vehicle-6 :  { year: '2024' }
console.log("Vehicle-7 : ", Vehicle.prototype);
// Output: Vehicle-7 :  { year: '2024' }
car1.__proto__.price = "10000000";
console.log("Vehicle-8 : ", car1.__proto__);
// Output: Vehicle-8 :  { year: '2024', price: '10000' }
console.log("Vehicle-9 : ", car2.__proto__);
// Output: Vehicle-9 :  { year: '2024', price: '10000' }
console.log("Vehicle-10 : ", Vehicle.prototype);
// Output: Vehicle-10 :  { year: '2024', price: '10000' }
console.log("Car1 ProtoType", Object.getPrototypeOf(car1));
// Output: Car1 ProtoType { year: '2024', price: '10000000' }

console.log("---------------------------------------------- 1 ");

// Get Prototype
const x = function () {};
console.log("Get prototype of x", Object.getPrototypeOf(x));
// Output: Get prototype of x {}

console.log("---------------------------------------------- 2 ");

const Animal = function (name) {
	this.name = name;
};

Animal.prototype.walk = function () {
	console.log(this.name + " walks");
};

const poo = new Animal("poo");
const tommy = new Animal("tommy");

poo.walk();
// Output: poo walks
tommy.walk();
// Output: tommy walks

console.log("---------------------------------------------- 3 ");

class Hero {
	constructor(name, level) {
		this.name = name;
		this.level = level;
	}
	greet() {
		return `${this.name} says hello.`;
	}
}
const hero1 = new Hero("Varg", 1);
console.log("hero1 : ", hero1);
// Output: hero1 :  Hero { name: 'Varg', level: 1 }

console.log("---------------------------------------------- 4");

function SuperType(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

console.log("SuperType-1 : ", SuperType.prototype);
// Output: uperType-1 :  {}

SuperType.prototype.getSuperName = function () {
	return this.firstName + " " + this.lastName;
};

console.log("SuperType-2 : ", SuperType.prototype);
// Output: SuperType-2 :  { getSuperName: [Function (anonymous)] }

function SubType(firstName, lastName, age) {
	SuperType.call(this, firstName, lastName);
	this.age = age;
}

console.log("SubType-3 : ", SubType.prototype);
// Output: SubType-3 :  {}

SubType.prototype = Object.create(SuperType.prototype);

console.log("SubType-4 : ", SubType.prototype);
// Output: SubType-4 :  SuperType {}

SubType.prototype.getSubAge = function () {
	return this.age;
};

console.log("SubType-5 : ", SubType.prototype);
// Output: SubType-5 :  SuperType { getSubAge: [Function (anonymous)] }

var subTypeObj1 = new SubType("Virat", "Kohli", 26);
console.log("SubType-6 : ", subTypeObj1);
// Output: SubType-6 :  SuperType { firstName: 'Virat', lastName: 'Kohli', age: 26 }

console.log(subTypeObj1.firstName);
// Output: Virat
console.log(subTypeObj1.age);
// Output: 26
console.log(subTypeObj1.getSuperName());
// Output: Virat Kohli
console.log(subTypeObj1.getSubAge());
// Output: 26

console.log("---------------------------------------------- 5");

const myObj = {
	clown: "🤡",
	police: "👮",
	santa: "🎅",
	farmer: "👩‍🌾",
};

const myObj2 = myObj;

console.log("myObj2 : ", myObj2);
// Output: myObj2 :  { clown: '🤡', police: '👮', santa: '🎅', farmer: '👩‍🌾' }

const myObj3 = Object.assign({}, myObj);

console.log("myObj3 : ", myObj3);
// Output: myObj3 :  { clown: '🤡', police: '👮', santa: '🎅', farmer: '👩‍🌾' }

console.log("---------------------------------------------- 6");

const myObjA = {
	clown: "🤡",
	police: "👮",
	santa: "🎅",
	farmer: "👩‍🌾",
};

myObjA.clown = "scary";
myObjA.astronaut = "👨‍🚀";

Object.freeze("myObjA : ", myObjA);

myObjA.clown = "really scary";
myObjA.student = "👩‍🎓";
delete myObjA.santa;

console.log(myObjA);

console.log(Object.isFrozen(myObj));
// Output: false

Object.freeze(myObj);

console.log(Object.isFrozen(myObj));
// Output: true
