let num1=Number(prompt("Enter first number"));
let num2=Number(prompt("Enter second number"));
let operator=prompt("Enter operator (+, -, *, /)");
let result;

if(operator=="+"){
    result=num1+num2;
}
else if(operator=="-"){
    result=num1-num2;
}
else if(operator=="*"){
    result=num1*num2;
}
else if(operator=="/"){
    if(num2==0){
        alert("Error: Division by zero is not allowed");
    }else{
        result=num1/num2;
    }
}
if(result!==undefined){
    alert("Result: " + result);
    console.log("Result: " + result);
}
