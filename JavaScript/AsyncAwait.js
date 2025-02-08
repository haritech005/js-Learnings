// console.log("async await");

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise is resolved");
//   }, 5000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise is resolved");
//   }, 10000);
// });

// async function handlePromise() {
//   console.log("hello");
//   const promise1 = await p1;
//   console.log(promise1);

//   const promise2 = await p2;
//   console.log(promise2);
// }
// handlePromise()

// JS Engine will not wait for the promise get resolved
// let data = handlePromise()

// data.then((res) => console.log(res)
// )



//when inside the call stack when it sees the await inside the function the function will suspend and the function will move out of the call stack after the time period the function again comes where is actually left to the call stack because the promise is resolved   
// it will not block the call stack because our page will freeze so that it will suspend and came after the certain period of time
// while suspending it is wait in the browser settimeout api



async function apiCall() {
  const url = "https://fakestoreapi.com/products";
  const products = await fetch(url);
  const data = await products.json()
  console.log(data);


  data.map((datas) => console.log(datas.title)
  )
}

apiCall()