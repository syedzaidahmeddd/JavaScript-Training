// with flat we change multdimensional array to simple array
// (same meaning) it converts 2nested arrays to 1 single array
// it removes empty values from arrays

const arr = [[-1, 0], [1, 2], [3, 4], [5, 6]];
console.log(arr);
//arrName.flat() //Flatten

let output = arr.flat();
console.log(output);

const even = [2, 4, 8, 10, , 14, , 18];
console.log(even);
console.log(even.flat());