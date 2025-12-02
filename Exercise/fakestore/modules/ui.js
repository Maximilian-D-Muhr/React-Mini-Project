// modules/ui.js

export function createProductCard(product, onAddToCart) {
  const card = document.createElement("article");
  card.className =
    "bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden";

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "bg-slate-50 flex items-center justify-center h-40 p-4";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;
  img.className = "max-h-full object-contain";
  imgWrapper.appendChild(img);

  const body = document.createElement("div");
  body.className = "flex-1 flex flex-col p-4";

  const title = document.createElement("h3");
  title.className = "text-sm font-semibold text-slate-800 mb-2 line-clamp-2";
  title.textContent = product.title;

  const price = document.createElement("p");
  price.className = "text-base font-bold text-emerald-600 mb-3";
  price.textContent = `$${product.price.toFixed(2)}`;

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className =
    "mt-auto inline-flex items-center justify-center w-full rounded-lg bg-slate-800 text-white text-sm font-medium py-2 px-3 hover:bg-slate-700 active:bg-slate-900 transition";
  btn.textContent = "Add to cart";

  btn.addEventListener("click", () => {
    onAddToCart(product);
  });

  body.appendChild(title);
  body.appendChild(price);
  body.appendChild(btn);

  card.appendChild(imgWrapper);
  card.appendChild(body);

  return card;
}

export function renderProducts(container, products, onAddToCart) {
  container.innerHTML = "";
  products.forEach((product) => {
    const card = createProductCard(product, onAddToCart);
    container.appendChild(card);
  });
}

export function updateCartCount(element, cart) {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  element.textContent = totalQty;
}
