//slice() to select specific value from a string
// starts value is taken from index 0 , end value takes from length

let data = "Zaid";
console.log(data.slice(1,3));

//split ==> string ==> array (converts string to array)

let data1 = "safwan*zaid*ibrahim*ahmed";
let finalData = data1.split("*");
console.log(finalData[2]);

//trim => removes extra spaces from start and end only not in between

let data2 = "     zaid    ";
console.log(data.trim());

