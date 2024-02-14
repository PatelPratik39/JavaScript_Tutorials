function asyncJob(x){
    return new Promise(resolve => resolve(x+1));
}

async function execAsyncJobs(){
    const res1 = await asyncJob(0);
    console.log(res1);

    const res2 = await asyncJob(res1);
    console.log(res2);

    const res3 = await asyncJob(res2);
    console.log(res3);
    return "Jobs Completed";
}
execAsyncJobs().then(res => console.log(res));