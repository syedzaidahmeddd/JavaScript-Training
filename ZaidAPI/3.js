//Modules Import and Export

// 

//table(4)

// function tableGenerator(num) {
//     for (let i=1 ; i<= 10; i++) {
//         console.log(`${num} X ${i} = ${num * i}`);
//     }
// }
// tableGenerator(4);

let table = (x) => {
    for (let i =0 ; i<= 10; i++) {
        console.log(`${x} X ${i} = ${x * i}`);
    }
};
let table3 = (x) => {
    for (let i =0 ; i<= 10; i++) {
        console.log(`${x} X ${i} = ${x * i}`);
    }
};

export default table;
export {table,table3}

w