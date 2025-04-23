let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  displayCart();
}

function displayCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let total = 0;
  const ul = document.createElement("ul");

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    total += item.price;
    ul.appendChild(li);
  });

  cartDiv.appendChild(ul);
  const totalDiv = document.createElement("p");
  totalDiv.innerHTML = `<strong>Total: ₹${total}</strong>`;
  cartDiv.appendChild(totalDiv);
}
