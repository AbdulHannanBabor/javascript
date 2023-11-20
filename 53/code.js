
const inp=document.querySelector("input");



inp.addEventListener("blur",function(e){
    // console.log("blure is showing")
//     inp.style.backgroundColor="transparent";
// inp.style.padding="0";
inp.value=e.target.value.toUpperCase();
});


inp.addEventListener("focus",function(e){
    // console.log("focus is showing")
inp.style.backgroundColor="blue";
inp.style.padding="20px";
});


// inp.addEventListener("focusin",function(e){
//     console.log("focusin is showing")
// });


// inp.addEventListener("focusout",function(e){
//     console.log("focusout is showing")
// });