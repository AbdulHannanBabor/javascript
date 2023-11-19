
const text=document.querySelector("textarea");



text.addEventListener("keydown",function(e){
    // console.log('keydown');

    if (e.repeat){
        alert("do ot repeat");
    }
});


// text.addEventListener("keypress",function(){
//     console.log('keypress');
// });


// text.addEventListener("keyup",function(e){
//     // console.log(e.key);
//     // console.log(e.keyCode);
//     // console.log(e.code);
//     // console.log(e.shiftKey);

//     if (e.shiftKey){
//         console.log("shift T ="+e.key);
//     }
// });