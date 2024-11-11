function fun() {
    if (Math.random() < 0.5) {
        throw "something is wrong!";
    }
    return 42;
}

function gun() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (Math.random() < 0.5) {
                reject("something is wrong!");
            }
            resolve(42);
        },5_000);
    });
}

function sun() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (Math.random() < 0.5) {
                reject("something is wrong!");
            }
            resolve(42);
        },5_000);
    });
}

// let result = fun();
console.log("Before calling gun()...")
gun().then( result => {
    console.log(result);
    sun().then( result => {
        console.log(result);
    }).catch( error => {
        console.log(error);
    })
}).catch( error => {
    console.log(error);
})



console.log("After calling gun()...")
