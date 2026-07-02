let score=0;
let q1=prompt("Which language is mainly used for web pages?\nA. Java\nB. Python\nC. JavaScript\nD. C++");

if(q1=="C" || q1=="c"){
    score++;
}
let q2=prompt("Which company developed JavaScript?\nA. Microsoft\nB. Netscape\nC. Google\nD. Apple");
if(q2=="B" || q2=="b"){
    score++;
}
let q3=prompt("Which symbol is used for comments in JavaScript?\nA. //\nB. <!-- -->\nC. #\nD. /* */");
if(q3=="A" || q3=="a"){
    score++;
}
alert("Quiz Finished!\nYour Score: " + score + "/3");
console.log("Your score is: " +score+"/3");