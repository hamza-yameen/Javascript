// Splice Method
// The splice method helps you add new items to an array.
// The splice method changes the original array.
// The splice method return deleted item in array.

const cars = ["Bmw", "Ford", "Audi", "Amg", "Bentely", "Farrari"];
cars.splice(2, 2, "Chevrolet");

// 1. Use the first number to decide where in the array you want to add new items.
// 2. The second number tells how many existing items you want to remove.
// 3. After that, you list the new items you want to add, like "Chevrolet".

console.log("cars : ", cars);
console.log("----------------------------------------------");

// Adding Elements
const carsFirstArray = ["Bmw", "Ford", "Audi", "Amg", "Bentely", "Farrari"];
console.log("Adding Elements ----- ", carsFirstArray);

carsFirstArray.splice(1, 0, "Chevrolet");
console.log(carsFirstArray);

carsFirstArray.splice(carsFirstArray.length, 0, "Cadillac", "Alfa Romeo");
console.log(carsFirstArray);

console.log("----------------------------------------------");

// Removing Elements
const carsSecondArray = ["Bmw", "Ford", "Audi", "Amg", "Bentely", "Farrari"];
console.log("Removing Elements ----- ", carsSecondArray);

carsSecondArray.splice(3, 1);
console.log(carsSecondArray);

const deletedItemArray = carsSecondArray.splice(2, 2);
console.log("Original Array : ", carsSecondArray);
console.log("deleted Item Array ", deletedItemArray);

console.log("----------------------------------------------");

// Replacing elements
const carsThirdArray = ["Bmw", "Ford", "Audi", "Amg", "Bentely", "Farrari"];
console.log("Replacing elements ----- ", carsThirdArray);

carsThirdArray.splice(3, 1, "Chevrolet");
console.log(carsThirdArray);
