// alert("hellow");
// confirm("are you ready");

// function deletesomthing(){

//     let value=confirm("Are you sure you want to delete");
//     if(value){
//         console.log("deleted");
//     }
//     else{
//         console.log(" not deleted");   
//     }
// }


// deletesomthing();



function welcomemessage(){


  var h1=document.createElement('h1'); 

  var text; 

var name=prompt("What is the name of yours : ");
if (name==null || name==""){
    text="no name found";
}

else{
    text=name;
}

var text1=document.createTextNode(text);
h1.appendChild(text1);
document.body.appendChild(h1);
}

welcomemessage();
