// Define a rectangle object
const rectangle = {
    length: 5,   
    width: 5,    
    area: function() {
      return this.length * this.width;
    },
    perimeter: function() {
      return 2 * (this.length + this.width);
    }
  };
  

  console.log("Area:", rectangle.area());         
  console.log("Perimeter:", rectangle.perimeter()); 
  
