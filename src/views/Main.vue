<template>

    <div class="box1">
        <h2>初始界面</h2>
    </div>
    <hr>
    <div class="box1"><button @click="toMenu">click to menu</button></div>


</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function toMenu() {
    router.push('/menu')

}
</script>
<style scoped>
.box1 {
    text-align: center;
    height: 10%;
}
</style>
