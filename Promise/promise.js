var myPromise =  new Promise(function(resolve, reject){
    setTimeout(function (){
        resolve("success");
    }, 2000);
});

myPromise.then(
    function (data) {
        console.log(data + ' Recieved in 2 second');
    },
    function(error){
        console.log(error);
    }
)