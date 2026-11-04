// ==========================================
// OVER THE LETTUCE - WEBSITE JAVASCRIPT
// ==========================================

const WA_NUMBER = "918369405815";

// MENU DATA
// Verify all menu items, prices and dietary
// classifications with the restaurant owner.

const menu = [

  // ========== VEGETARIAN ==========

  {
    name: "Avocado Toastie",
    cat: "Sourdough Sandwiches",
    diet: "veg",
    prices: [335, 445],
    desc: "Avocado, fresh greens and sourdough.",
    img: "photo-1525351484163-7529414344d8"
  },
  {
    name: "Pesto Paneer",
    cat: "Sourdough Sandwiches",
    diet: "veg",
    prices: [335, 445],
    desc: "Paneer with pesto in toasted sourdough.",
    img: "photo-1528735602780-2552fd46c7af"
  },
  {
    name: "Peri Peri Paneer",
    cat: "Sourdough Sandwiches",
    diet: "veg",
    prices: [335, 445],
    desc: "Paneer with peri peri flavour.",
    img: "photo-1553909489-cd47e0ef937f"
  },
  {
    name: "Cheesy Corn",
    cat: "Sourdough Sandwiches",
    diet: "veg",
    prices: [335, 445],
    desc: "Cheesy corn sourdough sandwich.",
    img: "photo-1528735602780-2552fd46c7af"
  },
  {
    name: "Spicy Mushroom",
    cat: "Sourdough Sandwiches",
    diet: "veg",
    prices: [335, 445],
    desc: "Mushrooms with a spicy savoury filling.",
    img: "photo-1525351484163-7529414344d8"
  },
  {
    name: "Paneer Tikka",
    cat: "Wraps",
    diet: "veg",
    prices: [275],
    desc: "Paneer tikka wrap.",
    img: "photo-1626700051175-6818013e1d4f"
  },
  {
    name: "Mushroom & Cheese",
    cat: "Wraps",
    diet: "veg",
    prices: [275],
    desc: "Mushroom and cheese wrap.",
    img: "photo-1626700051175-6818013e1d4f"
  },
  {
    name: "Quinoa Veg Bowl",
    cat: "Super Bowl",
    diet: "veg",
    prices: [395],
    desc: "Wholesome vegetarian quinoa bowl.",
    img: "photo-1512621776951-a57141f2eefd"
  },
  {
    name: "Greek Salad",
    cat: "Salads",
    diet: "veg",
    prices: [335, 445],
    desc: "Fresh Greek-style salad.",
    img: "photo-1512621776951-a57141f2eefd"
  },
  {
    name: "Mexican Salad",
    cat: "Salads",
    diet: "veg",
    prices: [335, 445],
    desc: "Fresh salad with Mexican-inspired flavours.",
    img: "photo-1512621776951-a57141f2eefd"
  },
  {
    name: "Caesar Salad",
    cat: "Salads",
    diet: "veg",
    prices: [335, 445],
    desc: "Vegetarian Caesar-style salad.",
    img: "photo-1512621776951-a57141f2eefd"
  },
  {
    name: "Asian Sesame Salad",
    cat: "Salads",
    diet: "veg",
    prices: [335, 445],
    desc: "Fresh salad with sesame flavour.",
    img: "photo-1512621776951-a57141f2eefd"
  },
  {
    name: "Avocado Toast",
    cat: "Toast",
    diet: "veg",
    prices: [285],
    desc: "Avocado toast.",
    img: "photo-1525351484163-7529414344d8"
  },
  {
    name: "Hummus Toast",
    cat: "Toast",
    diet: "veg",
    prices: [265],
    desc: "Hummus on toast.",
    img: "photo-1525351484163-7529414344d8"
  },
  {
    name: "PB Banana Toast",
    cat: "Toast",
    diet: "veg",
    prices: [265],
    desc: "Peanut butter and banana toast.",
    img: "photo-1525351484163-7529414344d8"
  },
  {
    name: "Green Glow",
    cat: "Smoothies",
    diet: "veg",
    prices: [285],
    desc: "Refreshing green smoothie.",
    img: "photo-1505252585461-04db1eb84625"
  },
  {
    name: "Berry Blast",
    cat: "Smoothies",
    diet: "veg",
    prices: [285],
    desc: "Berry smoothie.",
    img: "photo-1505252585461-04db1eb84625"
  },
  {
    name: "Tropical Twist",
    cat: "Smoothies",
    diet: "veg",
    prices: [285],
    desc: "Tropical fruit smoothie.",
    img: "photo-1505252585461-04db1eb84625"
  },
  {
    name: "Choco Peanut",
    cat: "Smoothies",
    diet: "veg",
    prices: [285],
    desc: "Chocolate and peanut smoothie.",
    img: "photo-1505252585461-04db1eb84625"
  },
  {
    name: "Acai Bowl",
    cat: "Smoothie Bowl",
    diet: "veg",
    prices: [365],
    desc: "Acai smoothie bowl.",
    img: "photo-1511690743698-d9d85f2fbf38"
  },
  {
    name: "Tropical Bowl",
    cat: "Smoothie Bowl",
    diet: "veg",
    prices: [345],
    desc: "Tropical smoothie bowl.",
    img: "photo-1511690743698-d9d85f2fbf38"
  },
  {
    name: "Berry Bowl",
    cat: "Smoothie Bowl",
    diet: "veg",
    prices: [345],
    desc: "Berry smoothie bowl.",
    img: "photo-1511690743698-d9d85f2fbf38"
  },
  {
    name: "Fresh Fruit Parfait",
    cat: "Parfait",
    diet: "veg",
    prices: [295],
    desc: "Fresh fruit parfait.",
    img: "photo-1511690743698-d9d85f2fbf38"
  },
  {
    name: "Healthy Juice",
    cat: "Healthy Juices",
    diet: "veg",
    prices: [245],
    desc: "Freshly prepared healthy juice.",
    img: "photo-1505252585461-04db1eb84625"
  },
  {
    name: "Fresh Juice",
    cat: "Fresh Juices",
    diet: "veg",
    prices: [195],
    desc: "Freshly prepared juice.",
    img: "photo-1505252585461-04db1eb84625"
  },

  // ========== NON-VEGETARIAN ==========

  {
    name: "Egg Mayo",
    cat: "Sourdough Sandwiches",
    diet: "nonveg",
    prices: [365, 475],
    desc: "Egg mayo sourdough sandwich.",
    img: "photo-1525351484163-7529414344d8"
  },
  {
    name: "Chicken Pesto",
    cat: "Sourdough Sandwiches",
    diet: "nonveg",
    prices: [385, 495],
    desc: "Chicken pesto sourdough sandwich.",
    img: "photo-1528735602780-2552fd46c7af"
  },
  {
    name: "Chicken Peri Peri",
    cat: "Sourdough Sandwiches",
    diet: "nonveg",
    prices: [385, 495],
    desc: "Chicken with peri peri flavour.",
    img: "photo-1553909489-cd47e0ef937f"
  },
  {
    name: "Chicken Cheese",
    cat: "Sourdough Sandwiches",
    diet: "nonveg",
    prices: [385, 495],
    desc: "Chicken and cheese sourdough sandwich.",
    img: "photo-1528735602780-2552fd46c7af"
  },
  {
    name: "Chicken Tikka",
    cat: "Wraps",
    diet: "nonveg",
    prices: [325],
    desc: "Chicken tikka wrap.",
    img: "photo-1626700051175-6818013e1d4f"
  },
  {
    name: "Peri Peri Chicken",
    cat: "Wraps",
    diet: "nonveg",
    prices: [325],
    desc: "Peri peri chicken wrap.",
    img: "photo-1626700051175-6818013e1d4f"
  },
  {
    name: "Quinoa Chicken Bowl",
    cat: "Super Bowl",
    diet: "nonveg",
    prices: [445],
    desc: "Quinoa bowl with chicken.",
    img: "photo-1512621776951-a57141f2eefd"
  },
  {
    name: "Chicken Caesar Salad",
    cat: "Salads",
    diet: "nonveg",
    prices: [385, 495],
    desc: "Caesar salad with chicken.",
    img: "photo-1512621776951-a57141f2eefd"
  },
  {
    name: "Grilled Chicken Salad",
    cat: "Salads",
    diet: "nonveg",
    prices: [385, 495],
    desc: "Fresh salad with grilled chicken.",
    img: "photo-1512621776951-a57141f2eefd"
  },
  {
    name: "Egg Avocado Toast",
    cat: "Toast",
    diet: "nonveg",
    prices: [325],
    desc: "Egg and avocado toast.",
    img: "photo-1525351484163-7529414344d8"
  }

];


// ==========================================
// GENERAL SETTINGS
// ==========================================

const cart = [];

const money = price => "₹" + price;

const photoUrl = id =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

const categories = diet => [
  "All",
  ...new Set(
    menu
      .filter(item => item.diet === diet)
      .map(item => item.cat)
  )
];


// ==========================================
// DISPLAY MENU
// ==========================================

function renderMenu(diet, category = "All") {

  const target = document.getElementById(
    diet === "veg" ? "vegItems" : "nonvegItems"
  );

  const catTarget = document.getElementById(
    diet === "veg" ? "vegCategories" : "nonvegCategories"
  );

  catTarget.innerHTML = categories(diet)
    .map(cat => `
      <button
        class="category-chip ${cat === category ? "active" : ""}"
        data-cat="${cat}">
        ${cat}
      </button>
    `)
    .join("");

  catTarget.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      renderMenu(diet, button.dataset.cat);
    });
  });

  const list = menu.filter(item =>
    item.diet === diet &&
    (category === "All" || item.cat === category)
  );

  target.innerHTML = list.map(item => {

    const index = menu.indexOf(item);

    const sizeControl = item.prices.length === 2
      ? `
        <select class="size-select" id="size-${index}">
          <option value="0">
            Regular · ${money(item.prices[0])}
          </option>
          <option value="1">
            Large · ${money(item.prices[1])}
          </option>
        </select>
      `
      : `<span class="size-select">Single size</span>`;

    return `
      <article class="food-card">

        <div
          class="food-photo"
          style="background-image:url('${photoUrl(item.img)}')">
        </div>

        <div class="food-info">

          <div class="food-top">
            <h3>${item.name}</h3>

            <span class="food-price">
              ${
                item.prices.length === 2
                ? money(item.prices[0]) + " – " + money(item.prices[1])
                : money(item.prices[0])
              }
            </span>
          </div>

          <p>${item.desc}</p>

          <div class="food-bottom">
            ${sizeControl}

            <button
              class="add-btn"
              data-index="${index}">
              Add to cart +
            </button>
          </div>

        </div>
      </article>
    `;

  }).join("");

  target.querySelectorAll(".add-btn").forEach(button => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.index));
    });
  });

}


// ==========================================
// ADD ITEM TO CART
// ==========================================

function addToCart(index) {

  const item = menu[index];

  const select = document.getElementById(`size-${index}`);

  const sizeIndex = select ? Number(select.value) : 0;

  const size = item.prices.length === 2
    ? (sizeIndex === 0 ? "Regular" : "Large")
    : "";

  const price = item.prices[sizeIndex];

  const key = index + "-" + sizeIndex;

  const existing = cart.find(product => product.key === key);

  if (existing) {

    existing.qty++;

  } else {

    cart.push({
      key,
      index,
      size,
      price,
      qty: 1
    });

  }

  updateCart();

  toast(`${item.name} added to cart`);

}


// ==========================================
// UPDATE CART
// ==========================================

function updateCart() {

  document.getElementById("cartCount").textContent =
    cart.reduce((total, item) => total + item.qty, 0);

  const box = document.getElementById("cartItems");

  if (cart.length === 0) {

    box.innerHTML = `
      <p class="empty-cart">
        Your cart is waiting for something fresh.
      </p>
    `;

  } else {

    box.innerHTML = cart.map((item, index) => {

      const product = menu[item.index];

      return `
        <div class="cart-line">

          <div>
            <strong>${product.name}</strong>

            <small>
              ${item.size ? item.size + " · " : ""}
              ${money(item.price)} each
            </small>

            <button
              class="remove-item"
              data-remove="${index}">
              Remove
            </button>
          </div>

          <div class="qty-controls">

            <button data-dec="${index}">−</button>

            <b>${item.qty}</b>

            <button data-inc="${index}">+</button>

          </div>

        </div>
      `;

    }).join("");

  }

  // Increase quantity

  box.querySelectorAll("[data-inc]").forEach(button => {

    button.onclick = () => {

      cart[Number(button.dataset.inc)].qty++;

      updateCart();

    };

  });

  // Decrease quantity

  box.querySelectorAll("[data-dec]").forEach(button => {

    button.onclick = () => {

      const index = Number(button.dataset.dec);

      cart[index].qty--;

      if (cart[index].qty <= 0) {
        cart.splice(index, 1);
      }

      updateCart();

    };

  });

  // Remove item

  box.querySelectorAll("[data-remove]").forEach(button => {

    button.onclick = () => {

      cart.splice(Number(button.dataset.remove), 1);

      updateCart();

    };

  });

  // Calculate total

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  document.getElementById("cartTotal").textContent = money(total);

}


// ==========================================
// CART OPEN / CLOSE
// ==========================================

function openCart() {

  document.body.classList.add("cart-open");

  document
    .getElementById("cartPanel")
    .setAttribute("aria-hidden", "false");

}

function closeCart() {

  document.body.classList.remove("cart-open");

  document
    .getElementById("cartPanel")
    .setAttribute("aria-hidden", "true");

}


// ==========================================
// NOTIFICATION
// ==========================================

function toast(message) {

  const notification = document.getElementById("toast");

  notification.textContent = message;

  notification.classList.add("show");

  setTimeout(() => {

    notification.classList.remove("show");

  }, 1800);

}


// ==========================================
// ORDER BUTTONS
// ==========================================

function startOrder() {

  openCart();

}

document.getElementById("openCart").onclick = openCart;

document.getElementById("closeCart").onclick = closeCart;

document.getElementById("cartBackdrop").onclick = closeCart;

["heroOrder", "bannerOrder"].forEach(id => {

  document.getElementById(id).onclick = startOrder;

});


// ==========================================
// WHATSAPP CHECKOUT
// ==========================================

document.getElementById("checkoutBtn").onclick = () => {

  if (cart.length === 0) {

    toast("Add at least one item first.");

    return;

  }

  const name = document
    .getElementById("customerName")
    .value.trim();

  const phone = document
    .getElementById("customerPhone")
    .value.trim();

  const notes = document
    .getElementById("specialNotes")
    .value.trim();

  if (!name || !phone) {

    toast("Please enter your name and contact number.");

    return;

  }

  const lines = cart.map(item => {

    const product = menu[item.index];

    return `• ${product.name}${
      item.size ? " (" + item.size + ")" : ""
    } × ${item.qty} = ${money(item.price * item.qty)}`;

  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const message = `
Hello Over the Lettuce, I would like to place an order.

Name: ${name}
Contact: ${phone}

ORDER:
${lines.join("\n")}

Subtotal: ${money(total)}

Special instructions:
${notes || "None"}

Please confirm availability and any applicable additional charges.
`;

  const whatsappURL =
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

};


// ==========================================
// FOOTER YEAR
// ==========================================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ==========================================
// MOBILE NAVIGATION
// ==========================================

document.getElementById("menuToggle").onclick = () => {

  const nav = document.getElementById("mainNav");

  nav.classList.toggle("open");

  document
    .getElementById("menuToggle")
    .setAttribute(
      "aria-expanded",
      nav.classList.contains("open")
    );

};

document.querySelectorAll("#mainNav a").forEach(link => {

  link.addEventListener("click", () => {

    document.getElementById("mainNav").classList.remove("open");

  });

});


// ==========================================
// INITIALIZE WEBSITE
// ==========================================

renderMenu("veg");

renderMenu("nonveg");

updateCart();
// WhatsApp Checkout
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add some items first.");
        return;
    }

    const customerName = document.getElementById("customerName").value.trim();
    const customerPhone = document.getElementById("customerPhone").value.trim();
    const instructions = document.getElementById("specialInstructions").value.trim();

    if (!customerName || !customerPhone) {
        alert("Please enter your name and contact number.");
        return;
    }

    let message = `*OVER THE LETTUCE - NEW ORDER*%0A%0A`;
    message += `*Customer Name:* ${customerName}%0A`;
    message += `*Contact:* ${customerPhone}%0A%0A`;
    message += `*ORDER DETAILS*%0A`;

    cart.forEach(item => {
        message += `${item.name} x ${item.quantity} - ₹${item.price * item.quantity}%0A`;
    });

    message += `%0A*Total: ₹${getCartTotal()}*%0A`;

    if (instructions) {
        message += `%0A*Special Instructions:* ${instructions}%0A`;
    }

    message += `%0APlease confirm my order.`;

    const whatsappURL = `https://wa.me/918369405815?text=${encodeURIComponent(
        decodeURIComponent(message)
    )}`;

    window.open(whatsappURL, "_blank");
}

// Navigation
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-menu")?.classList.remove("active");
    });
});

// Mobile Menu
const menuToggle = document.getElementById("menuToggle");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        document.querySelector(".nav-menu")?.classList.toggle("active");
    });
}

// Checkout Button
const checkoutButton = document.getElementById("checkoutBtn");

if (checkoutButton) {
    checkoutButton.addEventListener("click", checkoutWhatsApp);
      }
