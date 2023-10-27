
//filter 

const inputs=[4,10,2,-2,5,7,-3];


// 

const postive =inputs.filter(nonegative);


function nonegative(num){
   
        return num > 0;
    
}

console.log(`original Array': ${inputs}`)
console.log(` only postive numbers :${postive}`);

const neagtive = inputs.filter((num) => {
    return num < 0 
});

// function nopositive(num){

//     return num < 0 ;

//     console.log(`original Array': ${inputs}`)
// console.log(` only negative numbers :${neagtive}`);

console.log(neagtive);




