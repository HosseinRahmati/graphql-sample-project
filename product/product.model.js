const products = [
  {
    id: "1",
    name: "apple",
    price: 15.5,
  },
  {
    id: "2",
    name: "banana",
    price: 42.9,
  },
];

function getAllProducts() {
  return products;
}
function addProduct(name, price) {
  const product = {
    id: String(products.length),
    name,
    price,
  };
  products.push(product);
  return product;
}
module.exports = {
  getAllProducts,
  addProduct,
};
