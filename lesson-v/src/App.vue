<template>
  <div>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/products">Products</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
    <RouterView />
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>

<style scoped>
</style>
// Copilot