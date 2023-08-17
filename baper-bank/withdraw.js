document.getElementById('btn-withdraw').addEventListener('click', function(){

    const newWithdraw = getInputById('withdraw-field');
    const previousWithdraw = getTextById('previous-withdraw')
    const totalWithdraw = newWithdraw + previousWithdraw
    setTotal('previous-withdraw', totalWithdraw);
    const totalBalance = getTextById('total-balance')
    const currentTotalBalance = totalBalance - newWithdraw;
    setTotal('total-balance', currentTotalBalance);
    
})