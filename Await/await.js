function sayAfter2Second(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    })
}

async function hello(){
    var x = await sayAfter2Second("Hello Async and Await");
    console.log(x);
}
hello();