//Bitwise ... Bit ... Bit 0 and 1 

//1 Byte = 8 Bits

//bitwise AND &
//Bitwise OR |
//Bitwise XOR ^
//Bitwise NOR ~
//Left Shift
//Right Shift

/*
javaScript Bitwise AND &
0 ==> 0 (kahi pe bhi 0 dikha toh 0 rehta)
Bitwise AND & retursn 1 if the corresponding bits of both operands are 1 else
Operand 1   Operand 2  AND   Operation
0           0          0&0     0
0           1          0&1     0
1           0          1&0     0
1           1          1&1     1



Bitwise OR| 1 ==> 1 (kahi pe bhi 1 = 1)
Operand 1   Operand 2  OR    Operation
0           0          0|0    0
0           1          0|1    1
1           0          1|0    1
1           1          1|1    1

Bitwise XOR ^
Same people 0 
Different people 1
Operand 1  Operand 2  XOR   Operation
0          0          0^0   0
0          1          0^1   1
1          0          1^0   1
1          1          1^1   0


Bitwise NOT ~ 
(opposite hojata)
0 ==> 1
1 ==> 0
NOT formula: ~(n)=-(n+1)
Operand 1      Operation
0               1
0               1 
1               0
1               0


Left shift 
a<<b ax2 power b

let a1 = 10;
let b1 = 4;
console.log(a1<<b1);

Right shift 
a>>b a/2 power b

console.log(a1>>b1);
*/

/*
Binary Numbers 0 and 1 

bytes of 0-10
0=0000
1=0001
2=0010
3=0011
4=0100
5=0101
6=0110
7=0111
8=1000
9=1001
10=1010
12=1100
*/

let f = 10;
console.log(~f);