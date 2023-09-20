// Reversing a string
// Send Feedback
// Complete the function reverseString(), which accepts a string as its parameter, reverses it, and returns the string.



// Input

//  reverseString("hello");


// Output

// "olleh"


// Note:

// Note - Do not use any loop in implementation. 

// You can use methods like split() , join() and reverse() to solve the problem.


// answwer 



let str = "CodingNinjas";
function reverseString(str){
        let reverseStr = str.split("").reverse().join("");
        return reverseStr;
}
