<template>
  <div>
    <h1>Products</h1>
    <div v-for="p in products" :key="p.id">
      <p>{{ p.title }}</p>
      <p>{{ p.price }}</p>
      <button @click="$router.push('/products/' + p.id)">open</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useProductsStore } from "@/stores/products";
export default {
  setup() {
    const { products } = useProductsStore();
    return {
      products,
    };
  },
  mounted() {
    
  }
};
</script>

<style>
</style>