// // let score = [
// //     ["Jatin", 20, 60, "A"],
// //     ["Rahul", 10, 52, "B"],
// //     ["Rohit", 5, 24, "F"],
// //     ["Kiran", 28, 43, "A"],
// //     ["Arvind", 16, 51, "B"]
// //    ];
// //    score.push(["Susma", 30, 32, "B"]);
// //    score.unshift(["Jaya", 28, 62, "A"]);
// //    console.log(score);

// // var B=[];
// // for(var i=0;i<6;i++){
// //  B[i]=[];
// // }
// // console.log(B);

// // 31 class


// // var student={
// //     name: "Babor",
// //     age:27,
// //     country: "Bangladesh",
// //     language:['a','b','c']
// // }

// // console.log(student.name);






// // object make frame work 




// function student(name,language,country,age){
//     this.name=name;
//     this.age=age;
//     this.language=language;
//     this.country= country;

// }

// var student1= new student('Abdul Hannan',['a','b','c'],"Bangladesh", 27 )
// var student2= new student(' Hannan',['urr','bry','crt'],"Bang", 278 )
// var student3= new student('Abdul',['ay','by','tc'],"esh", 827 )

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.language);
// console.log(student1.country);




// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.language);
// console.log(student2.country);




// console.log(student3.name);
// console.log(student3.age);
// console.log(student3.language);
// console.log(student3.country);













function student(name,Id,country,age){
    this.name=name;
    this.age=age;
    this.Id=Id;
    this.country= country;





    this.display=function(){

        console.log(this.name);
        console.log(this.age);
        console.log(this.Id);
        console.log(this.country);

    }

}







var student1= new student('Abdul Hannan',[79563797],"Bangladesh", 27 )
var student2= new student(' Hannan',[76456746],"Bang", 278 )
var student3= new student('Abdul',[65464564],"esh", 827 )





student1.display();
student2.display();
student3.display();