//Syntax error

// let a = 10;
// console.log(a;


//Type error

// let b = 10; 
// console.lo(b);

//try catch finally

//Main code comes under try block
//exception comes under catch block

let a = 1; 
let b = 2;
try {
    //throw = console.log + return

  throw a + b;

  throw c ;
  //catch c ;

    console.log(c);
} catch(error) {
    console.log("Error",error);
} finally {
    console.log("I am going to execute");
}
