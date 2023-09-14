

var amazon =[
    {name:"speakers",price:5400,rating:4},
    {name:"headphone",price:3000,rating:3},
    {name:"playstation",price:20000,rating:5}
];


// all products name and rating 

// for (var i = 0; i < amazon.length; i++) {
//     productNames.push(amazon[i].name);
//     productRatings.push(amazon[i].rating);
//   }


// for(var i=0;i <amazon.length;i++){
//     console.log(amazon);
// }


//average rating 

var sum=0;
for(var i=0; i<amazon.length;i++){
    // console.log(amazon[i].rating); rating aaega isse se 
   // console.log(amazon[i].name); name aaega isse se 
     sum += amazon[i].rating;   

}
console.log(sum/amazon.length);




 var min=19999;
 for(var i=0; i<amazon.length;i++){

     if(min>amazon[i.price]){
         min=amazon[i].price;
     }
 
 }

 console.log(min);

