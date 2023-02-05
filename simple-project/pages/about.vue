<template>
    <div>
      <h2>About Page</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit commodi nisi quis voluptatum ullam fuga mollitia nulla architecto aliquam animi sit eum temporibus minima, iste iure suscipit nihil corrupti repudiandae.</p>
      <div>{{ data }}</div>
    </div>
</template>

<script setup>
 const { data } = await useFetch('/api/api.js')
</script>

<style lang="scss" scoped>

</style>