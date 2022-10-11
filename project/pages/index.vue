<template>
  <v-app>
    <div>
      <h1>Task Manager</h1><hr>
    </div>
    <div class="com">
      <Project></Project>
    </div>
  </v-app>
</template>

<script>
import Project from '../components/project.vue';
export default {
    name: "index",
    components: { Project },

}
</script>

<style scoped>
h1{
  text-align: center;
  color: tomato;
}
.com{
  display: flex;
  padding: 5px 10px;
  justify-content: flex-start;

}
</style>