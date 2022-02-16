//Get input value
function getInputValue(inputId) {
    const getInput = document.getElementById(inputId);
    const getInputText = getInput.value;
    const getInputAmount = parseFloat(getInputText);
    return getInputAmount;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
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
    const foodCost = getInputValue('food-cost');
    //Rent cost
    /* const rentCost = document.getElementById('rent-cost');
    const rentCostText = rentCost.value;
    const rentCostAmount = parseFloat(rentCostText);
    console.log(rentCostAmount); */
    const rentCost = getInputValue('rent-cost');
    // Clothes cost
    /* const clothesCost = document.getElementById('clothes-cost');
    const clothesCostText = clothesCost.value;
    const clothesCostAmount = parseFloat(clothesCostText);
    console.log(clothesCostAmount); */
    const clothesCost = getInputValue('clothes-cost');


})