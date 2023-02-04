<script setup lang="ts">

</script>

<template >
  <!-- <div class="header">
    <p>header</p>
  </div> -->
  <div class="mainPage">
   
    <router-view ></router-view>
  
  </div>
 
</template>

<style scoped>
.mainPage {
  display: block;
    margin: auto;
  position :absolute;
	width : 99%;
	height : 95%;
  border-color: aqua;
  background-color:cadetblue;
  border-style:solid;
	border-width:1px;
}
.header {
  background-color: #F1F1F1;
  text-align: center;
  padding: 20px;
}
</style>
