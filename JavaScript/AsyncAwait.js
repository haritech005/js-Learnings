// console.log("async await");

let p = new Promise((resolve,reject) =>{
    resolve("Promise is resolved")
})

 function handlePromise(){
    const data =  p
    data.then((res) => console.log(res)
    )
    
}
handlePromise()


