const products = [
    { id: 1, name: "Smartphone", price: 15000, category: "Electronics", rating: 4.5, img: "phone.jpg" },
    { id: 2, name: "Headphones", price: 3000, category: "Accessories", rating: 4.2, img: "headphones.jpg" },
    { id: 3, name: "T-Shirt", price: 800, category: "Clothing", rating: 4.1, img: "tshirt.jpg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display Products
function displayProducts(filteredProducts = products) {
    document.getElementById("product-list").innerHTML = filteredProducts.map(product => `
        <div class="product">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price} | Rating: ${product.rating}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join("");
}

displayProducts();

// Add to Cart
function addToCart(id) {
    let item = products.find(p => p.id === id);
    let existing = cart.find(p => p.id === id);
    
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

// Sorting
function sortProducts() {
    let sortValue = document.getElementById("sort").value;
    let sortedProducts = [...products];

    if (sortValue === "low-high") sortedProducts.sort((a, b) => a.price - b.price);
    if (sortValue === "high-low") sortedProducts.sort((a, b) => b.price - a.price);
    if (sortValue === "rating") sortedProducts.sort((a, b) => b.rating - a.rating);

    displayProducts(sortedProducts);
}

// Filtering
function filterProducts() {
    let category = document.getElementById("categoryFilter").value;
    let filteredProducts = products.filter(p => !category || p.category === category);
    displayProducts(filteredProducts);
}

// Cart Page Logic
function displayCart() {
    if (!document.getElementById("cart-items")) return;

    if (cart.length === 0) {
        document.getElementById("cart-items").innerHTML = "<p>Cart is Empty</p>";
        return;
    }

    document.getElementById("cart-items").innerHTML = cart.map((item, index) => `
        <div>
            <h3>${item.name}</h3>
            <p>₹${item.price} x ${item.qty}</p>
            <button onclick="updateQty(${index}, 1)">+</button>
            <button onclick="updateQty(${index}, -1)">-</button>
            <button onclick="removeItem(${index})">Remove</button>
        </div>
    `).join("");

    document.getElementById("total-price").innerText = "Total: ₹" + cart.reduce((acc, item) => acc + item.price * item.qty, 0);
}

function updateQty(index, change) {
    cart[index].qty += change;
    if (cart[index].qty === 0) cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

displayCart();

// Checkout Page Logic
function placeOrder() {
    alert("Order Placed Successfully!");
    localStorage.removeItem("cart");
    setTimeout(() => window.location.href = "index.html", 3000);
}
