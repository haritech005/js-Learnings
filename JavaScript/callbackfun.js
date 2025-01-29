// console.log("hello");

// setTimeout(function() {  //this is called callback function which is the function that is passed as parameter to another function
//     console.log("world")
// }, 5000);

// function x(y){
//     console.log("x");
//     y()
// }
// x(function y(){
//     console.log("y");

// })

// function outer() {
//   let count = 0;
//   document.getElementById("btn").addEventListener("click", function xyz() {
//     console.log(`you have clicked me ${++count} times`);
//   });
// }
// outer();

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// function fetchData(callback){
//   console.log("Data is processing please wait");

//   setTimeout(() => {
//     let data = {name: "Sachin", age: 23};
//     callback(data);
//   }, 4000);
// }

// fetchData(function(bata){
//   console.log("Your data is processed",bata);

// })

// function processArray(arr, callback) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   console.log(result);
//   return result;
// }
// processArray([1, 2, 3, 4, 5], function (x) {
//   return x ** 2;
// });

// Input Array: [10, 15, 20, 25, 30]
// Callbacks and Expected Results:
// Filter numbers greater than 20:
// Callback: x => x > 20
// Result: [25, 30]
// Filter even numbers:
// Callback: x => x % 2 === 0
// Result: [10, 20, 30]
// Filter numbers divisible by 5:
// Callback: x => x % 5 === 0
// Result: [10, 15, 20, 25, 30]

// function filterArray(arr, callback) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       // Use the callback to decide whether to include the element
//       result.push(arr[i]); // Add the element to the result if the callback returns true
//     }
//   }
//   console.log(result); // Optional: Log the result for debugging
//   return result;
// }

// filterArray([12, 21, 44, 13, 14], function (x) {
//   return x > 20;
// });
