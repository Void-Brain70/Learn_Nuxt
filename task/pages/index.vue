<template>
  <v-app>
    <div>
      <NavBar></NavBar>
    </div>
    <div class="show">
      <CreateProject></CreateProject>
    </div>
  </v-app>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import CreateProject from '../components/CreateProject.vue';
import CreateTask from '../components/CreateTask.vue';
export default {
    name: "index",
    components: { NavBar, CreateProject, CreateTask }
}
</script>

<style scoped>

/* .show{
  display: flex;
} */

</style>