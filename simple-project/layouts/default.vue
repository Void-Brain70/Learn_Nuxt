<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between" >
        <NuxtLink to="/" class="font-bold" >Simple Project</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Product</NuxtLink></li>
          <li><NuxtLink to="/tailwind">Tailwind</NuxtLink></li>
          <li><NuxtLink to="/minner">CSS</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
        <slot />
    </div>
     
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
