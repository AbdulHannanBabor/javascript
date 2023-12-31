
const promise1=new promise((resolve, reject)=>{
    let completdpromise = true;
    if(compr){
        resolve("compleate promise");
    }
    else{
        reject ("not complete promise");
    }
});

console.log(promise1);