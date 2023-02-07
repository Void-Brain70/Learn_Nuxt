<template>
  <div>
    <navbar :navlinks="data.data" />
  </div>
</template>

<script setup>
import navbar from '~~/server/api/navbar';

const { data } = await fetchApi("navbar");
</script>

<style lang="scss" scoped></style>
