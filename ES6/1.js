/*
var
let
const

Scoping : 

1.Block Scope
2. Function Scope
3. Global Scope
*/

//1. Block scope
//var works ==> in and out block
//let ==> only in block
//const ==> only in block
{
    var a = 10;
    console.log(a);
}
    console.log(a);

//2. Function Scope
//var ==> only in block
//let ==> only in block
//const ==> only in block
function a1() {
    var a = 10;
    console.log(a);
}
a1();

//3. Global Scope
//works everywhere