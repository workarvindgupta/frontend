// currying in js 



// function add1(a,b,c){
//     return a+b+c;
// }

// console.log(add1(4,5,6));


// function add2(a){
//     return function(b){
//         return function(c){
//             return a+b+c;;
//         };
//     };
// }

// console.log(add2(7),(5),(3));


// function power(a,b){
//     return b ** a;

// }

function power (b){
    return function(a){
        return a**b
    }
}

const square =power(2);

console.log(square);

console.log(square(4));
console.log(square(5));
console.log(square(8));


const cube=power(3);

console.log(cube(8));

console.log(cube(115));