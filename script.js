/* =========================================
   TIMEORA WATCH STORE
   VANILLA JAVASCRIPT
========================================= */


/* =========================================
   PRODUCT DATABASE
========================================= */

const products = [

    {
        id: 1,
        name: "Classic Chronograph",
        brand: "TIMEORA",
        gender: "men",
        category: "analog",
        price: 4999,
        oldPrice: 6999,
        discount: 29,
        rating: 4.8,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 2,
        name: "Royal Automatic",
        brand: "TIMEORA",
        gender: "men",
        category: "automatic",
        price: 14999,
        oldPrice: 19999,
        discount: 25,
        rating: 4.9,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 3,
        name: "Elite Gold Edition",
        brand: "AUREL",
        gender: "men",
        category: "luxury",
        price: 84999,
        oldPrice: 99999,
        discount: 15,
        rating: 4.9,
        reviews: 64,
        image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 4,
        name: "Urban Black",
        brand: "TIMEORA",
        gender: "men",
        category: "fashion",
        price: 2499,
        oldPrice: 3999,
        discount: 38,
        rating: 4.6,
        reviews: 201,
        image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 5,
        name: "Sport Pro",
        brand: "ACTIVE",
        gender: "men",
        category: "sports",
        price: 3999,
        oldPrice: 5999,
        discount: 33,
        rating: 4.7,
        reviews: 176,
        image: "https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 6,
        name: "Classic Silver",
        brand: "AUREL",
        gender: "men",
        category: "analog",
        price: 7999,
        oldPrice: 9999,
        discount: 20,
        rating: 4.8,
        reviews: 91,
        image: "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?auto=format&fit=crop&w=700&q=80"
    },


    /* WOMEN */

    {
        id: 7,
        name: "Rose Elegance",
        brand: "LUNA",
        gender: "women",
        category: "fashion",
        price: 2999,
        oldPrice: 4499,
        discount: 33,
        rating: 4.8,
        reviews: 231,
        image: "https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 8,
        name: "Pearl Classic",
        brand: "LUNA",
        gender: "women",
        category: "analog",
        price: 5499,
        oldPrice: 7499,
        discount: 27,
        rating: 4.7,
        reviews: 113,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 9,
        name: "Diamond Lady",
        brand: "AUREL",
        gender: "women",
        category: "luxury",
        price: 74999,
        oldPrice: 89999,
        discount: 17,
        rating: 4.9,
        reviews: 54,
        image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 10,
        name: "Smart Lady",
        brand: "TECHTIME",
        gender: "women",
        category: "smart",
        price: 9999,
        oldPrice: 12999,
        discount: 23,
        rating: 4.6,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e0d?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 11,
        name: "Golden Pearl",
        brand: "LUNA",
        gender: "women",
        category: "fashion",
        price: 3999,
        oldPrice: 5999,
        discount: 33,
        rating: 4.7,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 12,
        name: "Rose Automatic",
        brand: "LUNA",
        gender: "women",
        category: "automatic",
        price: 18999,
        oldPrice: 24999,
        discount: 24,
        rating: 4.9,
        reviews: 77,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80"
    },


    /* CHILDREN */

    {
        id: 13,
        name: "Kids Explorer",
        brand: "KIDTIME",
        gender: "children",
        category: "digital",
        price: 799,
        oldPrice: 1199,
        discount: 33,
        rating: 4.6,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 14,
        name: "Junior Smart",
        brand: "KIDTIME",
        gender: "children",
        category: "smart",
        price: 2499,
        oldPrice: 3499,
        discount: 29,
        rating: 4.7,
        reviews: 88,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e0d?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 15,
        name: "Color Pop",
        brand: "KIDTIME",
        gender: "children",
        category: "digital",
        price: 599,
        oldPrice: 899,
        discount: 33,
        rating: 4.5,
        reviews: 190,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 16,
        name: "Junior Sport",
        brand: "ACTIVE",
        gender: "children",
        category: "sports",
        price: 1499,
        oldPrice: 1999,
        discount: 25,
        rating: 4.6,
        reviews: 76,
        image: "https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?auto=format&fit=crop&w=700&q=80"
    },


    /* SMART */

    {
        id: 17,
        name: "Smart Pro X",
        brand: "TECHTIME",
        gender: "men",
        category: "smart",
        price: 12999,
        oldPrice: 16999,
        discount: 24,
        rating: 4.8,
        reviews: 302,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e0d?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 18,
        name: "Smart Active",
        brand: "TECHTIME",
        gender: "women",
        category: "smart",
        price: 8999,
        oldPrice: 11999,
        discount: 25,
        rating: 4.7,
        reviews: 187,
        image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=700&q=80"
    },


    /* PREMIUM */

    {
        id: 19,
        name: "Executive Steel",
        brand: "AUREL",
        gender: "men",
        category: "automatic",
        price: 25999,
        oldPrice: 32999,
        discount: 21,
        rating: 4.9,
        reviews: 71,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 20,
        name: "Heritage Automatic",
        brand: "AUREL",
        gender: "men",
        category: "automatic",
        price: 45999,
        oldPrice: 59999,
        discount: 23,
        rating: 4.9,
        reviews: 42,
        image: "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 21,
        name: "Royal Gold",
        brand: "AUREL",
        gender: "women",
        category: "luxury",
        price: 59999,
        oldPrice: 74999,
        discount: 20,
        rating: 4.9,
        reviews: 39,
        image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 22,
        name: "Collector Edition",
        brand: "AUREL",
        gender: "men",
        category: "luxury",
        price: 125000,
        oldPrice: 150000,
        discount: 17,
        rating: 5.0,
        reviews: 18,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 23,
        name: "Midnight Automatic",
        brand: "TIMEORA",
        gender: "men",
        category: "automatic",
        price: 17999,
        oldPrice: 21999,
        discount: 18,
        rating: 4.8,
        reviews: 83,
        image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 24,
        name: "Elegant Silver",
        brand: "LUNA",
        gender: "women",
        category: "analog",
        price: 6999,
        oldPrice: 8999,
        discount: 22,
        rating: 4.8,
        reviews: 121,
        image: "https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&w=700&q=80"
    }

];


/* =========================================
   STATE
========================================= */

let cart =
    JSON.parse(
        localStorage.getItem("timeoraCart")
    ) || [];

let wishlist =
    JSON.parse(
        localStorage.getItem("timeoraWishlist")
    ) || [];

let activeCoupon = null;

let currentFilters = {
    gender: "all",
    types: [],
    maxPrice: 200000,
    search: ""
};


/* =========================================
   DOM
========================================= */

const productGrid =
    document.getElementById("productGrid");

const productCount =
    document.getElementById("productCount");

const emptyProducts =
    document.getElementById("emptyProducts");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const wishlistDrawer =
    document.getElementById("wishlistDrawer");

const wishlistOverlay =
    document.getElementById("wishlistOverlay");

const cartItems =
    document.getElementById("cartItems");

const wishlistItems =
    document.getElementById("wishlistItems");

const emptyCart =
    document.getElementById("emptyCart");

const cartSummary =
    document.getElementById("cartSummary");

const cartCount =
    document.getElementById("cartCount");

const wishlistCount =
    document.getElementById("wishlistCount");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");


/* =========================================
   CURRENCY
========================================= */

function formatPrice(amount) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(amount);

}


/* =========================================
   PRODUCT RENDER
========================================= */

function renderProducts() {

    let filtered =
        products.filter(product => {

            const genderMatch =
                currentFilters.gender === "all" ||
                product.gender === currentFilters.gender;

            const typeMatch =
                currentFilters.types.length === 0 ||
                currentFilters.types.includes(product.category);

            const priceMatch =
                product.price <= currentFilters.maxPrice;

            const searchText =
                currentFilters.search.toLowerCase();

            const searchMatch =
                !searchText ||
                product.name.toLowerCase().includes(searchText) ||
                product.brand.toLowerCase().includes(searchText) ||
                product.gender.toLowerCase().includes(searchText) ||
                product.category.toLowerCase().includes(searchText);

            return (
                genderMatch &&
                typeMatch &&
                priceMatch &&
                searchMatch
            );

        });


    filtered =
        sortProducts(filtered);


    productGrid.innerHTML = "";


    productCount.textContent =
        `${filtered.length} watches found`;


    if (filtered.length === 0) {

        emptyProducts.classList.add("show");

        return;

    }

    emptyProducts.classList.remove("show");


    filtered.forEach((product, index) => {

        const isWishlisted =
            wishlist.includes(product.id);


        const card =
            document.createElement("article");

        card.className = "product-card";

        card.style.animationDelay =
            `${index * 0.04}s`;


        card.innerHTML = `

            <div class="product-image">

                <span class="product-badge">
                    ${product.discount}% OFF
                </span>

                <button
                    class="product-wishlist
                    ${isWishlisted ? "active" : ""}"
                    onclick="toggleWishlist(${product.id})"
                    aria-label="Add to wishlist"
                >
                    <i class="${isWishlisted
                        ? "fa-solid"
                        : "fa-regular"
                    } fa-heart"></i>
                </button>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            </div>


            <div class="product-info">

                <span class="product-brand">
                    ${product.brand}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <div class="rating">

                    <span class="stars">
                        ${createStars(product.rating)}
                    </span>

                    <span>
                        ${product.rating}
                        (${product.reviews})
                    </span>

                </div>


                <div class="product-price">

                    <strong class="current-price">
                        ${formatPrice(product.price)}
                    </strong>

                    <span class="old-price">
                        ${formatPrice(product.oldPrice)}
                    </span>

                    <span class="discount">
                        ${product.discount}% OFF
                    </span>

                </div>


                <div class="product-actions">

                    <button
                        class="add-cart-btn"
                        onclick="addToCart(${product.id})"
                    >
                        <i class="fa-solid fa-bag-shopping"></i>
                        Add to Cart
                    </button>

                    <button
                        class="view-btn"
                        onclick="viewProduct(${product.id})"
                        aria-label="View product"
                    >
                        <i class="fa-solid fa-eye"></i>
                    </button>

                </div>

            </div>
        `;


        productGrid.appendChild(card);

    });

}


/* =========================================
   STAR RATING
========================================= */

function createStars(rating) {

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= Math.floor(rating)) {

            stars +=
                '<i class="fa-solid fa-star"></i>';

        } else {

            stars +=
                '<i class="fa-regular fa-star"></i>';

        }

    }

    return stars;

}


/* =========================================
   SORTING
========================================= */

function sortProducts(list) {

    const sort =
        document.getElementById("sortSelect").value;


    const sorted =
        [...list];


    if (sort === "low") {

        sorted.sort(
            (a,b) => a.price - b.price
        );

    }

    else if (sort === "high") {

        sorted.sort(
            (a,b) => b.price - a.price
        );

    }

    else if (sort === "rating") {

        sorted.sort(
            (a,b) => b.rating - a.rating
        );

    }

    else if (sort === "discount") {

        sorted.sort(
            (a,b) => b.discount - a.discount
        );

    }


    return sorted;

}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(productId) {

    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: productId,
            quantity: 1
        });

    }


    saveCart();

    updateCart();

    openCartDrawer();

    showToast("Watch added to cart");

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    cartItems.innerHTML = "";


    let totalItems = 0;


    cart.forEach(item => {

        totalItems += item.quantity;


        const product =
            products.find(
                p => p.id === item.id
            );


        if (!product) return;


        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div>

                <h4>
                    ${product.name}
                </h4>

                <span class="cart-item-price">
                    ${formatPrice(product.price)}
                </span>

                <div class="quantity">

                    <button
                        onclick="changeQuantity(${product.id}, -1)"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${product.id}, 1)"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove-item"
                onclick="removeFromCart(${product.id})"
            >
                <i class="fa-solid fa-trash"></i>
            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    cartCount.textContent =
        totalItems;


    if (cart.length === 0) {

        emptyCart.classList.add("show");

        cartSummary.style.display =
            "none";

    } else {

        emptyCart.classList.remove("show");

        cartSummary.style.display =
            "block";

    }


    calculateCart();

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(productId, amount) {

    const item =
        cart.find(
            item => item.id === productId
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== productId
            );

    }


    saveCart();

    updateCart();

}


/* =========================================
   REMOVE CART ITEM
========================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );


    saveCart();

    updateCart();

    showToast("Removed from cart");

}


/* =========================================
   CART CALCULATOR
========================================= */

function calculateCart() {

    let subtotal = 0;


    cart.forEach(item => {

        const product =
            products.find(
                p => p.id === item.id
            );


        if (product) {

            subtotal +=
                product.price *
                item.quantity;

        }

    });


    let discount = 0;


    if (activeCoupon) {

        if (activeCoupon.type === "percent") {

            discount =
                subtotal *
                activeCoupon.value /
                100;

        }

        if (activeCoupon.type === "fixed") {

            discount =
                Math.min(
                    activeCoupon.value,
                    subtotal
                );

        }

    }


    const discountedSubtotal =
        Math.max(
            0,
            subtotal - discount
        );


    const shipping =
        discountedSubtotal >= 5000
            ? 0
            : discountedSubtotal > 0
                ? 99
                : 0;


    const GST_RATE = 0.18;


    const gst =
        discountedSubtotal *
        GST_RATE;


    const grandTotal =
        discountedSubtotal +
        shipping +
        gst;


    document.getElementById("subtotal")
        .textContent =
        formatPrice(subtotal);


    document.getElementById("discount")
        .textContent =
        `-${formatPrice(discount)}`;


    document.getElementById("shipping")
        .textContent =
        shipping === 0
            ? "FREE"
            : formatPrice(shipping);


    document.getElementById("gst")
        .textContent =
        formatPrice(gst);


    document.getElementById("grandTotal")
        .textContent =
        formatPrice(grandTotal);

}


/* =========================================
   COUPONS
========================================= */

const coupons = {

    TIME10: {
        type: "percent",
        value: 10
    },

    LUXURY15: {
        type: "percent",
        value: 15
    },

    WELCOME500: {
        type: "fixed",
        value: 500
    }

};


document
    .getElementById("applyCoupon")
    .addEventListener(
        "click",
        applyCoupon
    );


function applyCoupon() {

    const input =
        document
            .getElementById("couponInput")
            .value
            .trim()
            .toUpperCase();


    if (!input) {

        showToast("Enter a coupon code");

        return;

    }


    if (!coupons[input]) {

        showToast("Invalid coupon code");

        return;

    }


    activeCoupon =
        coupons[input];


    calculateCart();

    showToast(
        `Coupon ${input} applied successfully`
    );

}


/* =========================================
   WISHLIST
========================================= */

function toggleWishlist(productId) {

    if (wishlist.includes(productId)) {

        wishlist =
            wishlist.filter(
                id => id !== productId
            );

        showToast("Removed from wishlist");

    } else {

        wishlist.push(productId);

        showToast("Added to wishlist");

    }


    saveWishlist();

    updateWishlist();

    renderProducts();

}


function updateWishlist() {

    wishlistCount.textContent =
        wishlist.length;


    wishlistItems.innerHTML = "";


    wishlist.forEach(productId => {

        const product =
            products.find(
                p => p.id === productId
            );


        if (!product) return;


        const item =
            document.createElement("div");

        item.className =
            "wishlist-item";


        item.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="wishlist-item-info">

                <h4>
                    ${product.name}
                </h4>

                <p>
                    ${formatPrice(product.price)}
                </p>

                <div class="wishlist-actions">

                    <button
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                    <button
                        onclick="toggleWishlist(${product.id})"
                    >
                        Remove
                    </button>

                </div>

            </div>

        `;


        wishlistItems.appendChild(item);

    });

}


/* =========================================
   LOCAL STORAGE
========================================= */

function saveCart() {

    localStorage.setItem(
        "timeoraCart",
        JSON.stringify(cart)
    );

}


function saveWishlist() {

    localStorage.setItem(
        "timeoraWishlist",
        JSON.stringify(wishlist)
    );

}


/* =========================================
   CART DRAWER
========================================= */

function openCartDrawer() {

    cartDrawer.classList.add("active");

    cartOverlay.classList.add("active");

}


function closeCartDrawer() {

    cartDrawer.classList.remove("active");

    cartOverlay.classList.remove("active");

}


document
    .getElementById("cartBtn")
    .addEventListener(
        "click",
        openCartDrawer
    );


document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCartDrawer
    );


cartOverlay.addEventListener(
    "click",
    closeCartDrawer
);


/* =========================================
   WISHLIST DRAWER
========================================= */

function openWishlist() {

    wishlistDrawer.classList.add("active");

    wishlistOverlay.classList.add("active");

}


function closeWishlistDrawer() {

    wishlistDrawer.classList.remove("active");

    wishlistOverlay.classList.remove("active");

}


document
    .getElementById("wishlistBtn")
    .addEventListener(
        "click",
        openWishlist
    );


document
    .getElementById("closeWishlist")
    .addEventListener(
        "click",
        closeWishlistDrawer
    );


wishlistOverlay.addEventListener(
    "click",
    closeWishlistDrawer
);


/* =========================================
   SEARCH
========================================= */

const searchOverlay =
    document.getElementById("searchOverlay");

const searchInput =
    document.getElementById("searchInput");


document
    .getElementById("searchBtn")
    .addEventListener(
        "click",
        () => {

            searchOverlay.classList.add("active");

            setTimeout(
                () => searchInput.focus(),
                100
            );

        }
    );


document
    .getElementById("closeSearch")
    .addEventListener(
        "click",
        () => {

            searchOverlay.classList.remove(
                "active"
            );

        }
    );


searchInput.addEventListener(
    "input",
    event => {

        currentFilters.search =
            event.target.value;

        renderProducts();

        document
            .getElementById("shop")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================================
   MOBILE MENU
========================================= */

const mobileMenuBtn =
    document.getElementById(
        "mobileMenuBtn"
    );

const navMenu =
    document.getElementById(
        "navMenu"
    );


mobileMenuBtn.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle(
            "active"
        );


        const icon =
            mobileMenuBtn.querySelector("i");


        icon.classList.toggle(
            "fa-bars"
        );

        icon.classList.toggle(
            "fa-xmark"
        );

    }
);


navMenu
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "active"
                );

                const icon =
                    mobileMenuBtn.querySelector("i");

                icon.classList.add(
                    "fa-bars"
                );

                icon.classList.remove(
                    "fa-xmark"
                );

            }
        );

    });


/* =========================================
   NAVBAR SCROLL
========================================= */

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.getElementById(
                "navbar"
            );

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );

    }
);


/* =========================================
   GENDER FILTER
========================================= */

document
    .querySelectorAll(
        'input[name="gender"]'
    )
    .forEach(input => {

        input.addEventListener(
            "change",
            () => {

                currentFilters.gender =
                    input.value;

                renderProducts();

                scrollToShop();

            }
        );

    });


/* =========================================
   TYPE FILTER
========================================= */

document
    .querySelectorAll(
        ".type-filter"
    )
    .forEach(input => {

        input.addEventListener(
            "change",
            () => {

                currentFilters.types =
                    Array.from(
                        document.querySelectorAll(
                            ".type-filter:checked"
                        )
                    )
                    .map(
                        checkbox =>
                            checkbox.value
                    );


                renderProducts();

            }
        );

    });


/* =========================================
   PRICE RANGE
========================================= */

const priceRange =
    document.getElementById(
        "priceRange"
    );

const priceValue =
    document.getElementById(
        "priceValue"
    );


priceRange.addEventListener(
    "input",
    () => {

        currentFilters.maxPrice =
            Number(
                priceRange.value
            );


        priceValue.textContent =
            formatPrice(
                currentFilters.maxPrice
            );


        renderProducts();

    }
);


/* =========================================
   SORT
========================================= */

document
    .getElementById("sortSelect")
    .addEventListener(
        "change",
        renderProducts
    );


/* =========================================
   CLEAR FILTERS
========================================= */

document
    .getElementById("clearFilters")
    .addEventListener(
        "click",
        clearFilters
    );


function clearFilters() {

    currentFilters = {
        gender: "all",
        types: [],
        maxPrice: 200000,
        search: ""
    };


    document.querySelector(
        'input[name="gender"][value="all"]'
    ).checked = true;


    document
        .querySelectorAll(".type-filter")
        .forEach(
            input => input.checked = false
        );


    priceRange.value =
        200000;


    priceValue.textContent =
        "₹2,00,000";


    searchInput.value = "";


    renderProducts();

    showToast("Filters cleared");

}


/* =========================================
   CATEGORY FILTER
========================================= */

document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const category =
                    card.dataset.category;


                currentFilters.types =
                    [category];


                document
                    .querySelectorAll(
                        ".type-filter"
                    )
                    .forEach(input => {

                        input.checked =
                            input.value ===
                            category;

                    });


                renderProducts();

                scrollToShop();

            }
        );

    });


/* =========================================
   BUDGET FILTER
========================================= */

document
    .querySelectorAll(".budget-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const min =
                    Number(
                        card.dataset.min ||
                        0
                    );

                const max =
                    Number(
                        card.dataset.max ||
                        200000
                    );


                currentFilters.maxPrice =
                    max;


                priceRange.value =
                    max;


                priceValue.textContent =
                    formatPrice(max);


                currentFilters.types = [];


                document
                    .querySelectorAll(
                        ".type-filter"
                    )
                    .forEach(
                        input =>
                            input.checked = false
                    );


                renderProducts();

                scrollToShop();

            }
        );

    });


/* =========================================
   NAV GENDER LINKS
========================================= */

document
    .querySelectorAll(
        ".nav-menu a[data-gender]"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                const gender =
                    link.dataset.gender;


                currentFilters.gender =
                    gender;


                document.querySelector(
                    `input[name="gender"][value="${gender}"]`
                ).checked = true;


                renderProducts();

            }
        );

    });


/* =========================================
   LUXURY FILTER
========================================= */

function showLuxury() {

    activateLuxuryFilter();

}


function activateLuxuryFilter() {

    currentFilters.types =
        ["luxury"];


    document
        .querySelectorAll(".type-filter")
        .forEach(input => {

            input.checked =
                input.value === "luxury";

        });


    renderProducts();

    scrollToShop();

}


/* =========================================
   SCROLL SHOP
========================================= */

function scrollToShop() {

    document
        .getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   PRODUCT VIEW
========================================= */

function viewProduct(productId) {

    const product =
        products.find(
            p => p.id === productId
        );


    if (!product) return;


    /*
       Demo product preview.
       Replace this with a separate
       product.html page later.
    */

    const message = `
${product.name}

Brand: ${product.brand}

Gender: ${product.gender}

Type: ${product.category}

Price: ${formatPrice(product.price)}

Rating: ${product.rating}/5

Reviews: ${product.reviews}

This product is ready to add to your cart.
    `;


    alert(message);

}


/* =========================================
   CONTACT FORM
========================================= */

document
    .getElementById("contactForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();

            showToast(
                "Message sent successfully!"
            );

            event.target.reset();

        }
    );


/* =========================================
   CHECKOUT
========================================= */

document
    .getElementById("checkoutBtn")
    .addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                showToast(
                    "Your cart is empty"
                );

                return;

            }


            const total =
                document
                    .getElementById(
                        "grandTotal"
                    )
                    .textContent;


            const confirmed =
                confirm(
                    `Order total: ${total}\n\nProceed with checkout?`
                );


            if (confirmed) {

                cart = [];

                activeCoupon = null;

                saveCart();

                updateCart();

                showToast(
                    "Order placed successfully!"
                );

                closeCartDrawer();

            }

        }
    );


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    toastMessage.textContent =
        message;


    toast.classList.add(
        "active"
    );


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "active"
                );

            },
            2800
        );

}


/* =========================================
   STAT COUNTER
========================================= */

function startCounters() {

    const counters =
        document.querySelectorAll(
            "[data-target]"
        );


    counters.forEach(counter => {

        const target =
            Number(
                counter.dataset.target
            );


        let current = 0;

        const increment =
            target / 70;


        const update = () => {

            current += increment;


            if (current < target) {

                counter.textContent =
                    Math.floor(current)
                    .toLocaleString("en-IN");

                requestAnimationFrame(
                    update
                );

            } else {

                counter.textContent =
                    target.toLocaleString(
                        "en-IN"
                    ) + "+";

            }

        };


        update();

    });

}


/* =========================================
   INTERSECTION OBSERVER
========================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: .15
        }
    );


document
    .querySelectorAll(
        ".category-card, .feature-banner, .about-section"
    )
    .forEach(
        element =>
            observer.observe(element)
    );


/* =========================================
   MOBILE FILTER
========================================= */

document
    .getElementById(
        "filterMobileBtn"
    )
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("filters")
                .classList.toggle(
                    "active"
                );

        }
    );


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProducts();

        updateCart();

        updateWishlist();

    }
);


/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                document
                    .getElementById("loader")
                    .classList.add(
                        "hidden"
                    );

                startCounters();

            },
            700
        );

    }
);
