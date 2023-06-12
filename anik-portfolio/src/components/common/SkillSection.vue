<template>
    <div class="bg-[#161616]">
        <div class="container mx-auto h-screen">
            <div class="pb-12 md:pb-20">
                <h1 class="text-[white] text-border  text-center text-[24px] mx-20 md:mx-52 md:text-[34px] pb-2">My <span
                        class="text-[#3c8fc2]">Skills</span>
                </h1>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 px-2 md:gap-12">
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
    { text: "Vue JS" },
    { text: "Nuxt JS" },
    { text: "TailWind CSS" },
    { text: "Vuetify" },
    { text: "HTML" },
    { text: "CSS" },
    { text: "Python" },
    { text: "PHP" },
    { text: "Laravel" },
    { text: "C++" },

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
.text-border {
    border-bottom: 4px solid #567CFF;
}</style>