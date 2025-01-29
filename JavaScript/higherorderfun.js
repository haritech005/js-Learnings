console.log("Higher Order Functions");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

//map
const mapArr = arr.map((item) => item.toString(2)); // this converts number into binary
console.log(mapArr);
console.log(arr);
//filter
const filtArr = arr.filter((item) => item>5) 
console.log(filtArr);
//reduce
const redarr = arr.reduce((acc,curr) => acc+curr,0)
console.log(redarr);

function reduceArray (arr){  // sum of the arrays 
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i]
    }
    return sum
}
console.log(reduceArray(arr));

function MaxArr (arr,first){  //max value of the array 
    first = arr[0]
   for(let i=1;i<arr.length;i++){
       if(arr[i]>first){
           first =  arr[i]
       }
   }
   return first
}
console.log(reduceArray(arr));