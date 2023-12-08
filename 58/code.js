
//  setTimeout(()=>{
//     console.log("i e");
//  }, 2000);

 const save =document.querySelector(".save-bt");
 const message =document.querySelector(".message");
//  save.addEventListener("click",s);


//  function s(){
// essage.textContent="ser oter perso for tie ad vale"

// setTimeout(()=>{
//     essage.textContent=""
//       }, 2000);
//  }



// 59



 save.addEventListener("click",Clock);


 function Clock(){
let date = new Date();
let hours= date.getHours();
let minute= date.getMinutes();
let second= date.getSeconds();

minute=formateTime(minute);
second=formateTime(second);


let time=hours+":"+minute+":"+second;
// console.log(time);
message.textContent=time;
setInterval(Clock,1000);
      

 }


 function formateTime(value){

if (value<10){
  value="0"+value;
}
  return value;
 }