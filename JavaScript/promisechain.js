// console.log("promise chain");
// console.log("hello")

// const cart = ["chocolate","biscut","mangoes"];

// const promise = createOrder(cart)

// promise.then(function(orderId){
//     console.log(orderId);

// })

// function createOrder(cart){

//     const pr = new Promise (function(resolve,reject){
//         if(!validateCart(cart)){
//             let error = new Error("Cart is not valid");
//             reject(error);
//         } else {
//             const orderId = "12345"; // Simulating order ID
//             resolve(orderId);
//         }
//     })
//     return pr;
// }

// function validateCart(cart){
//     return true;
// }

const cart = ["note", "book", "pen"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
    return;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch((err) => console.log(err.message));

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    //create Order
    //Validate order
    //orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    } else {
      const OrderId = Math.floor(Math.random() * 100);
      resolve(OrderId);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve) {
    resolve("payment is successful");
  });
}

function validateCart(cart) {
  //cart is an array need to check array has value or not
  return cart.length > 0;
}
