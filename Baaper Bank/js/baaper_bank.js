
document.getElementById("deposit-button").addEventListener('click', function () {
    const depositEnterValueElement = document.getElementById("deposit-input");
    // const depositEnterValueString = depositEnterValueElement.value;
    // const newDepositAmount = parseFloat(depositEnterValueString);
    // depositEnterValueElement.value = '';

    const newDepositAmount = enterAmount("deposit-input");
    depositEnterValueElement.value = '';

    // Previous deposit + new deposit
    const initialDepositElement = document.getElementById("initial-deposit");
    // const initialDepositString = initialDepositElement.innerText;
    // const initialDeposit = parseFloat(initialDepositString);
    const initialDeposit = initialAmount("initial-deposit");
    const totalDepositAmount = newDepositAmount + initialDeposit;
    initialDepositElement.innerText = totalDepositAmount;

    // Adding deposit with Total Balance
    const totalBalanceElement = document.getElementById("total-balance");
    // const totalBalanceString = totalBalanceElement.innerText;
    // const initialTotalBalance = parseFloat(totalBalanceString);
    const initialTotalBalance = initialAmount("total-balance");
    const newTotalBalance = initialTotalBalance + newDepositAmount;
    totalBalanceElement.innerText = newTotalBalance;
})

document.getElementById("withdraw-button").addEventListener('click', function () {
    const withdrawEnterValueElement = document.getElementById("withdraw-input");
    // const withdrawValueString = withdrawEnterValueElement.value;
    // const newWithdrawAmount = parseFloat(withdrawValueString);
    // withdrawEnterValueElement.value = '';
    const newWithdrawAmount = enterAmount("withdraw-input");
    withdrawEnterValueElement.value = '';

    // Adding withdrawal new amount with previous withdrawal amount

    const initialWithdrawAmountElement = document.getElementById("initial-withdraw");
    // const initialWithdrawAmountString = initialWithdrawAmountElement.innerText;
    // const initialWithdrawAmount = parseFloat(initialWithdrawAmountString);
    const initialWithdrawAmount = initialAmount("initial-withdraw");
    const totalWithdrawAmount = initialWithdrawAmount + newWithdrawAmount;
    initialWithdrawAmountElement.innerText = totalWithdrawAmount;

    // Subtracting withdrawal amount from Total Balance
    const totalBalanceElement = document.getElementById("total-balance");
    // const totalBalanceString = totalBalanceElement.innerText;
    // const initialTotalBalance = parseFloat(totalBalanceString);
    const initialTotalBalance = initialAmount("total-balance");
    const TotalBalance = initialTotalBalance - newWithdrawAmount;
    totalBalanceElement.innerText = TotalBalance;

})

function enterAmount(tagId) {
    const getElement = document.getElementById(tagId);
    const getStringValue = getElement.value;
    const getFloatValue = parseFloat(getStringValue);
    return getFloatValue;
}

function initialAmount(tagId) {
    const getElement = document.getElementById(tagId);
    const getStringValue = getElement.innerText;
    const getFloatValue = parseFloat(getStringValue);
    return getFloatValue;
}