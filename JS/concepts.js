console.log([] == []);
// Output: false

console.log({} == {});
// Output: false

console.log(typeof []);
// Output: object

console.log(typeof {});
// Output: object

console.log("False - Falsy: ", false, " - ", +false);
// Output : False - Falsy:  false 0

console.log("True - Truthy: ", true, " - ", +true);
// Output : True - Truthy:  true 1

console.log("Array True And False : ", [] + " - " + ![] + " - " + !![]);
//Output : [] - false - true

console.log("Object True And False :", {} + " - " + !{} + " - " + !!{});
// Output: [object Object] - false - true

console.log([], ![], ![23, 23, 32, 3], +![23, 23, 32, 3]);
// Output: [] false false 0

console.log([], +[], +[23, 23, 32, 3], !+[23, 23, 32, 3]);
// Output: [] 0 NaN true

console.log({}, +{}, +{ a: 23, b: 23, c: 3 });
// Output: {} NaN NaN

console.log({}, !{}, !{ a: 23, b: 23, c: 3 });
// Output: {} false false

console.log(true == []);
// Output: false

console.log(true == !![]);
// Output: true

console.log(true == ![]);
// Output: false
