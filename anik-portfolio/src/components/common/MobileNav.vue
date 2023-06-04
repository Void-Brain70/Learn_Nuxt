<template>
    <div class="bg-red-400 w-52 text-center h-full">
        <ul>
            <li v-for="(link, i) in item" :key="i">
                <nuxt-link :to="link.link" class="text-white hover:text-[#8FD2FD] text-[20px]">{{ link.level }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    item: { type: Array, default: '' }
})

</script>