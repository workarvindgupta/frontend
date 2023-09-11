var number=[1, 2, 3, 4, 5, 6];
var output=number.map(function(elem){
         return elem*elem*elem;
}).filter(function(elem){
    return elem%3==0;
}).reduce(function(ac, el){
      return ac+el;
});
console.log(output);