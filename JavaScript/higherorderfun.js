console.log("Higher Order Functions");
// const arr = [1, 2, 3, 4, 5, 20, 7, 8, 9, 10];

//map
// const mapArr = arr.map((item) => item.toString(2)); // this converts number into binary
// console.log(mapArr);
// console.log(arr);

// //filter
// const filtArr = arr.filter((item) => item>5)
// console.log(filtArr);

// //reduce
// const redarr = arr.reduce((acc,curr) => acc+curr,0)
// console.log(redarr);

// const maxVal = arr.reduce((acc, curr) => (curr > acc ? curr : acc), 0);
// console.log("Max Value:",maxVal);

// function reduceArray (arr){  // sum of the arrays
//     let sum = 0
//     for(let i=0;i<arr.length;i++){
//         sum = sum+arr[i]
//     }
//     return sum
// }
// console.log(reduceArray(arr));

// function MaxArr(arr, first) {
//   //max value of the array
//   first = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > first) {
//       first = arr[i];
//     }
//   }
//   return first;
// }
// console.log(MaxArr(arr));

const users = [
  { fname: "hari", lname: "haran", age: 20 },
  { fname: "hari", lname: "Tech", age: 20 },
  { fname: "saran", lname: "kumar", age: 44 },
  { fname: "Gows", lname: "puch", age: 44 },
];

//complex map

// const userName = users.map(user => user.fname+user.lname)
// console.log(userName);

// complex reduce
const userAge = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(userAge);

// complex filter

const filterUser = users
  .filter((user) => {
    return user.age > 30;
  })
  .map((user) => user.fname);

console.log(filterUser);

const reduceUser = users.reduce((acc, curr) => {
    if (curr.age > 30) {
        acc.push(curr.fname);
    }
    return acc;
}, []);

console.log(reduceUser);
