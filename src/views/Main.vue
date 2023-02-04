<template>
    <h1>Main</h1>
    <button @click="toMenu">click to menu</button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router=useRouter()
function toMenu(){
    router.push('/menu')
    
}
</script>