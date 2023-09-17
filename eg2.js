//let us consider we are doing network calls inside the promises so after getting response we can pass the value
// to .then function by using resolve('value') and .then receives that value

const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:'abhilash',userId:'abhi@1016'})
    },1000)
})
promise.then((user)=>console.log(user))


const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:'abhilash',email:'abhi@gmail.com'})
        }else{
            reject('Oops something went wrong')
        }
    },1000)
})
promise1.then((user)=>{
    return user.username
})
.then(username=>console.log(username))
.catch(err=>console.log(err))
.finally(()=>{console.log('promise is either resolved or rejected')})