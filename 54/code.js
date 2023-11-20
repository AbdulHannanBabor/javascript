// const inp=document.querySelector("input");
// const p=document.querySelector("p");


// inp.addEventListener("copy", function(){
//     // console.log("you have copy text");

//     p.innerText="i love my wife"
// });

// inp.addEventListener("cut", function(){
//     console.log("you cut everything");
// });

// inp.addEventListener("paste", function(){
//     console.log("you need paste");
// });


// 55..


const div=document.querySelector("div");
const p=document.querySelector("p");

p.addEventListener("dragstart", function(e){
   e.dataTransfer.setData("Text", e.target.id);
});


div.addEventListener("dragover", function(e){
    e.preventDefault();
 });


 div.addEventListener("drop", function(e){
    let id=e.dataTransfer.getData("Text");
    console.log(id);
    // div.appendChild(document.getElementById(id));
 });