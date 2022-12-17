//Time Function

//timer function : if you want to run the code at a specific time then use timer function

//setTimeout //setInterval

//setTimeout accepts a Function and Time
//setTimeout accepts Time in Milliseconds

// console.log("I am First")
// console.log("I am Second")
// console.log("I am Third")

// setTimeout((x) => {
//     console.log("I am from");
// },1000);

function names(){
    console.log("I amd from Name Function in setTimeout")
}

//Normal Function in setTimeout
setTimeout(function names(){
    console.log("I amd from Name Function in setTimeout")
},5000);

//Normal Function with just name
setTimeout(names,4000);

//Fat Arrow or Arrow function
let names = () => {
    console.log("I am from name function in setTimeOut");
};

//Arrow Function in SetTimeout

setTimeout(()=> {
    console.log("I am from name function in SetTimeout")
},2000);

//Arrow Function With Variable In setTimeout
