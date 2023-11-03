<template>
  <div>
    <form @submit.prevent>
      <input type="text" placeholder="Add todo" v-model="newTodo" />
      <button @click="handleSubmit">Add</button>
    </form>
<!--    {{ addTodo }}-->
  </div>
</template>

<script setup>
import {useTodoStore} from "~/stores/todoStore.js";
const todoStore = useTodoStore()
const newTodo = ref('');

const handleSubmit = () => {
  const fromData =
      {
        title: newTodo.value,
        isFav: false,
        id: Math.floor(Math.random() * 10000)
      }
  if (newTodo.value.length > 0) {
    todoStore.addTodo(fromData)
    newTodo.value = ''
  }
}
</script>

<style  scoped>

</style>