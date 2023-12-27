

var a=document.querySelector("#submit");

a.addEventListener("click",function(e) {

   var num= document.querySelector("#texsid").value;

   console.log(num);
    
try {
    
    if (num<5)
 {
     throw "input is too low"
 }
 else if (num>10){
     throw "input is too long"
 }
 
 }

 catch(error) {
     console.log(error);
 }


});



