// modules/storage.js

const CART_KEY = "cart";

export function getCart() {
  const raw = localStorage.getItem(CART_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(product) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    const updated = cart.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    );
    saveCart(updated);
    return updated;
  } else {
    const updated = [...cart, { id: product.id, title: product.title, price: product.price, qty: 1 }];
    saveCart(updated);
    return updated;
  }
}
