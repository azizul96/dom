document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDeposit = getInputById('deposit-field')
    const previousDeposit = getTextById('previous-deposit')

    const totalDeposit = newDeposit + previousDeposit;
    setTotal('previous-deposit', totalDeposit);

    const totalBalance = getTextById('total-balance')
    const currentTotalBalance = totalBalance + newDeposit
    setTotal('total-balance', currentTotalBalance)
})