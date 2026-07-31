const student={
    name:"Aditya",
    age:43,
    branch:"CSE"
}

const newstudent={
    ...student, //Spread operator
    sec:"A"
}

console.log("new object name=",newstudent.name)
console.log("new object age=",newstudent.age)
console.log("new object branch=",newstudent.branch)
console.log("new object Section=",newstudent.sec)