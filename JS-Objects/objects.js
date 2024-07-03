const person = {
	firstname: "John",
	lastname: "Doe",
	age: 50,
	eyecolor: "blue",
};

console.log("person-1 : ", person);
//Output : person-1 :  { firstname: 'John', lastname: 'Doe', age: 50, eyecolor: 'blue' }
person.nationality = "English";
console.log("person-2 : ", person);
// Output:
/*
person-2 :  {
  firstname: 'John',
  lastname: 'Doe',
  age: 50,
  eyecolor: 'blue',
  nationality: 'English'
}
*/
person["city"] = "Lahore";
console.log("person-3 : ", person);
// Output:
/*
person-3 :  {
  firstname: 'John',
  lastname: 'Doe',
  age: 50,
  eyecolor: 'blue',
  nationality: 'English',
  city: 'Lahore'
}
*/
const deleteObjectPropertyA = delete person.age;
console.log("person-4 : ", person);
// Output :
/*
person-4 :  {
  firstname: 'John',
  lastname: 'Doe',
  eyecolor: 'blue',
  nationality: 'English',
  city: 'Lahore'
}
*/
console.log("deleteObjectPropertyA : ", deleteObjectPropertyA);
// Output: deleteObjectPropertyA :  true

console.log("---------------------------------------------- 1 ");

const personA = {
	firstName: "John",
	lastName: "Doe",
	id: 5566,
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};

console.log("personA-1 : ", personA.fullName());
// Output: personA-1 :  John Doe

personA.getId = function () {
	return this.id;
};

console.log("personA-2 : ", personA.getId());
// Output: personA-2 :  5566

console.log("---------------------------------------------- 2 ");

const personAValuesA = Object.values(personA);
console.log("personAValuesA : ", personAValuesA);
// Output: personAValuesA :  [ 'John', 'Doe', 5566, [Function: fullName], [Function (anonymous)] ]

const personAKeysA = Object.keys(personA);
console.log("personAKeysA : ", personAKeysA);
// Output: personAKeysA :  [ 'firstName', 'lastName', 'id', 'fullName', 'getId' ]

const personAEntriesA = Object.entries(personA);
console.log("personAEntriesA : ", personAEntriesA);
// Output:
/**
personAEntriesA :  [
  [ 'firstName', 'John' ],
  [ 'lastName', 'Doe' ],
  [ 'id', 5566 ],
  [ 'fullName', [Function: fullName] ],
  [ 'getId', [Function (anonymous)] ]
]
*/

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };
for (let [f, v] of Object.entries(fruits)) {
	console.log(f, v);
}
// output:
/*
Bananas 300
Oranges 200
Apples 500
*/

console.log("---------------------------------------------- 3 ");

function PersonA(first, last, age, eye) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
}

const myFatherA = new PersonA("John", "Doe", 50, "blue");
console.log("myFatherA : ", myFatherA);
// Output:
/*
myFatherA :  PersonA {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
}
*/
const myMotherA = new PersonA("Sally", "Rally", 48, "green");
console.log("myMotherA : ", myMotherA);
// Output:
/*
myMotherA :  PersonA {
  firstName: 'Sally',
  lastName: 'Rally',
  age: 48,
  eyeColor: 'green'
}
*/
PersonA.prototype.nationality = "English";
console.log("myFatherA : ", myFatherA.nationality);
// Output: myFatherA :  English
const myFatherB = new PersonA("John", "Doe", 50, "blue", "None");
console.log("myFatherB : ", myFatherB);
console.log("myFatherB : ", myFatherB.nationality);

console.log("---------------------------------------------- 4 ");

const person1A = {
	firstName: "John",
	lastName: "Doe",
	age: 50,
	eyeColor: "blue",
};

const person2A = { firstName: "Anne", lastName: "Smith" };

const objectAssignA = Object.assign(person1A, person2A);
console.log("objectAssignA : ", objectAssignA);
