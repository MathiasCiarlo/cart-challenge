<script setup lang="ts">
import Cart from './components/Cart.vue';
import Products from './components/Products.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <h1>The super store</h1>
  <div class="layout">
    <Products />
    <Cart />
  </div>
</template>

<style>
html, body {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
</style>

<style scoped>
h1 {
  text-align: center;
}

.layout {
  display: flex;
  align-items: stretch;
  height: 100%;
}

.Cart {
  width: 50%;
}

.Products {
  width: 50%;
  border-right: solid 1px black;
  padding: 10px;
}
</style>