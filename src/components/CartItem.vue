<script setup lang="ts">
import CartQuantitySelector from './CartQuantitySelector.vue';

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
  cartItem: CartItem
}>()

//console.log(props.cartItem);

</script>

<template>
  <li class="CartItem">
    <div class="info">
      <span>{{ props.cartItem.product.name }}</span>
      <span>{{ cartItem.product.id }}</span>
    </div>

    <CartQuantitySelector :product="cartItem.product" />
  </li>
</template>

<style scoped>
.CartItem {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
}

.info {
  display: flex;
  flex-direction: column;
}
</style>
