// window.addEventListener("load",function(){
//     console.log("load")
// })


// window.addEventListener("unload",function(){
//     console.log("unload");
// });


// window.addEventListener("scroll",function(){
//     console.log("scroll");
// });

// window.addEventListener("resize",function(){
//     console.log("resize");
// });



// window.addEventListener("resize",function(){
//     const width = window.outerWidth;
//     const height = window.outerHeight;

//     console.log(`height:${height},width:${width}`);
    
// });

const a=document.querySelector("details");

a.addEventListener('toggle',function(event){

    console.log(event.target.open);

});