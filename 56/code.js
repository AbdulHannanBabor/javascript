// console.log(window);

// console.log(location);
// console.log(location.href);
// console.log(location.origin);


// console.log(location.protocol);
// console.log(location.host);
// console.log(location.port);
// console.log(location.pathname);


let loc=document.querySelector(".myclass");

var p1=loc.children[0];
p1.textContent=location.port


var p2=loc.children[2];
p2.textContent=location.host

const va=document.getElementById("submit");
va.addEventListener("click",function(){

   location.assign("https://www.youtube.com/")
});



// console.log(p1);


