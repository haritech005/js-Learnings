console.log("challenge");
// 1️⃣ Use map – Convert Prices to a Different Currency
// You have an array of product prices in USD. Convert them to INR (1 USD = 83 INR).

// const pricesInUSD = [10, 25, 40, 100];
// // Output: [830, 2075, 3320, 8300]

const pricesInUSD = [10, 25, 40, 100];
const pricesInINR = pricesInUSD.map((price) => price * 83);
console.log(pricesInINR);

// 2️⃣ Use filter – Get Even Numbers
// Given an array of numbers, filter out only the even numbers.

// const numbers = [3, 7, 2, 8, 10, 21, 33, 16];
// // Output: [2, 8, 10, 16]

const numbers = [3, 7, 2, 8, 10, 21, 33, 16];
const evennumbers = numbers.filter((number) => number % 2 == 0);
console.log(evennumbers);

// 3️⃣ Use reduce – Calculate Total Sales
// You have an array of sales amounts. Find the total sales.

// const sales = [150, 200, 350, 400, 100];
// // Output: 1200

const sales = [150, 200, 350, 400, 100];
const sum = sales.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


// 4️⃣ Use map & filter – Get Names of Adults
// Given an array of people objects, return an array of names of people aged 18 or above.


// const people = [  
//   { name: "Alice", age: 17 },  
//   { name: "Bob", age: 22 },  
//   { name: "Charlie", age: 16 },  
//   { name: "David", age: 19 }  
// ];  
// // Output: ["Bob", "David"]  

const peoples = [  
      { name: "Alice", age: 17 },  
      { name: "Bob", age: 22 },  
      { name: "Charlie", age: 16 },  
      { name: "David", age: 19 }  
    ];  

const result = peoples.filter((people) => people.age>18).map((people) => people.name)
console.log(result);

// 5️⃣ Use map, filter, & reduce – Calculate Total Price of In-Stock Items
// Given an array of products, filter out only the items in stock, then map to get their prices, and finally reduce to get the total cost.

// const products = [  
//   { name: "Laptop", price: 50000, inStock: true },  
//   { name: "Phone", price: 30000, inStock: false },  
//   { name: "Tablet", price: 20000, inStock: true },  
//   { name: "Monitor", price: 15000, inStock: true }  
// ];  
//  Output: 85000 (Total of Laptop, Tablet, and Monitor)  

const products = [  
      { name: "Laptop", price: 50000, inStock: true },  
      { name: "Phone", price: 30000, inStock: false },  
      { name: "Tablet", price: 20000, inStock: true },  
      { name: "Monitor", price: 15000, inStock: true }  
    ];  

const resProduct = products.filter((product) => product.inStock).map((product) => product.price).reduce((acc,curr) => acc+curr)
console.log(resProduct);

