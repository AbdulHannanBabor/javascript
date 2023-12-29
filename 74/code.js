// let number=[10,20,30,40,50];
// let[num1,num2,num3,...z]=number;

// // console.log(num1);
// // console.log(num2);

// console.log(z);


// let a=10, b=20;
// [a,b]=[b,a];
// console.log(a,b);

// const studentinfo={

//     id:1,
//     name:"babor",
//     gpa:3.33,

//     languages:{
//        native: 'bangla',
//        beginner:'english',
//     }
// };


// const{id,name}=studentinfo;
// console.log(id);
// console.log(name);




// const{name,languages}=studentinfo;
// console.log(languages.native);



// console.log( studentinfo.gpa);
// console.log( studentinfo.id);
// console.log( studentinfo.name);



const studentinfo=(student)=>{

    console.log(student.id,student.name)
}



const student={
    id:1,
    name:"babor",
    gpa:3.33,
};

studentinfo(student);


