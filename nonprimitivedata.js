//Non Primitive Data
// try to use const
//1. Object ... key value
// Datatype of object is array
//Objects are mutable
//2. Arrays ... values
// there are no array data types
// array follows index method (0,1,2,3,...)
// array starts from 0 **
// array = []
// comma define index = [0,12,3,421]

const person = {
    name: "Zaid",
    age: 20,
    isAlive: false,
    gender: "male",
};
console.log(typeof person);
console.log(person);
console.log(person.name); //dot notation
console.log(person["gender"]) //arrayMethod

const zaidBank = {
    accountNumber: 9780970974,
    fullName: "Syed Zaid Ahmed",
    bankName: "SBI",
    number: 748067081,
    balance: 10e10,
    IFSC: "awfaw14078",

};
console.log(typeof zaidBank);

zaidBank.bankName = "HDFC" //objects are mutable
console.log(zaidBank)


const arr1 = ["Zaid", 20, 09789096, true];
let arr2 = [2, 4, 5, 7, 8, 10];

console.log(arr1);
console.log(arr2);

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//            0,1,2,3,4,5,6,7,8,9

console.log(arr3[0])
console.log(arr3[3])

arr3[9] = 100;

console.log(arr3["9"])