<template>
    <div class="pb-12 md:pb-20">
        <h1 class="text-[white] text-border  text-center text-[24px] mx-20 md:mx-52 md:text-[34px] pb-2">{{ textOne }} <span class="text-[#3c8fc2]">{{ textTwo }}</span>
        </h1>
    </div>
</template>

<script setup>

const props = defineProps({
  textOne: String,
  textTwo: String,
})
</script>

<style scoped>
.text-border {
    border-bottom: 4px solid #567CFF;
}

</style>