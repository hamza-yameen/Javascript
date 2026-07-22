// delete : Removes an element but leaves an empty slot

let arr_delete = [1, 2, 3, 4, 5];
console.log("Array Delete Before: ", arr_delete);
const deletedElement = arr_delete[2];
delete arr_delete[2];
console.log("Array Delete After: ", arr_delete, "Length: ", arr_delete.length);
console.log("Deleted Element: ", deletedElement);

