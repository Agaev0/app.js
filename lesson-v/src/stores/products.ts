import { defineStore } from 'pinia'
import products_json from "@/stores/products.json";

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: products_json
  }),
  getters: {
  },
  actions: {
  }
})
