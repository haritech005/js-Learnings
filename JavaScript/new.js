// console.log(fname)
// console.log(hari);

// let fname = "hari";
// var hari = "name";

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// {
//     let a = 10;
//   }
//   console.log(a); // What happens here?


// {
//     var a = 10;
//     let b = 20
//     console.log(a); 
//     console.log(b);
    
// }

// {
//     var a = 30;
//     let b = 40
//     console.log(a);
//     console.log(b);
// }

// console.log(a); //30
// console.log(b); //Reference error



// for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i); // What happens here?

// var x = 5;
// {
//   var x = 10;
//   console.log(x); //10
// }
// console.log(x); //5


var y = 20;
{
  let y = 30; // Illegal shadowing
  console.log(y);
  
}
console.log(y);
