let weight = Number(prompt("Enter weight in kg:"));
let height = Number(prompt("Enter height in meters:"));

function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}

let bmi = calculateBMI(weight, height);

alert("Your BMI is: " + bmi.toFixed(2));

if (bmi < 18.5) {
    alert("Underweight");
}
else if (bmi < 25) {
    alert("Normal Weight");
}
else if (bmi < 30) {
    alert("Overweight");
}
else {
    alert("Obese");
}