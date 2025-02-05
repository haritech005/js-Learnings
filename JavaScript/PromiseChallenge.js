console.log("promise")
// Task 1: Food Ordering System
// 📌 Scenario: You need to create a simple food ordering system using Promises.

// 🔹 Steps:

// Take an order from a customer (return an order ID).
// Prepare the food (takes 2 seconds, then returns "Food is ready").
// Deliver the food (returns "Food is delivered").
// 💡 Hint:

// Use setTimeout inside the Promise to simulate delays.
// Implement chaining: takeOrder → prepareFood → deliverFood.

let order = true
createOrder(order)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
    .then(function (orderId) {
      return prepareFood(orderId);
    })
    .then(function (foodInfo) {
      console.log(foodInfo);
      return foodInfo;
    })
    .then(function(orderId){
        return deliverFood(orderId)
    })
    .then(function(deliverInfo){
        console.log(deliverInfo)
        return deliverInfo;
        
    })
  
  
  function prepareFood(orderId) {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve(`Food is ready for order ID: ${orderId}`);
      }, 10000);
    });
  }

  function deliverFood(orderId){
    return new Promise(function(resolve) {
        resolve(`Food is delivered for Order ID: ${orderId}`);
    })
  }





function createOrder(order) {
    const pr = new Promise((resolve, reject) => {
  
      if (!validateCart(order)) {
        const err = new Error("Cart is not valid");
        reject(err);
      } else {
        const OrderId = Math.floor(Math.random() * 100);
        resolve(OrderId);
      }
    });
    return pr;
  }


  function validateCart(order) {
    //cart is an array need to check array has value or not
    return order;
  }
  