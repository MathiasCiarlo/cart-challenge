<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue';
import { cartModule } from '../utils/cartModule';
import CartItem from './CartItem.vue';

let cartItems = cartModule.cartItems;
let totalPrice = cartModule.totalPrice;

</script>

<template>
  <div class="Cart">
    <h2>Handlekurv</h2>
    <div class="cartItems">
      <p v-if="!cartItems.length">Den er tom! 😭</p>
      <CartItem v-for="cartItem in cartItems" :cart-item="cartItem"/>
    </div>
    <hr>
    <label for="totalPrice">Totalpris: </label>
    <span id="totalPrice">{{ totalPrice }} kr</span>
  </div>
</template>

<style scoped>
.Cart {
  padding: 10px;
}

.CartItem {
  margin-bottom: 1em;
}
</style>
