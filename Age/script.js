var age=Number(prompt("Enter your age:"));
if(age>=18){
    console.log("You are eligible to vote and drive");
    alert("You are eligible to vote and drive");
}
else if(age>=16){
    console.log("You are eligible to drive only");
    alert("You are eligible to drive only");
}
else{
    console.log("You are not eligible for any activity");
    alert("You are not eligible for any activity");
}