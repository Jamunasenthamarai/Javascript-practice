let balance = 5000;

function checkBalance() {
    alert("Current Balance: ₹" + balance);
}

function deposit(amount) {
    if (amount > 0) {
        balance = balance + amount;
        alert("Deposit Successful\nNew Balance: ₹" + balance);
    } else {
        alert("Invalid amount");
    }
}

function withdraw(amount) {
    if (amount <= balance && amount > 0) {
        balance = balance - amount;
        alert("Withdrawal Successful\nRemaining Balance: ₹" + balance);
    } else {
        alert("Insufficient balance or invalid amount");
    }
}

let choice = Number(
    prompt(
        "Bank Menu\n" +
        "1. Check Balance\n" +
        "2. Deposit\n" +
        "3. Withdraw\n" +
        "Enter choice:"
    )
);

if (choice === 1) {
    checkBalance();
}
else if (choice === 2) {
    let amount = Number(prompt("Enter deposit amount:"));
    deposit(amount);
}
else if (choice === 3) {
    let amount = Number(prompt("Enter withdraw amount:"));
    withdraw(amount);
}
else {
    alert("Invalid choice");
}