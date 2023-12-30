// const task1 = () =>{
//     console.log("task1");
// } 
// const task2 = () =>{
//     setTimeout(data,3000);
// } 
// const task3 = () =>{
//     console.log("task3");
// } 
// const task4 = () =>{
//     console.log("task4");
// } 
// const task5 = () =>{
//     console.log("task5");
// } 
// const data=() =>{
//     console.log("dataLoading");
// }

// task1 ();
// task2 ();
// task3 ();
// task4 ();
// task5 ();



const task1 = (callback) =>{
    console.log("task1");
    callback();
} ;

const task2 = (callback) =>{

    setTimeout( ()=>{
        console.log("taskfull");
  callback();
        
  },3000 );
  
};


const task3 = (callback) =>{
    console.log("task3");

    callback();
} ;

const task4 = (callback) =>{
    console.log("task4");

    callback();
} ;

const task5 = () =>{
    console.log("task5");
} ;



task1 (()=>{
    task2 (()=>{
        task3 (()=>{
            task4( ()=>{
                task5( ()=>{
                    
                });

            });
        });
    });
});





// function square(x, y){

//     let x1 = x*y;
//     return x1;
// }


// let s=square(7,8)
// console.log(s);

