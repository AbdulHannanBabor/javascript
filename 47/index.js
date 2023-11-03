



// const inp=document.querySelector("input");
// inp.addEventListener("change",changeHandler);

// function changeHandler(e) {

// // console.log(e)
// // console.log(e.type);
// // console.log(e.target);
// // console.log(e.target.className);
// // console.log(e.target.value);
// // console.log(e.target.id);
    


// }



// const p=document.querySelectorAll("input[name=programing]");
// console.log(p);







// 48 

const form=document.querySelector("form");
const na=form.querySelector(" div #name");
const email=form.querySelector(" div #email");
const password=form.querySelector(" div #password");

form.addEventListener("submit",formhandel);

function formhandel(e){

e.preventDefault();


const userinfo={
    name: na.value,
    email: email.value,
    password: password.value,
};

console.log(userinfo);

na.value="";
email.value=""; 
password.value="";



}