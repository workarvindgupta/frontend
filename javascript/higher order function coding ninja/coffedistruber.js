// Suppose you're working on a project where you need to process a list of customer orders for a coffee shop.



// Requirements

// Requirement 1:

// Each order is represented as an object with the following properties:

// "orderNumber" - a unique number identifying the order
// "items" - an array of objects representing the items ordered, where each item has a "name" and a "price" property
// "discountCode" - a string representing a discount code for the order (optional)

// Requirement 2:

// You need to write a function "totalOrderValue" that takes an array of order objects and a callback function as its input and returns the total value of all orders combined after applying any applicable discounts.
// The callback function, named "applyDiscount" should take two parameters: a discount code and total order value for a particular object, and applies the discount based on the following condition.
// If the discount code is "COFFEELOVER," apply a 10% discount.

// If the discount code is “TEALOVER,” apply a 20% discount.
// There may be cases where there is no discount code present in the order object.


// Note:

// You must use the map and reduce function to iterate over every object and to get the total value.
// The final ans should be converted to 2 decimal places.


// question  

const orders = [
    {
      orderNumber: 1,
      items: [
        { name: "Cappuccino", price: 3.5 },
        { name: "Chocolate Croissant", price: 2.5 }
      ]
    },
    {
      orderNumber: 2,
      items: [
        { name: "Latte", price: 4.0 },
        { name: "Blueberry Muffin", price: 2.75 }
      ],
      discountCode: "COFFEELOVER"
    }
  ];
  
  function totalOrderValue(orders, applyDiscount) {
    // Calculate the total order value with discounts applied
    const totalValue = orders.map((order) => {
      let orderTotal = order.items.reduce((acc, item) => acc + item.price, 0);
      if (order.discountCode) {
        orderTotal = applyDiscount(order.discountCode, orderTotal);
      }
      return orderTotal;
    });
  
    // Calculate the sum of all order values
    const grandTotal = totalValue.reduce((acc, value) => acc + value, 0);
  
    // Return the grand total with two decimal places
    return grandTotal.toFixed(2);
  }
  
  // Callback function to apply discounts
  function applyDiscount(discountCode, totalValue) {
    if (discountCode === "COFFEELOVER") {
      return totalValue * 0.9; // 10% discount
    } else if (discountCode === "TEALOVER") {
      return totalValue * 0.8; // 20% discount
    }
    return totalValue; // No discount
  }
  
  // Calculate the total order value
  const result = totalOrderValue(orders, applyDiscount);
  console.log(`Total Order Value: $${result}`);
  