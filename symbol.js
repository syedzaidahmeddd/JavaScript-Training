//used "Symbol" to store same value with different call number

let s1 = Symbol(10); //Call stack 10 ... 12914214
let s2 = Symbol(10); //Call stack 10 ... 59086590
console.log(s1 == s2);

let s3 = 10;
let s4 = 10;

console.log(s3 == s4);
