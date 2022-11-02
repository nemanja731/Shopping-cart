let total = 0;

function add(button) {
  let itemDiv = button.closest('.item');
  let name = itemDiv.querySelector('.name').innerText;
  let price = itemDiv.querySelector('.price').innerText;
  price = price.substring(1);
  price = parseInt(price);
  let quantity = itemDiv.querySelector('input').value;
  quantity = parseInt(quantity);
  if(quantity < 1) {
    alert('Quantity must be greater than 0!');
    return;
  }
  let priceInCart = price*quantity;
  total += priceInCart;
  document.querySelector('.total').innerText = `Total: $${total}`;
  cartItems = document.querySelector('.cart-items');
  cartItems.innerHTML += `<div class="cart-item"> 
                            <h3>${name}</h3>
                            <p>$${price} x ${quantity} = $<span>${priceInCart}</span></p>
                            <button onclick="remove(this)" class="removeButton">Remove</button>
                          </div>`
  button.innerText = 'Added';
  button.disabled = true;
  let input = itemDiv.querySelector('input');
  input.disabled = true;
}

function remove(button) {
  let cartItem = button.closest('.cart-item');
  let price = cartItem.querySelector('p span').innerText;
  let cartItemName = cartItem.querySelector('h3').innerText;
  price = parseInt(price);
  total -= price;
  cartItem.remove();
  document.querySelector('.total').innerText = `Total: $${total}`;
  let items = document.querySelectorAll('.item');
  for(let item of items) {
    let name = item.querySelector('.name').innerText;
    if (name ==  cartItemName) {
      let input = item.querySelector('.action input');
      input.disabled = false;
      input.value = 0;
      let addButton = item.querySelector('.action button');
      addButton.disabled = false;
      addButton.innerText = 'Add';
    }
  }
}