// Write a JavaScript function to convert a binary number to a decimal number.

// Test Data: console.log(bin_to_dec('110011')); console.log(bin_to_dec('100')); 51 4





function bin_to_dec(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));