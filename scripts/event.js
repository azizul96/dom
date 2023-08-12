// oneClick event function

// Option 1
// <button onclick="makeRed()">Make Red</button>
function makeRed(){
    document.body.style.backgroundColor = "red"
}


// Option 2
const purpleButton = document.getElementById("make-purple")
purpleButton.addEventListener('click', makePurple)

function makePurple(){
    document.body.style.backgroundColor ="purple"
}


// Option 3
document.getElementById('make-green').addEventListener('click', function(){
    document.body.style.backgroundColor = "green "
})


// take input value and assign in p
document.getElementById('update-button').addEventListener('click', function(){
    const inputField = document.getElementById('input-field')
    const inputText = inputField.value;

    const p = document.getElementById('updated-text')
    p.innerText = inputText;
    inputField.value = "";

})