// 1️⃣ Challenge: Fetch Data from an API
// Write an async function that fetches user data from https://jsonplaceholder.typicode.com/users and logs only the names.

// Expected Output:
// User Names: John, Jane, Doe, ...
// ✅ Hint: Use fetch(), await, and .map() to extract names.

// async function displayName() {
//   try {
//     const URL = "https://jsonplaceholder.typicode.com/users";
//     const data = await fetch(URL);
//     const results = await data.json();
//     console.log(results);

//     const names = results.map((result) => console.log(result.name));
//   } catch (err) {
//     console.log(err);
//   }
// }

// displayName();

// 2️⃣ Challenge: Delay Execution using setTimeout
// Create an async function called waitAndGreet that waits 3 seconds before printing "Hello, Async/Await!" to the console.

// Expected Output (after 3 sec delay):
// Hello, Async/Await!
// ✅ Hint: Use setTimeout inside a Promise.

// const p = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hello, Async/Await!");
//   }, 3000);
// });

// async function waitAndGreet() {
//   const data = await p;
//   console.log(res);
// }

// waitAndGreet();

// 3️⃣ Challenge: Parallel vs. Sequential Execution
// Write two async functions:

// fetchSequentially() – Fetches https://jsonplaceholder.typicode.com/posts/1 and https://jsonplaceholder.typicode.com/posts/2 one after another (sequential).
// fetchInParallel() – Fetches both URLs at the same time using Promise.all() (parallel).
// Compare Execution Time:
// fetchSequentially() takes longer because it waits for the first request to complete before making the second.
// fetchInParallel() runs faster because both requests happen simultaneously.
// ✅ Hint: Use Promise.all([fetch(url1), fetch(url2)]).

// var URL1 = "https://jsonplaceholder.typicode.com/posts/1";
// var URL2 = "https://jsonplaceholder.typicode.com/posts/2";

// async function fetchInParallel() {
//   const responses = await Promise.all([fetch(URL1), fetch(URL2)]);
//   const data = await Promise.all(responses.map((response) => response.json()));
//   console.log(data);
// }
// fetchInParallel();

// async function fetchSequentially() {
//   const p1 = await fetch(URL1);
//   const data1 = await p1.json();
//   console.log(data1);
//   const p2 = await fetch(URL2);
//   const data2 = await p2.json();
//   console.log(data2);
// }
// fetchSequentially();
