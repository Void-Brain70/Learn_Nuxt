<template>
<div>
  <Benefits></Benefits>
  <Openings></Openings>
</div>
</template>

<script>
import Benefits from '../components/career/Benefits.vue';
import Openings from '../components/career/Openings.vue';
export default {
    name: "IndexPage",
    components: { Benefits, Openings }
}
</script>
