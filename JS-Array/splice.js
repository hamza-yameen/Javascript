// Splice Method
// The splice method helps you add new items to an array.
// The splice method changes the original array.
// The splice method return deleted item in array.

// Difference between the splice() and toSpliced()
// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array,
// keeping the original array unchanged, while the old method altered the origin

const cars = ["Bmw", "Ford", "Audi", "Amg", "Bentely", "Farrari"];
cars.splice(2, 2, "Chevrolet");
console.log("cars : ", cars);
// Output: cars :  [ 'Bmw', 'Ford', 'Chevrolet', 'Bentely', 'Farrari' ]

// 1. Use the first number to decide where in the array you want to add new items.
// 2. The second number tells how many existing items you want to remove.
// 3. After that, you list the new items you want to add, like "Chevrolet".

console.log("---------------------------------------------- 1");

// Adding Elements
const carsFirstArray = ["Bmw", "Ford", "Audi", "Amg", "Bentely", "Farrari"];
console.log("Adding Elements ----- ", carsFirstArray);
//Output: Adding Elements -----  [ 'Bmw', 'Ford', 'Audi', 'Amg', 'Bentely', 'Farrari' ]

carsFirstArray.splice(1, 0, "Chevrolet");
console.log(carsFirstArray);
// Output: [ 'Bmw', 'Chevrolet', 'Ford', 'Audi', 'Amg', 'Bentely', 'Farrari' ]

carsFirstArray.splice(carsFirstArray.length, 0, "Cadillac", "Alfa Romeo");
console.log(carsFirstArray);
// Output: ['Bmw', 'Chevrolet', 'Ford', Audi', 'Amg', 'Bentely', 'Farrari', 'Cadillac', 'Alfa Romeo']

console.log("---------------------------------------------- 2");

// Removing Elements
const carsSecondArray = ["Bmw", "Ford", "Audi", "Amg", "Bentely", "Farrari"];
console.log("Removing Elements ----- ", carsSecondArray);
// Output: Removing Elements -----  [ 'Bmw', 'Ford', 'Audi', 'Amg', 'Bentely', 'Farrari' ]

carsSecondArray.splice(3, 1);
console.log(carsSecondArray);
// Output: [ 'Bmw', 'Ford', 'Audi', 'Bentely', 'Farrari' ]

const deletedItemArray = carsSecondArray.splice(2, 2);
console.log("Original Array : ", carsSecondArray);
// output: Original Array :  [ 'Bmw', 'Ford', 'Farrari' ]
console.log("deleted Item Array ", deletedItemArray);
// Output: deleted Item Array  [ 'Audi', 'Bentely' ]

console.log("---------------------------------------------- 3");

// Replacing elements
const carsThirdArray = ["Bmw", "Ford", "Audi", "Amg", "Bentely", "Farrari"];
console.log("Replacing elements ----- ", carsThirdArray);
// Output: Replacing elements -----  [ 'Bmw', 'Ford', 'Audi', 'Amg', 'Bentely', 'Farrari' ]

carsThirdArray.splice(3, 1, "Chevrolet");
console.log(carsThirdArray);
// Output:  'Bmw', 'Ford', 'Audi', 'Chevrolet', 'Bentely', 'Farrari' ]
