<script setup lang="ts">
import { ref } from 'vue'
import {useRouter} from 'vue-router'

defineProps<{ msg: string }>()
const router=useRouter()

const count = ref(0)
function sendMsg(){
  console.log(1)
}
function gotoP1(){
  router.push('/menu')
  
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    
  </div>
  <div>
    <button @click="sendMsg">send</button>
    <button @click="gotoP1">goto</button>
  </div>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
