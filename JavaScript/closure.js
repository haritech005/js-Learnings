// // // function x() {
// // //   var a = 10;
// // //   function b() {
// // //     console.log(a);
// // //   }
// // //   var a = 100
// // //   return b
// // // }

// // // var z = x();
// // // z()

// // //Closure interview question (*)

// // // in setTimeout the function will take from call stack and store somewhere else for that specific time after (but in that time the other code will run ) after the given time the function puts into call stack and print the results

// // function x() {
// //   for (var i = 1; i <= 5; i++) {
// //     // here if you use var means it will print (6) for 5 times because var in js it took the memory Address only so last iteration the value is 6 then setTimeout hits means the value will remains 6 and print 6 as 5 times
// //     setTimeout(() => {
// //       console.log(i);
// //     }, i * 1000);
// //   }
// // }

// // function y() {
// //   for (let i = 1; i <= 5; i++) {
// //     // here the value should print correctly because let is block scope for each iteration it will generate new variable for each so it will print as expected
// //     setTimeout(() => {
// //       console.log(i);
// //     }, i * 1000);
// //   }
// // }

// // function z() {
// //   for (var i = 1; i <= 5; i++) {
// //     //In some scenarios if you need with your "var" itself means that time aslo closures only help us because we need to generate new variable for each iteration so we can pass (i) as a argument to another function and call as a parameter of that same function it will create new variable for each iteration so that we can achieve this thing
// //     function close(i) {
// //       setTimeout(() => {
// //         console.log(i);
// //       }, i * 1000);
// //     }
// //     close(i);
// //   }
// // }
// // // z();

// // //closures example
// // // function outer() {
// // //   var a = 10;
// // //   function inner() {
// // //     console.log(a);
// // //   }
// // //   return inner;
// // // }

// // // const innerFunc = outer();
// // // innerFunc();

// // // function close () {
// // //   var a = 10;
// // //   function inner() {
// // //     console.log(a);
// // //   }
// // //   return inner;
// // // }

// // // close()();//this is also correct way to call the function

// // // function outer() {
// // //   let c = 10;
// // //   function example() {
// // //     function inner() {
// // //       console.log(a,c);
// // //     }
// // //     // let a = 40;
// // //     return inner;
// // //   }
// // //   return example;
// // // }
// // // let a = 599
// // // outer()()();

// // // function example1() {
// // //   console.log(b);
// // //   let b = 10;
// // // }
// // // example1();

// // function names() {
// //   var name = "sathish";
// //   function display() {
// //     console.log(name);
// //   }
// //   return display;
// // }

// // var functionally = names();
// // functionally();

// //❗for encapsulation we can also use closures to hide the data from outside

// //constructor function with closures
// function Outer() {
//   var counter = 0;
//   this.increment = function () {   //The value of this will become the new object when a new object is created.
//     counter++;
//     console.log(counter);
//   };
//   this.decrement = function () {
//     counter--;
//     console.log(counter);
//   };
// }

// var counter = new Outer();

// counter.increment();
// counter.increment();
// counter.decrement();

// //also we can use class with closures is the right way rather than constructor function
// class OuterFunction {
//   constructor() {
//     var counter = 0;
//     this.increment = function () {
//       counter++;
//       console.log(counter);
//     };
//     this.decrement = function () {
//       counter--;
//       console.log(counter);
//     };
//   }
// }

// var counter = new OuterFunction();

// Practice question on closures (*)

// Write a function createCounter that returns an object with two methods, increment and decrement. These methods should modify a private count variable and log its current value.
// Ensure that the count variable is not directly accessible from outside the function.

// function createCounter() {
//   var count = 0;
//   return {
//     increment: function () {
//       count++;
//       console.log(count);
//     },
//     decrement: function () {
//       count--;
//       console.log(count);
//     }
//   }
// }

// var counter = createCounter();
// counter.increment();
// counter.decrement();

//another way to do the same thing

// class Counter {
//   #count = 0;
//   increment() {
//     this.#count++;
//     console.log(this.#count);
//   }
//   decrement() {
//     this.#count--;
//     console.log(this.#count);
//   }
// }

// var counter = new Counter();
// counter.increment();
// counter.decrement();
// counter.increment();
// counter.increment();  //output: 1,0,1,2

//question 2

// function createFunctions() {
//   var arr = [];
//   for (let i = 0; i < 3; i++) { //by using let we can fix this here because var will replace the variable because it is not a block scope so using let we can solve this
//     arr.push(function () {
//       console.log(i);
//     });
//   }
//   return arr;
// }

// var funcs = createFunctions();
// funcs[0]();
// funcs[1]();
// funcs[2]();
// //What will this code log? Fix it so that it logs 0, 1, and 2 for funcs[0](), funcs[1](), and funcs[2]() respectively.

// 3. Simulating Private Methods
// Create a function BankAccount that acts as a closure to manage a bank account. The account should have:

// A private balance variable.
// Public methods deposit(amount), withdraw(amount), and getBalance() to interact with the balance.
// Ensure that the balance cannot be accessed or modified directly.

// function BankAccount() {
//   var balance = 0;
//   return {
//     deposit: function (amount) {
//       balance+=amount;
//       // console.log(balance)
//     },
//     withdraw: function (amount) {
//       balance-=amount;
//       // console.log(balance)
//     },
//     getBalance: function () {
//       console.log(balance)
//     },
//   };
// }

// const bankTerms = BankAccount();
// bankTerms.deposit(3000);
// bankTerms.withdraw(1000);
// bankTerms.withdraw(1000);
// bankTerms.getBalance(); //output: 2000

