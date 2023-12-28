"use strict"

function message(text="i always practice coding") {

    console.log(`${text}`);

}
message();
message("i love coding");


function printnumber(x,y,...z) {
console.log(`x=${x},y=${y},z=${z}`);

}

printnumber(10,20,30,40);