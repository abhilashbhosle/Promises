new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task')
    },1000)
})
.then(()=>console.log('Async task resolved'))