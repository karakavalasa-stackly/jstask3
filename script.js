// Employee Login System

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

// E-Commerce Discount
let amount = 6500;

if (amount >= 5000) {
    let discount = (amount * 20) / 100;
    let finalAmount = amount - discount;

    console.log("20% Discount Applied");
    console.log("Discount Amount :", discount);
    console.log("Final Amount :", finalAmount);
} else {
    console.log("No Discount");
}

// ATM Withdrawal

let balance = 10000;
let withdraw = 4000;

if (withdraw <= balance) {
    balance -= withdraw;

    console.log("Transaction Success");
    console.log("Remaining Balance :", balance);
} else {
    console.log("Insufficient Balance");
}
// Student Grade System

let mark = 87;

if (mark >= 90) {
    console.log("Grade A");
} else if (mark >= 80) {
    console.log("Grade B");
} else if (mark >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
// Traffic Signal

let signal = "green";

switch (signal) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid");
}
// Online Shopping Delivery Charge

let orderAmount = 750;
let deliveryCharge;

if (orderAmount >= 1000) {
    deliveryCharge = 0;
} else {
    deliveryCharge = 80;
}

let total = orderAmount + deliveryCharge;

console.log("Order Amount :", orderAmount);
console.log("Delivery :", deliveryCharge);
console.log("Total :", total);

// User Age Verification

let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}
// Find Largest Number

let a = 10;
let b = 20;
let c = 15;

if (a >= b && a >= c) {
    console.log("Largest Number :", a);
} else if (b >= a && b >= c) {
    console.log("Largest Number :", b);
} else {
    console.log("Largest Number :", c);
}

// Mobile Password Verification

let pin = prompt("Enter your 4-digit PIN:");

if (pin.length === 4) {
    console.log("Login Success");
} else {
    console.log("Invalid PIN");
}

// Product Stock

let stock = 0;

if (stock === 0) {
    console.log("Out of Stock");
} else {
    console.log("Available");
}

// Employee Salary Bonus

let salary = 45000;

if (salary > 50000) {
    console.log("Bonus : 10000");
} else if (salary > 30000) {
    console.log("Bonus : 5000");
} else {
    console.log("Bonus : 2000");
}

// Electricity Bill Calculator

let units = 150;
let bill;

if (units <= 100) {
    bill = units * 2;
} else if (units <= 200) {
    bill = units * 4;
} else {
    bill = units * 6;
}
console.log("Units :", units);
console.log("Total Bill : ₹" + bill);

// Movie Ticket Booking

let agem = 16;
let ticketPrice;

if (age < 5) {
    ticketPrice = 0;
} else if (agem <= 18) {
    ticketPrice = 100;
} else {
    ticketPrice = 200;
}
console.log("Age :", agem);
console.log("Ticket Price : ₹" + ticketPrice);

// Hospital Token System

let patientType = "Emergency";

switch (patientType) {

    case "Emergency":
        console.log("Token 1");
        break;

    case "Senior Citizen":
        console.log("Priority");
        break;

    case "Normal":
        console.log("Regular Queue");
        break;

    default:
        console.log("Invalid Patient Type");
}

// Company Attendance

let attendance = "Present";

switch (attendance) {

    case "Present":
        console.log("Working");
        break;

    case "Leave":
        console.log("Leave Approved");
        break;

    case "Absent":
        console.log("Salary Deduction");
        break;

    default:
        console.log("Invalid Attendance Status");
}

// Grocery Cart Total

let rice = 500;
let sugar = 300;
let oil = 250;

let totalg = rice + sugar + oil;

if (total > 1000) {

    let discount = (totalg * 10) / 100;
    let finalAmount = totalg - discount;

    console.log("Total :", totalg);
    console.log("Discount :", discount);
    console.log("Final Amount :", finalAmount);

} else {

    console.log("Total :", totalg);
    console.log("No Discount");

}

// Array Task

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < products.length; i++) {
    console.log((i + 1), products[i]);
}

// Employee Database

let employee = {
    name: "Rahul",
    role: "Developer",
    salary: 50000
};

for (let key in employee) {
    console.log(employee[key]);
}

// Type Casting

let numberValue = Number("100");
let booleanValue = Boolean("true");
let stringValue = String(200);

console.log(numberValue);
console.log(booleanValue);
console.log(stringValue);

// Banking Menu

let choice = 3;

switch (choice) {

    case 1:
        console.log("Deposit");
        break;

    case 2:
        console.log("Withdraw");
        break;

    case 3:
        console.log("Balance");
        break;

    case 4:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}
//mini project

// Employee Management System

let employee = {
    name: "Rahul",
    salary: 50000,
    attendance: "Present"
};

let choicee = 1;

switch (choicee) {

    case 1:
        console.log("Employee Details");
        console.log("Name :", employee.name);
        console.log("Salary :", employee.salary);
        console.log("Attendance :", employee.attendance);
        break;

    case 2:

        let bonus;

        if (employee.salary > 50000S {
            bonus = 10000;
        } else if (employee.salary > 30000) {
            bonus = 5000;
        } else {
            bonus = 2000;
        }

        console.log("Bonus :", bonus);
        break;

    case 3:

        if (employee.attendance === "Present") {
            console.log("Working");
        } else {
            console.log("Leave");
        }

        break;

    case 4:

        console.log("Salary :", employee.salary);
        break;

    case 5:

        console.log("Exit");
        break;

    default:

        console.log("Invalid Choice");
}