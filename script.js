function calculategrade(marks){
    if(marks>=90){
        return "O";
    }
    else if(marks>=80){
        return "A+";
    }
    else if(marks>=70){
        return "A";
    }
    else if(marks>=60){
        return "B+";
    }
    else if(marks>=50){
        return "B";
    }
    else{
        return "fail";
    }
}

let studentname=prompt("Enter student name:");
let marks=Number(prompt("Enter marks:"));
let grade=calculategrade(marks);
console.log("Student name:"+studentname);
console.log("marks:"+marks);
console.log("Grade:"+grade);
alert(
    "Student name:"+studentname+
    "\nmarks:"+marks+
    "\ngrade:"+grade
);