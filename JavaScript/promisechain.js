// console.log("promise chain");
// console.log("hello")

const cart = ["chocolate","biscut","mangoes"];

const promise = createOrder(cart)

promise.then(function(orderId){
    console.log(orderId);
    
})


function createOrder(cart){
    
    const pr = new Promise (function(resolve,reject){
        if(!validateCart(cart)){
            let error = new Error("Cart is not valid");
            reject(error);
        } else {
            const orderId = "12345"; // Simulating order ID
            resolve(orderId);
        }
    })
    return pr;
}

function validateCart(cart){
    return true;
}