<template>
  <div>
    <ul>
      <li  ><img src="../assets/picture/t.png" height="18px" width="40px" ></li>
      <li style="float: right" class="active1" >Login</li>
      <li style="float: right" class="active1">SignUp</li>
      <li style="float: right" class="active1">About</li>
      <li style="float: right" class="active1">Home</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #E0E0E0;
}

li {
  float: left;
  display: block;
  color: #212121;
  text-align: center;
  padding: 15px 20px;
  text-decoration: none;
  margin-right: 15px;
  margin-left: 10px;
}

li:hover:not(.active) {
  background-color: #FAFAFA;
}
</style>
