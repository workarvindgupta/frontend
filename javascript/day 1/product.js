var number=[1, 2, 3, 4];
var output=number.reduce(function(ac, el){
    return ac*el;
});
console.log(output);