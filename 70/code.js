// var n=[1,2,3,4,5,6,7,8,9];

// for (var i=0; i<n.length; i++){
//     console.log(n[i]);
//     // console.log(n);
// }

// var n=[1,2,3,4,5,6,7,8];

// n.forEach(function(i){
//     console.log(i);
// })


// var n=[1,2,3,4,5,6,7,8];
// var sqrno=[];
// n.forEach(function(i){
//     sqrno.push(i*i);
// })

// console.log(sqrno);


var no=[1,2,3,4,5,6,7,8];
console.log(no);

no.forEach(function(x, ind, Arr){
   Arr[ind]=x+5;
})

console.log(no);