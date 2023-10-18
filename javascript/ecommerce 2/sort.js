var nums =[1,20,3 ,100];

nums.sort();

console.log(nums);

// sort => by deafult =>ascending 

// a= 1 , b=20 
// a < b = > return 1 

var animals =["elelphant","cat","dog","ant"];

animals.sort(function(a,b){
    if(a > b) return - 1
    if (a < b) return 1
     return 0 ;
});

console.log(animals);


var strings=["ab","a","b","abc"]

strings.sort(function(a,b){
    if(a > b) return - 1
    if (a < b) return 1
     return 0 ;
});

console.log(strings);


// a,b => adcending order 

// a >b => a -b = positive value => 0 => 1

// a < b= > a - b = negative value => < 0> -1 

// a == b => a - b = 0

// sort optional compare function 

// 1, 20,3, 100

// a = 1, b=20
// a < b => return -1 => 1,20

// a=20 b=3

// a> b=> return 1=> 3,20

// a=20 b=20
// a==b => return 0 => 20, 20


nums.sort(function(a,b){
    if(a > b) return - 1
    if (a < b) return 1
     return 0 ;
})

console.log(nums);


var employees=
[{name:"cherry",age:12},
{name:"Aviral",age:8},
{name:"varun",age:12}
];

// sort name in ascending order 

employees.sort(function(a,b){
    if(a.name > b.name) return - 1 
    if(a.name < b.name) return  1
    return 0 
})

console.log(employees);