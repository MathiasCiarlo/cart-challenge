<script setup lang="ts">
import { ref, watch } from 'vue';
import { cartModule } from '../utils/cartModule'

interface Product {
  name: string,
  id: string,
  price: number,
}

interface CartItem {
  product: Product,
  quantity: number
}

const props = defineProps<{
  product: Product,
}>()

let productId = props.product.id;

let cartItem = ref(cartModule.getItem(productId));

watch(cartModule.cartItems, () => {
  cartItem.value = cartModule.getItem(productId);
});

function addToCart() {
  cartModule.addToCart(props.product);
}

function increaseQuantity() {
 cartModule.increaseQuantity(productId);
}

function descreaseQuantity() {
 cartModule.descreaseQuantity(productId);
}

</script>

<template>
  <div class="CartQuantitySelector">
    <button v-if="!cartItem" @click="addToCart">Kjøp</button>
    <div v-if="cartItem">
      <button @click="descreaseQuantity">-</button>
      <span class="quantity">{{ cartItem.quantity }}</span>
      <button @click="increaseQuantity">+</button>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
button {
  padding: 0.5em;
  min-width: 30px;
}

.quantity {
  margin: 0 0.5em;
}
</style>