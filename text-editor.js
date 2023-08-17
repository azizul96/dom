//  Text bold, italic, underline

document.getElementById('btn-bold').addEventListener('click', function(){

    const textField = document.getElementById('text-field');
    textField.style.fontWeight = "bold";
})
document.getElementById('btn-italic').addEventListener('click', function(){

    const textField = document.getElementById('text-field');
    textField.style.fontStyle = "italic";
})
document.getElementById('btn-underline').addEventListener('click', function(){

    const textField = document.getElementById('text-field');
    textField.style.textDecoration = "underline";
})

// Text rearrange 

document.getElementById('text-left').addEventListener('click', function(){

    const textField = document.getElementById('text-field');
    textField.style.textAlign = "left";
    
})
document.getElementById('text-center').addEventListener('click', function(){

    const textField = document.getElementById('text-field');
    textField.style.textAlign = "center";
    
})
document.getElementById('text-right').addEventListener('click', function(){

    const textField = document.getElementById('text-field');
    textField.style.textAlign = "right";
    
})
document.getElementById('text-justify').addEventListener('click', function(){

    const textField = document.getElementById('text-field');
    textField.style.textAlign = "justify";
})

// Text Uppercase 

document.getElementById('text-uppercase').addEventListener('click', function(){

    const textField = document.getElementById('text-field');
    textField.style.textTransform = "uppercase"
})

// Text size increase

const textSize = document.getElementById('text-size')
const textField = document.getElementById('text-field');

textSize.addEventListener('click', function(){
    const fonSizeValue = textSize.value;
    textField.style.fontSize = fonSizeValue + "px"

})
