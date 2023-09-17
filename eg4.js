// network call using promises

const makeCall=async()=>{
    try{
    let response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
makeCall()