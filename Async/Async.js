async function hello(){
    return 'hello Async';
}
hello().then( value => console.log(value));

async function hello(){
    return Promise.resolve("Hello Async");
}
hello().then(value => console.log(value))