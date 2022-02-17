
//Get input value
function getInputValue(inputId) {
    const getInput = document.getElementById(inputId);
    const getInputText = getInput.value;
    const getInputAmount = parseFloat(getInputText);
    return getInputAmount;
}
// Total Cost
function totalExpenses() {
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothesCost = getInputValue('clothes-cost');
    const totalCost = foodCost + rentCost + clothesCost
    return totalCost;
}
// function getTotalIncome() {
//     const totalIncome = getInputValue('total-income');
//     return totalIncome;
// }
// function getBalance() {
//     const balance = getTotalIncome - totalExpenses();
//     return balance;
// }

document.getElementById('calculate-btn').addEventListener('click', function () {
    console.log("hi");
    //Total Income
    /* const totalIncome = document.getElementById('total-income')
    const totalIncomeText = totalIncome.value;
    const totalIncomeAmount = parseFloat(totalIncomeText)
    console.log(totalIncomeAmount); */
    const totalIncome = getInputValue('total-income');

    //food cost
    /* const foodCost = document.getElementById('food-cost');
    const foodCostText = foodCost.value;
    const foodCostAmount = parseFloat(foodCostText);
    console.log(foodCostAmount); */
    // const foodCost = getInputValue('food-cost');
    // //Rent cost
    // /* const rentCost = document.getElementById('rent-cost');
    // const rentCostText = rentCost.value;
    // const rentCostAmount = parseFloat(rentCostText);
    // console.log(rentCostAmount); */
    // const rentCost = getInputValue('rent-cost');
    // // Clothes cost
    // /* const clothesCost = document.getElementById('clothes-cost');
    // const clothesCostText = clothesCost.value;
    // const clothesCostAmount = parseFloat(clothesCostText);
    // console.log(clothesCostAmount); */
    // const clothesCost = getInputValue('clothes-cost');

    // // total Cost add
    // const totalCost = foodCost + rentCost + clothesCost
    // console.log(totalCost);

    // Total Expenses
    const TotalExpensesInput = document.getElementById('total-expenses')
    // const totalExpensesText = TotalExpensesInput.innerText;
    // const totalExpensesPreviousAmount = parseFloat(totalExpensesText);
    // const totalExpensesUpdateAmount = totalExpensesPreviousAmount + totalCost;
    TotalExpensesInput.innerText = totalExpenses();

    //balance Calculation
    const Balance = totalIncome - totalExpenses();

    //balance
    const totalBalance = document.getElementById('balance')
    // const totalBalanceText = totalBalance.innerText;
    // const totalPreviousBalance = parseFloat(totalBalanceText);
    // const totalUpdateBalance = totalPreviousBalance + Balance;
    totalBalance.innerText = Balance;


})
document.getElementById('saving-btn').addEventListener('click', function () {

    // pore dlt kore dibo
    // const totalIncome1 = getInputValue('total-income');
    const totalIncome1 = getInputValue('total-income');
    /////////////////////////////////////////


    // Saving Percentage
    const getSavingPercentage = getInputValue('saving-Percentage')
    const getSavingAmount = (totalIncome1 * getSavingPercentage) / 100;
    // console.log(getSavingAmount);
    //saving amount display
    const savingAmount = document.getElementById('saving-amount');
    // const savingAmountText = savingAmount.innerText;
    // const savingPreviousAmount = parseFloat(savingAmountText);
    // const totalUpdateBalance = savingPreviousAmount + savingCalculation;
    savingAmount.innerText = getSavingAmount;

    // Remaning Balance 
    // [aikhaner last part ta akto pblm ace uporer function er value needed]

    // pore dlt kore dibo
    const totalIncome = getInputValue('total-income');
    const Balance1 = totalIncome - totalExpenses();
    /////////////////////////////////////////

    const remaningBalance = document.getElementById('remaning-balance');
    const getRemaningBalance = Balance1 - getSavingAmount;
    remaningBalance.innerText = getRemaningBalance;

})