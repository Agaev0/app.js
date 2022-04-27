<template>
  <div>
    <h1>Product</h1>
    <p>{{ $route.params.id }}</p>
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
    for (const i of [1,2,3,4,5]) {
      const state = { product_id: i };
      const title = "";
      const url = "/products/" + state.product_id;
      history.pushState(state, title, url);
    }
  },
};
</script>

<style>
</style>