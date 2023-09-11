// function returning function 


function greet(message){
    return function (wishes){
        console.log(`${wishes},${message}`);
    }
}

// const greeting =greet("i hope u are happy now");

// greeting("hi");

greet("welcome to the session ")("hi")