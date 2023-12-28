
// function addNumbers(x,y,z){
//     var a;
//      a=x+y+z;
//     return a;
// }

// var numbers = [10,20,30];
// var s=addNumbers(numbers[0],numbers[1],numbers[2]);
// console.log(s);


// var numbers = [10,20,30];
// var b=addNumbers(...numbers)
// console.log(b);


// let numbers=[1,2,3];

// let numbers1 = [10,20,30,...numbers];
// let numbers2 = [10,...numbers,20,30];

// console.log(numbers1);


// let numbers1 = [10,20,30];
// let numbers2 = [109,200,3099];
// let numbers = [...numbers1,...numbers2];

// console.log(numbers);


let n3={
    name:"abdul",age:27 ,place:"Dhaka",
};

let m={
    name:"Hanna",age:28,nation:"BroadcastChannel",
}

let d={...n3, ...m}
console.log(d);