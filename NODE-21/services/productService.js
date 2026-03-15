//  FAKE DATABASE
let products = [
  { id: 1, name: "Laptop", category: "tech", price: 1000 },
  { id: 2, name: "Mouse", category: "tech", price: 50 },
  { id: 3, name: "Shirt", category: "clothing", price: 20 },
  { id: 4, name: "Phone", category: "tech", price: 800 }
];

// 1. READ ALL (With Filter, Sort, Paginate)
export const getAll = (query) => {
  let result = [...products];

  // Filter
  if (query.category) result = result.filter(p => p.category === query.category);
  
  // Sort
  if (query.sort === 'price') result.sort((a, b) => a.price - b.price);
  if (query.sort === '-price') result.sort((a, b) => b.price - a.price);

  // Paginate
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 2;
  const skip = (page - 1) * limit;

  return {
    totalItems: result.length,
    currentPage: page,
    data: result.slice(skip, skip + limit)
  };
};

// 2. READ ONE
export const getById = (id) => products.find(p => p.id === parseInt(id));

// 3. CREATE
export const create = (data) => {
  const newProduct = { id: Date.now(), ...data };
  products.push(newProduct);
  return newProduct;
};

// 4. UPDATE
export const update = (id, data) => {
  const index = products.findIndex(p => p.id === parseInt(id));
  if (index === -1) return null;
  products[index] = { ...products[index], ...data };
  return products[index];
};

// 5. DELETE
export const remove = (id) => {
  products = products.filter(p => p.id !== parseInt(id));
  return true;
};