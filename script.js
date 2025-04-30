// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Select the cart items list
const cartItemsList = document.getElementById('cart-items');

// Add event listener for each "Add to Cart" button
addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const productTitle = event.target.parentElement.querySelector('.product-title').textContent;

    // Add product to the cart
    const cartItem = document.createElement('li');
    cartItem.textContent = productTitle;

    // Check if the cart is empty and replace the "No items yet." message
    if (cartItemsList.querySelector('li').textContent === 'No items yet.') {
      cartItemsList.innerHTML = '';
    }

    cartItemsList.appendChild(cartItem);
  });
});
// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
document.querySelector('button[type="submit"]').addEventListener('click', function (e) {
  e.preventDefault(); // prevent form submission (if needed)
  
  // Clear cart or perform any backend logic here

  // Show success checkmark
  const successDiv = document.getElementById('orderSuccess');
  successDiv.style.display = 'block';

  // Optional: Scroll to success message
  successDiv.scrollIntoView({ behavior: 'smooth' });
});
