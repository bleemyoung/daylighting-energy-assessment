<template>
    <div>
        <h1>Menu</h1>
    </div>
    <button @click="toMenu">click to main</button>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router'
const router=useRouter()
function toMenu(){
    router.push('/')
    
}
</script>