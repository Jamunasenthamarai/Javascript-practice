let balance = 5000;

let choice = Number(
    prompt(
        "ATM Menu\n" +
        "1. Check Balance\n" +
        "2. Deposit\n" +
        "3. Withdraw\n" +
        "4. Exit\n" +
        "Enter your choice:"
    )
);

if (choice === 1) {
    alert("Your balance is: ₹" + balance);
}
else if (choice === 2) {
    let deposit = Number(prompt("Enter deposit amount:"));

    if (deposit > 0) {
        balance = balance + deposit;
        alert("Amount deposited successfully\nNew Balance: ₹" + balance);
    } else {
        alert("Invalid amount");
    }
}
else if (choice === 3) {
    let withdraw = Number(prompt("Enter withdrawal amount:"));

    if (withdraw <= balance && withdraw > 0) {
        balance = balance - withdraw;
        alert("Withdrawal successful\nRemaining Balance: ₹" + balance);
    } else {
        alert("Insufficient balance or invalid amount");
    }
}
else if (choice === 4) {
    alert("Thank you for using ATM");
}
else {
    alert("Invalid choice");
}