// Promise API
// ____________________________________
// promise.all()
// promise.allSettled()
// promise.race()
// promise.any()
//_____________________________________

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 is Resolved");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("P2 is Rejected");
    }, 2000);
  });

  
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("P3 is Resolved");
    }, 5000);
  });
  

Promise.any([p1, p2, p3]).then((res) => console.log(res)).catch((data) => {console.log(data); console.log(data.errors)}
)
