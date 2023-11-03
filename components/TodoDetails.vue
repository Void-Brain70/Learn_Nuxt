<template>
  <div class="">
      <div class="flex items-center justify-between px-4 py-2">
        <div>
          <p class="text-[20px]">{{ item.title }}</p>
        </div>
        <div class="flex gap-x-4 items-center">
          <Icon size="30" name="system-uicons:write"/>
          <Icon  @click="todoStore.toggleFavourite(item.id)" :class="{ active: item.isFav }"  size="30" name="system-uicons:heart"/>
          <Icon @click="todoStore.deleteTodo(item.id)" size="30" name="system-uicons:trash"/>
        </div>
      </div>
  </div>
</template>

<script setup>
import {useTodoStore} from "~/stores/todoStore.js";
const todoStore = useTodoStore()

const props =defineProps({
  item:{
    type: Object,
    default:''
  }
})
</script>

<style scoped>
.active{
  color: deeppink ;
}
</style>