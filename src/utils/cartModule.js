import { reactive, ref } from "vue";

class CartModule {
  constructor() {
    this.cartItems = reactive([]);
    this.totalPrice = ref(0);
    this.refresh();
  }

  getItems() {
    return this.cartItems;
  }

  getItem(productId) {
    return this.cartItems.find(cartItem => cartItem.product.id === productId);
  }

  addToCart(product) {
    const cartItem = {
      product,
      quantity: 1,
    }

    this.cartItems.push(reactive(cartItem))
    this.writeToBackend(product.id, 1)
  }

  increaseQuantity(productId) {
    const oldQuantity = this.getItem(productId).quantity;
    this.setQuantity(productId, oldQuantity + 1);
  }

  descreaseQuantity(productId) {
    const oldQuantity = this.getItem(productId).quantity;
    this.setQuantity(productId, oldQuantity - 1);
  }

  async setQuantity(productId, quantity) {
    const index = this.cartItems.findIndex(cartItem => cartItem.product.id === productId);
    this.cartItems[index].quantity = quantity;

    if (quantity === 0) {
      this.cartItems.splice(index, 1);
    }

    await this.writeToBackend(productId, quantity);
    this.refresh();
  }

  async writeToBackend(productId, quantity) {
    fetch(`/api/cart/items/${productId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quantity: quantity,
      })
    })
  }

  async refresh() {
    const response = await fetch('/api/cart')
    const cart = await response.json()
    
    // Empty existing array
    this.cartItems.splice(0, this.cartItems.length)

    cart.cartItems.forEach(cartItem => {
      this.cartItems.push(reactive(cartItem))
    });
  }
}

export const cartModule = new CartModule();
