const d=document.querySelector("div");


d.addEventListener("click", function(e){

    // console.log(e.target);
    // console.log(e.target.className);
    // console.log(e.target.id);

    // console.log(e.target.innerHTML);

    // console.log(e.target.textContent);

     
});



// d.addEventListener("dblclick", function(){

//     console.log("second click");
// });


// d.addEventListener("mousedown", function(){

//     console.log(" gowing down slowluy");
// });

// d.addEventListener("mouseup", function(){

//     console.log("fowing up firster");
// });

// d.addEventListener("mouseenter", function(){

//     console.log("going in");
// });

// d.addEventListener("mouseleave", function(){

//     console.log("going out");
// });


// d.addEventListener("mouseover", function(){

//     console.log("over");
// });



// d.addEventListener("mousemove", function(event){

//     console.log("clientX= "+event.clientX+"clienty= "+event.clientY);
// });


// d.addEventListener("mousemove", function(event){

//     console.log("offsetX= "+event.offsetX + "offsetY= "+  event.offsetY);
// });


const dv=document.querySelectorAll(".btn");
console.log(dv);


Array.from(dv).map((button)=>{

    button.addEventListener("click",function(e){
    console.log(e.target.innerText);
    });

});
