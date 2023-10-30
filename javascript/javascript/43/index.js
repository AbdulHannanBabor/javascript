

// document.querySelectorAll(".but1")[0].addEventListener("click",function(){
    
//     document.querySelector("h1").innerHTML= bb  +" I love you";
//     var bb=this.innerHTML;
// });



// document.querySelectorAll(".but2")[0].addEventListener("click",function(){

//     var bb=this.innerHTML;
//     document.querySelector("h1").innerHTML= bb  +" I love my husband";
// });




// document.querySelectorAll(".but3")[0].addEventListener("click",function(){

//     var bb=this.innerHTML;
//     document.querySelector("h1").innerHTML= bb  +" I love my family";
// });




var a =document.querySelectorAll(".but").length;

for(var i=0; i<=a; i++)

{
 
    document.querySelectorAll(".but")[i].addEventListener("click",function(){
        var bb=this.innerHTML;
        document.querySelector("h1").innerHTML= bb  +" I love my husband";
    });
    
}
