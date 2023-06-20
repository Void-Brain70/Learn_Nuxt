<template>
    <div class="bg-[#161616] pt-[120px]">
        <div class="container mx-auto">
            <CommonPageHeading textOne="My" textTwo="Skills" />
            <div class="grid grid-cols-2 md:grid-cols-5 gap-6 px-2 md:gap-12">
                <div v-for="(items, i) in skills" :key="i">
                    <div  @click="openModal"
                        class="p-1 rounded-3xl hover:bg-gradient-to-r from-[#567CFF] via-[#3B82F6] to-[#9333EA]  bg-gradient-to-r from-[#567CFF] via-[#3B82F6] to-[#9333EA]">
                        <div
                            class="bg-[#161616] hover:bg-gradient-to-r from-[#567CFF] via-[#3B82F6] to-[#9333EA] rounded-3xl p-6 md:p-10">
                            <p class="text-white text-[14px] md:text-[24px] text-center">{{ items.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center md:text-center pt-8  md:pt-12">
                <NuxtLink to="/skill">
                    <button class="text-[14px] md:text-[18px] capitalize text-[#468dfc] hover:text-white border-2 border-[#468dfc] hover:bg-[#468dfc] to-pink-500 p-2 md:p-2 rounded-lg">Read More</button>
                </NuxtLink> 
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const skills = [
    { text: "JavaScript" },
    { text: "Python" },
    { text: "PHP" },
    { text: "C++" },
    { text: "C" },
    { text: "Vue JS" },
    { text: "Nuxt JS" },
    { text: "TailWind CSS" },
    { text: "Vuetify" },
    { text: "HTML" },
    { text: "CSS" },
    { text: "SCSS" },
    { text: "Laravel" }
]
const isOpen = ref(true)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>

<style scoped>

</style>