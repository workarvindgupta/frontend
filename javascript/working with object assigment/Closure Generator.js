function generateID(startValue) {
    let count = startValue;
  
    return function() {
      const year = new Date().getFullYear();
      return `A_${year}_${count++}`;
    };
  }
  
  // Create a generator starting from 2
  let getID = generateID(2);
  
  // Generate and log IDs
  console.log(getID()); // A_2023_2
  console.log(getID()); // A_2023_3
  