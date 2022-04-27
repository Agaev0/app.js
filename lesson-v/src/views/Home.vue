<template>
  <div>
    <h1>Home</h1>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue-demi';
export default {
  setup() {
    let x = ref(0);
    return {
      x,
    };
  },
  watch: {
    x(newVal: number) {
      console.log(newVal);
    },
  },
  
};
</script>

<style scoped>
</style>