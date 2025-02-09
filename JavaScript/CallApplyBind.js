// Call Apply Bind are shared or borrowed methods 

// we need to reuse the same function in different object means we can use these methods


const obj1 = {
    firstname:"hari",
    lastname:"haran",
}

let printName = function(hometown,state){
    console.log(this.firstname+" "+this.lastname+" from "+hometown+" "+state);
}

// printName.call(obj1,"Tiruchirapalli") // the first argument must be reference and following to be the function parameter 

// // apply method - the only difference btw call and bind is the way of passing the argument 

// printName.apply(obj1,["chennai"]) // in apply method we need to pass the argument like list


const PrintAllNames = printName.bind(obj1,"Tiruchirapalli","Tamilnadu") //take the copy of the function which is later used 
console.log(PrintAllNames);
PrintAllNames()
