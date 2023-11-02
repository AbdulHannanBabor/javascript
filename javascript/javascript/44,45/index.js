

for (var i = 0; i <3; i=i+1){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
    var text=this.innerHTML;
    console.log(text);

    audioPlayer(text);
    animation(text);
    });
}





document.addEventListener("keypress",function(event){
var g=event.key;
audioPlayer(g);
animation(g);
});












function audioPlayer(te){
    switch(te){
        case "A":
            var audio = new Audio('audio/1.mp3');
            audio.play();
            break;
        case "B":
            var audi = new Audio('audio/2.mp3');
            audi.play();
            break;
        case "C":
            var aud = new Audio('audio/3.mp3');
            aud.play();
            break;       
    }
}





function animation(B){


    var n=document.querySelector("."+text);
    n.classList.add("animation");

    setTimeout(function(){
        n.classList.remove("animation");
    },1000);
 
}
