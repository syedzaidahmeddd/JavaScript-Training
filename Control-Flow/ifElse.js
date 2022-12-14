//if using if ... if a condition is true or false
//if statement will only execute if condition is true(true,1,10, all number except0 , " ")
//if condition is false then code block is left alone
//"" ==> 0 , " " ==> 1

/*

if(condition) {
    //code
}

*/


let a = 2;
let b = 2;
if (a == b) {
    console.log("yes, they are equal")
}


//if else if ..if has false then it will else block

let a1 = 10;
let a2 = 20;

if (a1 == a2) {
    console.log("I am in if statement");
}
else {
    console.log("I am coming because if has false value")
}

//for 3 conditions ifelseif

let value = 70;

if (value == 10) {
    console.log("i am coming because value is 10")
}
else if (value < 20) {
    console.log("i am coming because value 20 se badh ke hai")
}
else {
    console.log("i am coming because value is false or null or undefined")
}