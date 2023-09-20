// Array of duplicate elements
// Send Feedback
// Create a function to get all the duplicate elements from an array.


// Requirement:

// The function findDuplicate should take an array as a parameter.
// Create a new Array of all the duplicate elements present in the array 
// Should return the newly formed array.


// Input

// let arr = [4, 2, 34, 4, 1, 12, 1, 4];


// Output

// [4,1]

// answer



let arr = [4, 2, 34, 4, 1, 12, 1, 4];
    
function findDuplicate(arr) {
var arrDup = [];
for (var i in arr) {
if (arr.indexOf(arr[i]) != i && arrDup.indexOf(arr[i]) == -1) {
arrDup.push(arr[i]);
}
}
return arrDup;
}

// console.log(findDuplicate);