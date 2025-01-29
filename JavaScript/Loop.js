console.log("Loop.js");
// Js Engine Garbage collector 

// Mark and Sweep Algorithm

// 1. What’s the problem?
// When you create variables, objects, or functions in your code, they take up space in memory. If something is no longer needed but still takes up memory, it's a waste. This is called memory leak. The mark-and-sweep algorithm helps clean up memory by removing things your program doesn't use anymore.

// 2. How does it work?
// Think of it as organizing a house:

// Mark phase:
// The program starts at the "root" (like the main room of the house). It looks for all objects it can reach, marking them as "in use" (like marking items you still need).

// Roots in JavaScript are global objects, local variables, and objects referenced by them.
// Anything you can still access is "marked."
// Sweep phase:
// The program goes through all the memory. Anything that wasn't marked (not reachable anymore) is considered trash and gets cleaned up (like throwing away unused items).

// 3. Why does it matter?
// It happens automatically in JavaScript because of garbage collection. You don’t have to manually free memory like in some older programming languages. But understanding this helps you write efficient code by avoiding unnecessary references that can prevent the garbage collector from cleaning things up.

// Example:
// javascript
// Copy
// Edit
// function example() {
//   let a = { name: "apple" }; // a points to the object
//   let b = a;                // b also points to the same object
//   a = null;                 // a no longer points to the object
  
//   // The object is still "reachable" through b, so it's not removed.
  
//   b = null; // Now no one points to the object.
//   // The garbage collector will mark it as unreachable and free the memory.
// }

// example();
// TL;DR:
// The mark-and-sweep algorithm:
// Marks all objects you can still use (reachable).
// Removes everything else (unreachable).
// It's automatic in JavaScript.
// Helps avoid memory leaks and keeps your app efficient.
