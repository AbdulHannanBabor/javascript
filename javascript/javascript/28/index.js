// var a=['a','o','b','c','d','e'];

// a.shift();
// console.log(a);

// a.unshift('r');
// console.log(a);

// console.log(a);
// var v=a.splice(1);
// console.log(v);

// var sn=a.sort();
// console.log(sn);

// var ab=[10,3,2,44,52,,99,6,544,4,34];

//    ab.sort(function (a,b) {
//     return b-a; 
//     // return a-b;

// });

// console.log(ab);




// 29 class


// var a=['a','o','b','c','d','e']


// for(var i=0; i<a.length; i++){

//     console.log(a[i]);

// }



var big=0;

function highestscore(highest_score){

    for(var i=0; i<=highest_score.length; i++){

      var number=highest_score[i];

if(number>big){

    big=number;
}

}
return big ;
 }

var score=highestscore([10,20,30,40,400,80,50,60,700,5,90]);
console.log(score);




