<template>
  <div>
    <div v-if="navlinks">
      <div class="d-flex">
        <!-- <ul>
          <li v-for="(link, i) in navlinks" :key="i + link.id">
            <nuxt-link
              class="link--"
              :to="link.to ? link.to : `/topic/${link.slug}`"
              >{{ link.name }}</nuxt-link
            >
          </li>
        </ul> -->
        {{ navlinks }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  navlinks: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped></style>
