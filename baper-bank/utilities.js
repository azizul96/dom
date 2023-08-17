function getInputById(inputId){
    const inputField = document.getElementById(inputId)
    const inputValue = inputField.value;
    const inputValueNumber = parseFloat(inputValue);
    inputField.value = "";
    return inputValueNumber;
}

function getTextById(textId){
    const textField = document.getElementById(textId)
    const textValue = textField.innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function setTotal(fieldId, totalAmount){
    
    const totalAmountField = document.getElementById(fieldId)
    totalAmountField.innerText = totalAmount; 
}