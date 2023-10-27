// Grocery Delivery Service
// Send Feedback
// Suppose you're working on a project for an online grocery delivery service, and you have an array of product objects that represent the available products in the store.



// Requirements

// Requirement 1:

// Each product object has the following properties:
// id (string) - unique ID for the product
// name (string) - name of the product
// category (string) - category in which the product belongs
// price (number) - price of the product
// inStock (boolean) - true if the product is currently in stock, false otherwise

// Requirement 2:

// You need to implement a function searchAndBuyProduct that allows the user to search for a product by its name and buy it if it is in stock. The function should take two parameters:

// productList (array) - an array of product objects 
// productName (string) - the name of the product to search for

// Requirement 3:

// Here are the steps to implement the searchAndBuyProduct function:

// 1. Use the find or findIndex method to search for the product object whose name matches the productName parameter.
// 2. Check if the product is in stock.
// 3. If the product is in stock: 

//     - Set the inStock property of the product object to false .

//     - Return true indicating that purchase has been made.
// 5. If the product is not in stock, return false.

// question 



const productList = [
    { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
    { id: "p2", name: "Oranges", category: "Fruits", price: 1.99, inStock: false },
    { id: "p3", name: "Blueberries", category: "Fruits", price: 4.99, inStock: true },
    { id: "p4", name: "Carrots", category: "Vegetables", price: 1.0, inStock: true },
    { id: "p5", name: "Tomatoes", category: "Vegetables", price: 1.5, inStock: true }
  ];
  
  function searchAndBuyProduct(productList, productName) {
    // Use the find method to search for the product by name
    const product = productList.find((item) => item.name === productName);
  
    // If the product is found and is in stock, mark it as out of stock
    if (product && product.inStock) {
      product.inStock = false;
      return true; // Purchase successful
    } else {
      return false; // Product not found or not in stock
    }
  }
  
  // Example usage
  const productNameToSearch = "Oranges";
  const purchaseResult = searchAndBuyProduct(productList, productNameToSearch);
  
  if (purchaseResult) {
    console.log(`${productNameToSearch} has been purchased.`);
  } else {
    console.log(`${productNameToSearch} is not available or not in stock.`);
  }
  