<template>
  <div>
<!--    Heading -->
    <div class="bg-[#2b2b2b]">
      <div class="py-6 flex items-center justify-center gap-x-5">
        <img class="h-[80px]" src="../public/picture/pinia.png" alt="pinia logo">
        <p class="text-[36px] text-white">Pinia</p>
      </div>
      <div class="flex justify-center pt-4 pb-8">
        <todo-form/>
      </div>
    </div>
    <div class="flex justify-end container mx-auto pt-4 gap-x-5">
      <button class="bg-[#FFD651] px-4 py-2 rounded-md" @click="filter= 'all'" >All Tasks</button>
      <button class="bg-[#FFD651] px-4 py-2 rounded-md" @click="filter = 'fav'" >Favourite Task</button>
    </div>
    <div v-if="filter=== 'all'" class="container mx-auto">
      <p class="text-[20px] text-[#50AC57] font-[600]">All Tasks</p>
      <p>You have <span class="text-[#50AC57] font-[600]">{{ todoStore.totalCount }}</span> tasks left to do.</p>
      <div class="bg-gray-300 my-3" v-for="(item ,i) in todoStore.todos">
        <todo-details :item="item"/>
      </div>
    </div>
    <div v-if="filter=== 'fav'" class="container mx-auto">
      <p class="text-[20px] text-[#50AC57] font-[600]">Favourite Tasks</p>
      <p>You have <span class="text-[#50AC57] font-[600]">{{ todoStore.favouriteCount }}</span> tasks left to do.</p>
      <div class="bg-gray-300 my-3" v-for="(item ,i) in todoStore.favourite">
        <todo-details :item="item"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useTodoStore} from "~/stores/todoStore.js";
const todoStore = useTodoStore()

const filter = ref('all')

</script>

<style  scoped>

</style>