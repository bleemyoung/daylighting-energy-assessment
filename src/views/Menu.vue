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
            <div class="discription">窗下沿距参考平面的高度hx（m）</div>
            <input 
            type="text" 
            placeholder="输入高度（m）"
            class="input-box"  allow-clear>
           
        </div>
        <div class="two item">Two</div>
        <div class="three item">Three</div>
        <div class="four item">Four</div>
        <div class="five item">Five</div>
        <div class="six item">Six</div>
        <div class="six item">Six</div>
        <div class="six item">Six</div>
        <div class="six item">Six</div>
        <div class="six item">Six</div>
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
    /* width: 90px; */
    position: relative;
    width: 30%;/* 宽度*/
    height: 30%;
    top: 35%;     /* height+2*top==100% 美观*/
    outline-style: none ;
    border: 1px solid #ccc; 
   
}
.discription {
    position: relative;
    float: left;
    height: 50%;
    top: 25%;
    width: 50%;
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
    grid-template-rows: 45% 45% 45% 45%;
}

.one {
    /* background: #19CAAD; */
    border-color: #8CC7B5;
    border: 1px solid #ccc; 
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