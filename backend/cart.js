const CartItem = require("./CartItem");

class Cart {
  constructor(productService) {
    this.productService = productService;
    this.cartItemMap = {};
  }

  setProduct(productId, quantity) {
    if (quantity === 0) {
      delete this.cartItemMap[productId];
      return;
    }

    const product = this.productService.getProduct(productId);
    this.cartItemMap[product.id] = new CartItem(product, quantity)
  }

  getCartItems() {
    return Object.keys(this.cartItemMap).map(productId => this.cartItemMap[productId]);
  }

  getTotalPrice() {
    const reducer = (accumulatedPrice, cartItem) => cartItem.getPrice() + accumulatedPrice;
    const initialValue = 0;
    return this.getCartItems().reduce(reducer, initialValue);
  }

  getCartItemCount() {
    return this.getCartItems().length;
  }

  getCartHead() {
    return {
      totalPrice: this.getTotalPrice(),
      cartItemCount: this.getCartItemCount(),
    }
  }

  toResponse() {
    return {
      cartItems: this.getCartItems(),
      totalPrice: this.getTotalPrice(),
      cartItemCount: this.getCartItemCount(),
    }
  }
}

module.exports = Cart