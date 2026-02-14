let cart = JSON.parse(localStorage.getItem("cart")) || [];

function toggleCart() {
  document.getElementById("cart-drawer").classList.toggle("open");
}

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  saveCart();
  updateCart();
  toggleCart();
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  saveCart();
  updateCart();
}

function changeQuantity(name, amount) {
  const item = cart.find(item => item.name === name);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeFromCart(name);
  } else {
    saveCart();
    updateCart();
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  if (!cartItems) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    cartItems.innerHTML += `
      <div class="cart-item">
        <strong>${item.name}</strong>
        <div class="cart-qty">
          <button onclick="changeQuantity('${item.name}', -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity('${item.name}', 1)">+</button>
        </div>
        ₹${item.price * item.quantity}
        <span class="remove-item" onclick="removeFromCart('${item.name}')">✕</span>
      </div>
    `;
  });

  cartCount.innerText = cart.length;
  cartTotal.innerText = total;
}

function placeOrder() {
  if (cart.length === 0) return;

  let message = "Hello, I would like to order:%0A%0A";
  let total = 0;

  cart.forEach(item => {
    message += `• ${item.name} x${item.quantity} - ₹${item.price * item.quantity}%0A`;
    total += item.price * item.quantity;
  });

  message += `%0ATotal: ₹${total}%0A%0APlease share payment details.`;

  window.open(`https://wa.me/916006773054?text=${message}`, "_blank");
}

document.addEventListener("DOMContentLoaded", updateCart);