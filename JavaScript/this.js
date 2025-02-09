// this keyword
"use strict";

// 1. In Global space

// console.log(this); //return global object - windows in js ,global in node
// var a = 10;

//used in function
// function tech() {
//   var b = 20;
//   console.log(this);
// }

//depends upon how they called
// window.tech();

// this inside the obj
const student1 = {
  name: "hari",
  x: function () {
    console.log(this.name);
  },
};

const student2 = {
  name: "Gowsi",
};

student1.x.call(student2) // we need to use student1 function inside student 2 means we can use the call method to do so


const names = () =>{
    console.log(this);
}
names()




