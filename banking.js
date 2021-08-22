function getInputValue(inputId) {

    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldText);
    inputField.value = '';
    return inputFieldValue;
}


function updateDepositAndBalance(newAmount) {
    const depositTag = document.getElementById('deposit-display');
    const previousDeposit = parseFloat(depositTag.innerText);
    depositTag.innerText = previousDeposit + newAmount;

    const balanceTag = document.getElementById('balance-display');
    const previousBalance = parseFloat(balanceTag.innerText);
    balanceTag.innerText = previousBalance + newAmount;
    return previousBalance;
}


function updateWithdrawAndBalance(newAmount) {
    const withdrawTag = document.getElementById('withdraw-display');
    const previousWithdraw = parseFloat(withdrawTag.innerText);


    const balanceTag = document.getElementById('balance-display');
    const previousBalance = parseFloat(balanceTag.innerText);

    const depositTag = document.getElementById('deposit-display');
    const totalDeposit = parseFloat(depositTag.innerText);
    const currentWithdraw = previousWithdraw + newAmount;

    if (currentWithdraw <= previousBalance) {

        withdrawTag.innerText = currentWithdraw;

        const updateBalance = totalDeposit - currentWithdraw + previousBalance;
        balanceTag.innerText = updateBalance;
    }
    else {
        window.alert('insufficient withdraw amount !')
    }
}


// DEPOSIT AND BALANCE HANDLER --------------------------
document.getElementById('deposit-button').addEventListener('click', function () {
    const newAmount = getInputValue('deposit-input');
    if (newAmount > 0) {
        updateDepositAndBalance(newAmount)
    }
})



// WITHDRAW HANDLER
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newAmount = getInputValue('withdraw-input');
    if (newAmount > 0) {
        updateWithdrawAndBalance(newAmount);
    }
})