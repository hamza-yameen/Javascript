// The copyWithin() method in JavaScript is used to shallow copy a part of an array to another location in the same array without changing its length.
// This method modifies the original array and returns it.

// arr.copyWithin(target, start, end)
// 1. target: The index at which to copy the sequence to. If negative, it is counted from the end of the array.
// 2. start: The index at which to start copying elements from. If negative, it is counted from the end of the array. Default is 0.
// 3. end: The index at which to stop copying elements from (exclusive). If negative, it is counted from the end of the array. Default is the array's length.

const arrA = [2, 5, 8, 10, 11, 12, 15];
const result = arrA.copyWithin(2, 4, 6);
console.log("arrA : ", arrA);
// Output arrA :  [2,  5, 11, 12, 11, 12, 15]
console.log("result : ", result);
// Output result :  [2,  5, 11, 12, 11, 12, 15]

console.log("---------------------------------------------- 1 ");

const arrB = [2, 5, 8, 10, 11, 12, 15];
arrB.copyWithin(1, 2, 4);
console.log("arrB : ", arrB);
// Output: arrB :  [2,  8, 10, 10, 11, 12, 15]

console.log("---------------------------------------------- 2 ");

let arrC = [1, 2, 3, 4, 5];
arrC.copyWithin(-2, -3, -1);
console.log("arrC : ", arrC);
//Output: arrC :  [ 1, 2, 3, 3, 4 ]

console.log("---------------------------------------------- 2 ");

let arrD = [1, 2, 3, 4, 5];
arrD.copyWithin(0, 3);
console.log("arrD : ", arrD);
// Output : arrD :  [ 4, 5, 3, 4, 5 ]
