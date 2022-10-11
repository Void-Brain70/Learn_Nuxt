<template>
  <v-app>
    <div>
      <h1>Task Manager</h1>
      <hr />
    </div>
    <div class="com">
        <ViewTask></ViewTask>
        {{data}}
    </div>
  </v-app>
</template>

<script>
import ViewTask from '../components/ViewTask.vue';
export default {
  name: "task",
  components: { ViewTask },
  props: ["data"]
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: tomato;
}
.com {
  display: flex;
  padding: 5px 10px;
  justify-content: space-evenly;
}
</style>
