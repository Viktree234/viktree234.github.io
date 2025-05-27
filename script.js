// Cart Data
let cart = [];

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        const productId = product.dataset.id;
        const productName = product.dataset.name;
        const productPrice = parseFloat(product.dataset.price);

        // Check if item is already in cart
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }

        updateCartCount();
        alert(`${productName} has been added to your cart.`);
    });
});

// Update Cart Count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Open Cart Modal
document.getElementById('cart-icon').addEventListener('click', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemRow = document.createElement('p');
            itemRow.innerHTML = `
                ${item.name} x ${item.quantity} 
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemRow);
        });
    }

    // Update total price
    document.getElementById('total-price').textContent = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    // Show modal
    document.getElementById('cart-modal').style.display = 'flex';
});

// Close Cart Modal
document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// Remove Item from Cart
document.getElementById('cart-items').addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-item')) {
        const productId = event.target.dataset.id;
        cart = cart.filter(item => item.id !== productId);
        updateCartCount();
        document.getElementById('cart-icon').click(); // Refresh cart
    }
});
