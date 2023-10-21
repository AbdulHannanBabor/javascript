// var a=Math.sqrt(125);
// console.log(a);

// var b=Math.pow(5,4);
// console.log(b);


// var c=Math.floor(1.5);
// console.log(c);

// var d=Math.ceil(1.5);
// console.log(d);

// var e=Math.round(5.5);
// console.log(e);

// var f=Math.max(8,3,6,5,6,4,3);
// console.log(f);

// var g=Math.min(8,3,6,5,6,4,3);
// console.log(g);




// var h=Math.random()*5;

// h=Math.round(Math.random()*5)+5;
// console.log(h);

// h=Math.ceil((Math.random()*10)+10);
// console.log(h);


var wine=0;
var lost=0;

 for(var i=0;i<=5;i++){

    var gusNum=parseInt(prompt('Enter a Number 1 to 5 = '));

    var randomnum=Math.round(Math.random()*5);

   
   
    if(gusNum==randomnum){
       console.log("you are wine= "+gusNum+ "random="+randomnum);
       wine++;
    }
    else{
       console.log("you are lost = "+gusNum+ "random="+randomnum);
       lost++
    }
    


 }


console.log('wine= '+wine);
console.log('lost= '+lost);