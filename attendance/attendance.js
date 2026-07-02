let studentName = prompt("Enter student name:");
let totalDays = Number(prompt("Enter total working days:"));
let attendedDays = Number(prompt("Enter attended days:"));

let attendancePercentage = (attendedDays / totalDays) * 100;

alert("Attendance Percentage: " + attendancePercentage.toFixed(2) + "%");

if (attendancePercentage >= 75) {
    alert(studentName + " is eligible for exam");
}
else {
    alert(studentName + " is not eligible for exam");
}