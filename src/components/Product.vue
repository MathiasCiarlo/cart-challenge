<script setup lang="ts">
import CartQuantitySelector from './CartQuantitySelector.vue';
interface Product {
  id: string,
  name: string,
  price: number,
}

defineProps<{
  product: Product
}>()

</script>

<template>
  <div class="Product">
    <div class="info">
      <span>{{ product.name }}</span>
      <span>{{ product.id }}</span>
    </div>

    <div>
      <CartQuantitySelector :product="product"/>
      <span>{{ product.price }} kr</span>
    </div>
  </div>
</template>

<style scoped>
.Product {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  margin-bottom: 1em;
}

.info {
  display: flex;
  flex-direction: column;
}
</style>
