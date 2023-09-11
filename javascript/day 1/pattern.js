var num=["assignment", "problem", "media", "upload"];
var output=num.filter(function(elem){
    if(elem[0]=="a"||elem[elem.length-1]=="a")
        return elem;
});
console.log(output);