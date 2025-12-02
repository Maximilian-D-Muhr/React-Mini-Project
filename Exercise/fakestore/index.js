// index.js (main entry point)

import { fetchProducts } from "./modules/network.js";
import { addToCart, getCart } from "./modules/storage.js";
import { renderProducts, updateCartCount } from "./modules/ui.js";

const productsContainer = document.getElementById("products-container");
const cartCountElement = document.getElementById("cart-count");

async function init() {
  try {
    const products = await fetchProducts();

    renderProducts(productsContainer, products, (product) => {
      const updatedCart = addToCart(product);
      updateCartCount(cartCountElement, updatedCart);
    });

    const existingCart = getCart();
    updateCartCount(cartCountElement, existingCart);
  } catch (error) {
    console.error(error);
    productsContainer.innerHTML =
      '<p class="text-red-600 text-sm">Failed to load products. Please try again later.</p>';
  }
}

init();
