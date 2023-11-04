const v=document.querySelector("video");


v.addEventListener("play",videosplay);
function videosplay(s){

console.log("play");
}



v.addEventListener("canplay",videosplay);
function videosplay(s){

console.log("canplay");
}



v.addEventListener("pause",videosplay);
function videosplay(s){

console.log("pause");
}


v.addEventListener("playing",videosplay);
function videosplay(s){

console.log("playing");
}


v.addEventListener("ended",videosplay);
function videosplay(s){

console.log("ended");
}