class CartItem {
  constructor(product, quantity) {
    this.product = product
    this.quantity = quantity
  }

  getPrice() {
    return this.product.price * this.quantity;

  }
}

module.exports = CartItem;