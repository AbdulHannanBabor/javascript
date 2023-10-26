
var photos=[
"img/1.jpg",
"img/2.jpg",
"img/3.jpg"
];
var images=document.querySelector("img");

var count=0;

function next(){

    count++;

    if(count>=photos.length){
    count=0;
    images.src= photos[count];
    }
    else{
       images.src= photos[count];
    }

}


function prev(){

    count--;
    if(count<0){
    count=photos.length-1;
    images.src= photos[count];
    }

    else{
       images.src= photos[count];
    }
}



