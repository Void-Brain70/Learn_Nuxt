<template>
  <div>
    <h1 class="text-center font-bold m-2">Product</h1>
    <hr>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="item in products" :key="item">
        <!-- <NuxtLink :to="`/products/${item.id}`" >{{ item.title }}</NuxtLink> -->
        <ProductCard :product="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
