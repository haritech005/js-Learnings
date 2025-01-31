// console.log("promise");

// let cart = ["shirt", "pant", "shoes"];
// createOrder(cart, function () {
//   //callback hell , inversion of control
//   proceedToPay(orderId);
// });

// let promise = createOrder(cart);

// promise.then(function () {
//   proceedToPay(orderId);
// });

// const USER_API = "https://jsonplaceholder.typicode.com/users"
// const user = fetch(USER_API).then((data) => data.json()).then((result) => console.log(result.name))
// console.log(user);



const USER_API = "https://jsonplaceholder.typicode.com/users";

fetch(USER_API)
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => console.log(user.name));
  });

console.log("Fetching users...");  // This will likely print first due to async behavior



