// var a = 10
// console.log(a)
// function greetings(){
//     var x = 10;
//     console.log(x);
// }
// greetings()


// function fun(){ //Local Scope
//     var names = 'hariharan'
//     console.log(a)
// }

// var a = 10;

// fun()

// console.log(names)



// function hari(){
//     var har = "hari";
//     // console.log(gows) gows is not defined 
//     gowsi()
//     function gowsi(){
//         var gows = "gowsi";
//         console.log(har)
//         console.log(tech)

//     }
// }

// var tech = 'tech'
// // console.log(gows) gows is not defined 
// hari()


//Variable Shadowing 

// function tech(){
//     var name = 'tech';
//     var variables = 'variablesLocal'
//     console.log(variables)
//     buck()
//     function buck(){
//         var name = 'buck'
//         console.log(name)
//     }
// }

// var variables = 'variablesGlobal'
// console.log(variables)


// tech()




// function outerFunction() {
//     let counter = 0; // Local variable in the lexical environment
  
//     function innerFunction() {
//       // Access and modify `counter`
//       console.log("Before:", counter);
//       counter++;
//       console.log("After:", counter);
//     }
  
//     // Call innerFunction multiple times
//     innerFunction();
//     innerFunction();
//     innerFunction();
//   }

//   outerFunction()