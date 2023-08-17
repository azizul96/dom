// let total = 0;

// function handleCLikBtn(target) {
//   const selectedItemContainer = document.getElementById("selected-items");
//   const itemName = target.parentNode.childNodes[1].innerText;
//   const li = document.createElement("li");
//   li.innerText = itemName;
//   selectedItemContainer.appendChild(li);
//   const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
//   total = parseInt(total) + parseInt(price);
//   document.getElementById("total").innerText = total;
// }


// document.getElementById('add-to-card1').addEventListener('click', function(){
//   const snowWhite = document.getElementById('snow-white');
//   const itemName = snowWhite.innerText;
//   const li = document.createElement('li');
//   li.innerText = itemName;
//   const selectedItems = document.getElementById('selected-items')
//   selectedItems.appendChild(li);
//   const cardPrice = document.getElementById('card1-price')
//   const getCardPrice = cardPrice.innerText;
//   const total = document.getElementById('total')
//   const getTotal = total.innerText;

//   const getTotalFinal = parseInt(getTotal) + parseInt(getCardPrice)

//   total.innerText = getTotalFinal;
  
// })

let total = 0;
function clickHandler(target){
  const selectedItems = document.getElementById('selected-items');
  const item = target.parentNode.childNodes[1].innerText;
  const li = document.createElement('li');
  li.innerText = item;
  selectedItems.appendChild(li);
  const price = target.parentNode.childNodes[5].innerText.split(" ")[1]
  total = parseInt(price) + parseInt(total);
  const getTotal = document.getElementById('total')
  getTotal.innerText = total
  
  const discount = document.getElementById('discount').innerText
  const getDiscount = parseFloat(discount) * parseFloat(total) / 100;
  const GranTotal = total-getDiscount
  document.getElementById('grand-total').innerText = GranTotal


}

