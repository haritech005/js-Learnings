// greet();  // this will work because of hoisting
// greetMe(); // this will not work because of hoisting as it is a function expression

//---------------------------------------------------------------------------------------------------------------

//Function Statement/Function Declaration
function greet() {
    console.log('Hi Hari');
}   // this is known as function statement/function declaration
// greet();

//---------------------------------------------------------------------------------------------------------------

// Function Expression
var greetMe = function() {  // function expression means a function that is assigned to a variable
    console.log('Hi Tony');
}
// greetMe();

//---------------------------------------------------------------------------------------------------------------

//Anonymous Function
//Anonymous function act as a value and can be assigned to a variable
(function() {
  console.log('Hi Anonymous'); //Function expression without a function name is called anonymous function
})
// function(){
//     console.log('Hi Anonymous'); // Function statements require a function name
    
// }
//---------------------------------------------------------------------------------------------------------------

//Named Function Expression
//Named function expression is a function expression that has a name
let namedFunctionExpression = function great() { //great act as the local variable inside the function
    console.log('Hi Named Function Expression');
    great(); // this will work because it is in the same scope not in global scope
}

// great(); // this will not work because is in the global scope

//---------------------------------------------------------------------------------------------------------------

//First Class Function or First Class Citizen
// Functions are treated as any other variable in JavaScript
// In JavaScript, first-class functions mean that functions are treated like any other value. You can:

// Assign them to variables.
// Pass them as arguments.
// Return them from other functions.

// Assigning a function to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
  };
  
  // Passing a function as an argument
  function saySomething(func, name) {
    console.log(func(name));
  }
  saySomething(greet, "Hariharan"); // Output: "Hello, Hariharan!"
  
  // Returning a function from another function
  function multiplier(x) {
    return function(y) {
      return x * y;
    };
  }
  const double = multiplier(2);
  console.log(double(5)); // Output: 10
  