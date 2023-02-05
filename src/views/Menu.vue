<template>
    <div class="box1">
        <h2>菜单</h2>

    </div>
    <hr>
    <div class="box1">
        <button @click="toMenu">click to main</button>
    </div>
    <hr>
    <div class="wrapper">
        <div class="one item">
            <div class="discription">One</div>
            <input type="text" placeholder="Please enter something" size="large" allow-clear>
            <button>submit</button>
        </div>
        <div class="two item">Two</div>
        <div class="three item">Three</div>
        <div class="four item">Four</div>
        <div class="five item">Five</div>
        <div class="six item">Six</div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function toMenu() {
    router.push('/')

}
</script>
<style scoped>
.input-box{
    width:'320px'
}
.discription {
    /* position: static; */
    float: left;
    /* left: 10px; */
}

.box1 {
    text-align: center;
    height: 10%;
    /* border-color: aqua; */
    background-color: bisque;
}

.wrapper {
    margin: 60px;
    /* 声明一个容器 */
    display: grid;
    /*  声明列的宽度  */
    grid-template-columns: repeat(3, 30%);
    /*  声明行间距和列间距  */
    grid-gap: 20px;
    /*  声明行的高度  */
    grid-template-rows: 45% 45%;
}

.one {
    background: #19CAAD;
}

.two {
    background: #8CC7B5;
}

.three {
    background: #D1BA74;
}

.four {
    background: #BEE7E9;
}

.five {
    background: #E6CEAC;
}

.six {
    background: #ECAD9E;
}

.item {
    text-align: center;
    font-size: 100%;
    /* color: #fff; */
}
</style>