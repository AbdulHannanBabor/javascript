var students=[

    {
        id: 1,
        name: 'John',
        gpa :3.00,
    },
    {
        id: 2,
        name: 'jkj',
        gpa :3.99,
    },
    {
        id: 3,
        name: 'dfdshn',
        gpa :3.79,
    },
    {
        id: 4,
        name: 'dfsdhn',
        gpa :2.99,
    },

];

function studentsname(){

    return    students.filter(function(x){
    return x.gpa>3
    }).map(function(y){
        return y.name
    })
}
console.log(studentsname());





const  studentsname2=()=>   students.filter((x)=> x.gpa>3).map((y)=>y.name);

 
console.log(studentsname2());
