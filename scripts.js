// script.js

// Sound Effect on Button Click
const clickSound = new Audio('click.mp3');

// Play sound on all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        clickSound.play();
    });
});

// Cart Swipe Animation on Order Placement
function animateCart() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.classList.add('cart-swipe');

    // After animation, change to green tick
    setTimeout(() => {
        cartIcon.src = 'tick.png'; // Use your green tick icon here
    }, 500);
}

// Handle Place Order
document.getElementById('place-order').addEventListener('click', () => {
    animateCart();
    setTimeout(() => {
        window.location.href = 'thankyou.html';
    }, 1500);
});

// Popup Button to Go to Cart
function showGoToCartPopup() {
    const popup = document.createElement('div');
    popup.classList.add('go-to-cart-popup');
    popup.innerHTML = `
        <p>Item added to cart!</p>
        <button id="go-to-cart-btn">Go to Cart</button>
    `;
    document.body.appendChild(popup);

    document.getElementById('go-to-cart-btn').addEventListener('click', () => {
        window.location.href = 'cart.html';
    });

    // Auto remove after 3 seconds
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

// Add to Cart Button - Trigger Popup
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        showGoToCartPopup();
    });
});
