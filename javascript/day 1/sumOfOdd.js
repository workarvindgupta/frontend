var number=[1, 2, 3, 4];
var output=number.filter(function(elem){
      return elem%2!==0;
      
}).reduce(function(ac, elem){
    return ac+elem;
})
console.log(output);
