//Logical > True and False
//           1         0
//2 conditions hai toh logical operation use karna

//Logical AND &&
//Logical OR  ||
//Logical NOT !

/*

A    B    A&&B

F    F    F
F    T    F
T    F    F
T    T    T


A    B    A||B

F    F    F
F    T    T
T    F    T
T    T    T

Logical NOT !

!True = False
!False = True

*/

let a = 10;
let b = 5;
console.log(a>b && b>a); 

console.log(a>b || b>a);

let c = false
console.log(!c);
