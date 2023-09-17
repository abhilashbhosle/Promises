// consuming promises with the help of async and await.
// promises can be consumed with the help of async and await instead of .then method.
// async and await doesn't handles errors directly so we wrap it using try and catch block.

const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({username:'abhilash',email:'abhi@gmail.com'})
        }else{
            reject('Oops something went wrong')
        }
    },1000)
})
const myPromise=async()=>{
    try{
        const response=await promise1
        console.log(response)
    }
    catch(err){
        console.log(err)
    }
}
myPromise()