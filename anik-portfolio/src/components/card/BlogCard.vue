<template>
  <div>
    <div>
      <div class="box">
        <a href="#" class="btn btn-1">Hover Me</a>
        <a href="#" class="btn btn-2">Hover Me</a>
        <a href="#" class="btn btn-3">Hover Me</a>
        <a href="#" class="btn btn-4">Hover Me</a>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.box{
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn {
  position: relative;
  display: block;
  font-size: 14px;
  color: white;
  border: 2px solid #00ccff;
  background: transparent;
  margin: 0 20px;
  padding: 14px 60px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bolder;
  overflow: hidden;
  transition: 1s all ease;
}

.btn::before {
  content: " ";
  position: absolute;
  z-index: -1;
  background-color: #00ccff !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s ease;
}
.btn-1::before{
  width: 0;
  height: 100%;
}
.btn:hover::before{
  width: 100%;
}
</style>