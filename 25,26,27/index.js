
// (function display(){
//     console.log("hello");
// })();




// (function display(a,b){
//     var t=a*b;
//     console.log("ok="+t);
// })(10,20);






// var sum=function display(a,b){

//     var t=a*b;

//     console.log("ok="+t);
// }

// sum(60,20)



// Initializing while declaring



// let arr1 = new Array(3)
// arr1[0] = 10
// arr1[1] = 20
// arr1[2] = 30
// console.log("Array 1: ", arr1)

// // Creates an array having elements 10, 20, 30, 40, 50
// let arr2 = new Array(10, 20, 30, 40, 50);
// console.log("Array 2: ", arr2)

// // Creates an array of 5 undefined elements
// let arr3 = new Array(5);
// console.log("Array 3: ", arr3)

// // Creates an array with one element
// let arr4 = new Array("1BHK");
// console.log("Array 4: ", arr4)


// array

// var array=['a','b','c','d','e'];
// console.log(array.length);


// var array=['a','b','c','d','e'];

// array.indexOf('b');

// console.log(array);


// array.push('fg');

// array.push('iii');

// array.pop();

// array.shift(); /* firt to item remove*/
// array.unshift('M'); /* firt to item add*/

// console.log(array);

// //  array.splice(3);

// console.log(array);

// array.indexOf('M');

// console.log(array);





// var array1=new Array (90);
// array1[0]='a';
// array1[1]='b';
// array1[2]='c';
// array1[3]='d';
// array1[4]='e';
// console.log(array1);





// var array1=['afganistan ','bangladesh'];
// var array2=['saudiarab','iran'];

// var sum=array1.concat( array2);

// console.log(sum);



// var sum =0;
// var array = [10, 20, 30, 40, 50];
// for(var i=0; i<array.length; i++){
    
//     // console.log(array[i]);
//  sum=sum+array[i];
//     console.log(sum);
// }

// console.log(sum);





 

var num = new Array()
var sum =0;


// var array = [10, 20, 30, 40, 50];

for(var i=0; i<3; i++){

    num [i]=parseInt(prompt("enter value of array = "));

    console.log("value = " +num[i]);

    sum=sum+num[i];
    
}

console.log("total = "+sum);