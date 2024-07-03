// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

// Methods
/*
set
get
size
delete
has
clear
keys
values
enteries
*/

const fruits = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
]);
console.log("fruits : ", fruits);
// Output: fruits :  Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }
fruits.set("grapes", 600);
console.log("fruits : ", fruits);
// Output
/*
fruits :  Map(4) {
  'apples' => 500,
  'bananas' => 300,
  'oranges' => 200,
  'grapes' => 600
}
*/
console.log("Get One : ", fruits.get("oranges"));
// Output: Get One :  200
console.log("Map Typeof : ", typeof fruits);
// Output: Map Typeof :  object
console.log("Check instance : ", fruits instanceof Map);
// Output: Check instance :  true
console.log("Size of Map : ", fruits.size);
// Output: Size of Map :  4

console.log("---------------------------------------------- 1 ");

const deleteFromMap = fruits.delete("apples");
console.log("deleteFromMap : ", deleteFromMap);
// Output: deleteFromMap :  true
console.log("fruits : ", fruits);
// Output: fruits :  Map(3) { 'bananas' => 300, 'oranges' => 200, 'grapes' => 600 }

console.log("---------------------------------------------- 2 ");

const checkItemFromMapA = fruits.has("bananas");
console.log("checkItemFromMapA : ", checkItemFromMapA);
// Output: checkItemFromMapA :  true

console.log("---------------------------------------------- 3 ");

fruits.forEach((fruit) => {
	console.log("fruit : ", fruit);
});
// Output
/*
fruit :  300
fruit :  200
fruit :  600
*/

console.log("---------------------------------------------- 3 ");

const fruitsMapValues = fruits.values();
console.log("fruitsMapValues : ", fruitsMapValues);
// Output: fruitsMapValues :  [Map Iterator] { 300, 200, 600 }

for (const x of fruitsMapValues) {
	console.log("X - values : ", x);
}
// Output
/*
X - values :  300
X - values :  200
X - values :  600 
*/

console.log("---------------------------------------------- 4 ");

const fruitsMapKeys = fruits.keys();
console.log("fruitsMapKeys : ", fruitsMapKeys);
// Output: fruitsMapKeys :  [Map Iterator] { 'bananas', 'oranges', 'grapes' }

for (const x of fruitsMapKeys) {
	console.log("X - keys : ", x);
}
//output
/*
fruitsMapKeys :  [Map Iterator] { 'bananas', 'oranges', 'grapes' }
X - keys :  bananas
X - keys :  oranges
X - keys :  grapes
*/

console.log("---------------------------------------------- 5 ");

const fruitsMapEntries = fruits.entries();
console.log("fruitsMapEntries : ", fruitsMapEntries);
// Output
/**
fruitsMapEntries :  [Map Entries] {
  [ 'bananas', 300 ],
  [ 'oranges', 200 ],
  [ 'grapes', 600 ]
}
*/

console.log("---------------------------------------------- 6 ");
