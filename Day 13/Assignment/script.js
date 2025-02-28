const products = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics", image: "laptop.jpg" },
    { id: 2, name: "Phone", price: 500, category: "Electronics", image: "phone.jpg" },
    { id: 3, name: "T-Shirt", price: 20, category: "Clothing", image: "tshirt.jpg" },
    { id: 4, name: "Jeans", price: 40, category: "Clothing", image: "jeans.jpg" },
    { id: 5, name: "Book", price: 15, category: "Books", image: "book.jpg" },
    { id: 6, name: "Watch", price: 70, category: "Accessories", image: "watch.jpg" }
];

const productContainer = document.getElementById('products');
const cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayProducts() {
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

function loadCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        document.getElementById('emptyCartMessage').style.display = 'block';
        return;
    } else {
        document.getElementById('emptyCartMessage').style.display = 'none';
    }

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.category}</td>
            <td>
                <button onclick="changeQuantity(${index}, -1)">-</button>
                ${item.quantity}
                <button onclick="changeQuantity(${index}, 1)">+</button>
            </td>
            <td><button onclick="removeFromCart(${index})">Remove</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });

    localStorage.setItem('cart', JSON.stringify(cart));
}

function changeQuantity(index, amount) {
    if (cart[index].quantity + amount > 0) {
        cart[index].quantity += amount;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

document.getElementById('purchaseBtn')?.addEventListener('click', () => {
    alert('Thank you for your purchase!');
    localStorage.removeItem('cart');
    location.reload();
});

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('products')) {
        displayProducts();
    }
    if (document.getElementById('cartItems')) {
        loadCart();
    }
});
