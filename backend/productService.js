const allProducts = require('./products');

module.exports = {
  getProduct: function(productId) {
    return allProducts.find(product => product.id === productId)
  },

  getProducts: function() {
    return allProducts;
  }
}