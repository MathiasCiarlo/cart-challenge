<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import Product from './Product.vue';

let products = ref([])

onBeforeMount(async () => {
  const response = await fetch('/api/products');
  const data = await response.json();
  products.value = data;
})


</script>

<template>
  <div class="Products">
    <h2>Varer</h2>
    <Product v-for="product in products" :product="product"/>
  </div>
</template>

<style scoped>
.CartItem {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.info {
  display: flex;
  flex-direction: column;
}
</style>
