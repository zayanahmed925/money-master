// Getting All Element By id
const error = document.getElementById("error-message");

const totalIncome = document.getElementById("total-income");
const foodCost = document.getElementById("food-cost");
const rentCost = document.getElementById("rent-cost");
const clothesCost = document.getElementById("clothes-cost");

const totalExpense = document.getElementById("total-expenses");

const balance = document.getElementById("balance");
const savingPercentage = document.getElementById("saving-Percentage");
const savingAmount = document.getElementById("saving-amount");
const remaningBalance = document.getElementById("remaning-balance");

// Only ASCII character in that range allowed
function onlyNumberKey(evt) {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    return true;
}
// Hiding Error Message From html
function hideError() {
    error.innerText = "";
    error.style.display = "none";
}
// Showing Error Message From html
function showError(msg) {
    error.innerText = "Warning: " + msg;
    error.style.display = "block";
}
// Cheking input Field
function getValue(id) {
    let value;
    try {
        value = parseFloat(id.value);
    } catch (err) {
        showError("Non-number input are not allowed");
    }

    if (value >= 0) return value;
    else {
        showError("Negative number are not allowed");
    }
}
//Calculating Total Expense
function calcTotalExpense() {
    return getValue(foodCost) + getValue(rentCost) + getValue(clothesCost);
}
// Get balance 
function calcBalence(income, expence) {
    return income - expence;
}
//Clearing Outputs
function clear() {
    totalExpense.innerText = "0";
    balance.innerText = "0";
    savingAmount.innerText = "0";
    remaningBalance.innerText = "0";
}
//Handaling calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
    hideError();
    clear();
    const income = getValue(totalIncome);
    const expence = calcTotalExpense();

    if (expence > income) {
        showError("Your expense can not excced your income!");
    } else {
        const currentBalance = calcBalence(income, expence);

        balance.innerText = currentBalance;
        totalExpense.innerText = expence;
    }
});
//Handaling Save button
document.getElementById("saving-btn").addEventListener("click", function () {
    hideError();

    const income = getValue(totalIncome);
    const expence = calcTotalExpense();
    const currentBalance = calcBalence(income, expence);
    const percentage = getValue(savingPercentage);
    const sAmount = (income * percentage) / 100;
    const rBalance = currentBalance - sAmount;
    if (sAmount > currentBalance) {
        showError("Your saving amount can not excced your current balence!");
    } else {
        savingAmount.innerText = sAmount;
        remaningBalance.innerText = rBalance;
    }
});