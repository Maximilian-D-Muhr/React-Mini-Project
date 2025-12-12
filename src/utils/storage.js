export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) ?? [];
};

export const saveToLocalStorage = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};

export const addToLocalStorage = (key, item) => {
  const items = getFromLocalStorage(key);
  localStorage.setItem(key, JSON.stringify([...items, item]));
};

export const deleteFromLocalStorage = (key, id) => {
  const items = getFromLocalStorage(key);
  const filteredItems = items.filter((item) => item.id !== id);
  localStorage.setItem(key, JSON.stringify(filteredItems));
};

export const updateInLocalStorage = (key, id, updatedItem) => {
  const items = getFromLocalStorage(key);
  const updatedItems = items.map((item) => {
    if (item.id !== id) return item;
    return updatedItem;
  });
  localStorage.setItem(key, JSON.stringify(updatedItems));
};
