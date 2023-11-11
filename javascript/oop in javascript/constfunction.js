const movieobj={
    title:'the avengers',
    year:2012,
    getDetails() {
        console.log(`
        Title: ${this.title}
        Year: ${this.year}`);
    },
};


function movie(title,year){
    const movieobj={
        title:title,
        year:year,
        getDetails() {
            console.log(`
            Title: ${this.title}
            Year: ${this.year}`);
        },
    };

    return movieobj;

}


const movie1 =movie("hero",2096);

console.log(movie1);

movie1.getDetails();


// const movie2 =movie("zero",2047);

// console.log(movie2);

// movie2.getDetails();

// constructor function 

function Movie(title,year){

    this.title = title;
    this.year=year;

    this.getDetails =function()
    {
        console.log(`
            Title: ${this.title}
            Year: ${this.year}`);
        
    }


}

// new keyword 

const movie2 = new Movie("avatar" ,2456);

console.log(movie2);

movie2.getDetails();