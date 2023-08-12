document.getElementById("place-title").innerText = "My tour list"
document.getElementById("head-title").style.color = "red"



const sections = document.querySelectorAll("section");
for (const section of sections) {
    section.style.border ="2px solid steelblue";
    section.style.borderRadius = "20px"
    section.style.marginBottom = "5px"
    section.style.paddingLeft = "10px"
    section.style.backgroundColor = "lightgray"
    
}
const headerContainer = document.getElementById("header-container")
headerContainer.style.backgroundColor = "yellow"


console.log(headerContainer.childNodes);