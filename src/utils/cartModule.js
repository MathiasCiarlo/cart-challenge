import { reactive, ref } from "vue";

class CartModule {
  constructor() {
    this.cartItems = reactive([]);
    this.totalPrice = ref(0);
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
  }
}

export const cartModule = new CartModule();
