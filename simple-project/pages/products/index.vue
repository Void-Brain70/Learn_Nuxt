<template>
    <div> 
        <h1>product page</h1>
        <div v-for="item in products" :key="item">
           <NuxtLink :to="`/products/${item.id}`" >{{ item.title }}</NuxtLink>
        </div>
    </div>
 </template>

 <script setup>
 const {data : products } = await useFetch('https://fakestoreapi.com/products') 
 </script>

 <style scoped> 
 
 </style>