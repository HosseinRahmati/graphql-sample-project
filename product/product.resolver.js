const ProductModel = require("./product.model");

module.exports = {
  Query: {
    products: () => {
      return ProductModel.getAllProducts();
    },
  },
  Mutation: {
    addProduct: (parent, args) => {
      return ProductModel.addProduct(args.name, args.price);
    },
  },
};
