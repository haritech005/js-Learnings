// console.log("this is printed first");

// setTimeout(() => {
//   console.log("This is settimeout function");
// }, 5000);

// console.log("this is printed last");

const radius = [2,3,4,5];

const circleArea = function(radius){
  return Math.PI * radius * radius;
}

const circumference = function(radius){
  return 2 * Math.PI * radius;
}

const area = function (radius,logic){
  const result = [];
  for(let i=0; i<radius.length; i++){
    result.push(logic(radius[i])); 
  }
  return result;
}

console.log(area(radius,circleArea));
console.log(area(radius,circumference));
