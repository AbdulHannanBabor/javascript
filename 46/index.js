

var a=document.querySelector("textarea");
a.addEventListener("keypress",function(event){
var k = event.key;

var m=document.querySelector("p");
m.innerHTML="you press this key= "+k;

});









// var count=0;

// document.querySelector("textarea").addEventListener("keypress",function(event){
//     count++;
// document.querySelector("p").innerHTML="you press this key= "+count;
// });