//  FAKE DATABASE 
let products = [{ id: 1, name: "Laptop", category: "tech" }];


// Get All + Query Handling (e.g., ?category=tech)
export const getAll = (query) => {
  if (query.category) return products.filter(p => p.category === query.category);
  return products;
};


// Get One
export const getById = (id) => products.find(p => p.id === parseInt(id));


// Create
export const create = (data) => {
  const newProduct = { id: Date.now(), ...data };
  products.push(newProduct);
  return newProduct;
};


// Update
export const update = (id, data) => {
  const index = products.findIndex(p => p.id === parseInt(id));
  if (index === -1) return null; 
  products[index] = { ...products[index], ...data };
  return products[index];
};


// Delete
export const remove = (id) => {
  products = products.filter(p => p.id !== parseInt(id));
  return true;
};