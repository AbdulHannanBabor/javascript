var e=document.getElementsByTagName("a")[0];
// e.innerHTML="Hellow";
e.innerHTML="loprma ";

 e.style.textDecoration= "none";
 e.style.color="red";
 e.style.fontSize='100px';
 e.style.fontFamily="Helvetica";


 var y=document.getElementsByTagName("a")[4];
 y.innerHTML="loprma j sdlfgfhgf j";

 y.style.textDecoration= "none";
 y.style.color="orange";
 y.style.fontSize='100px';
 y.style.fontFamily="Helvetica";
y.style.href="https://www.youtube.com/";




// if add a eliment in last line


var b=document.createElement('h1');
var bv=document.createTextNode('hi hellow where are you');
b.appendChild(bv);

var e=document.getElementById('divs1');
e.appendChild(b);

var head=document.getElementsByTagName("h1")[1];
e.removeChild(head);




// if add a elemint  in first  line  

document.getElementById('divs1').classList;