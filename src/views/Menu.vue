<template>
    <div class="box1">
        <h2>菜单</h2>
    </div>
    <hr>
    <div style="text-align: center;"><p>请输入计算所需参数</p></div>
    <div class="wrapper">
        <div class="one item">
            <div class="discription">窗下沿距参考平面的高度hx(m)</div>
            <input type="text" placeholder="输入高度(m)" class="input-box" v-model="detail.a">
        </div>
        <div class="two item">
            <div class="discription">房间长度l</div>
            <input type="text" placeholder="输入房间长度(m)" class="input-box" v-model="detail.b">
        </div>
        <div class="three item">
            <div class="discription">房间进深b(m)</div>
            <input type="text" placeholder="房间进深b(m)" class="input-box" v-model="detail.c">
        </div>
        <div class="four item">
            <div class="discription">窗玻璃的污染折减系数τc</div>
            <input type="text" placeholder="窗玻璃的污染折减系数τc" class="input-box" v-model="detail.d">
        </div>
        <div class="five item">
            <div class="discription">窗结构的挡光折减系数τw</div>
            <input type="text" placeholder="房间进深b(m)" class="input-box" v-model="detail.e">
        </div>
        <div class="six item">
            <div class="discription">采光材料的透射比τ0(%)</div>
            <input type="text" placeholder="房间进深b(m)" class="input-box" v-model="detail.f">
        </div>
        <div class="six item">
            <div class="discription">顶棚反射比(%)</div>
            <input type="text" placeholder="顶棚反射比(%)" class="input-box" v-model="detail.g">
        </div>
        <div class="six item">
            <div class="discription">墙面反射比(%)</div>
            <input type="text" placeholder="墙面反射比(%)" class="input-box" v-model="detail.h">
        </div>
        <div class="six item">
            <div class="discription">窗地面积比Ac/Ad</div>
            <input type="text" placeholder="窗地面积比Ac/Ad" class="input-box" v-model="detail.i">
        </div>
        <div class="six item">
            <div class="discription">房间进深b(m)</div>
            <input type="text" placeholder="光气候系数K" class="input-box" v-model="detail.j">
        </div>
        <div class="six item">
            <div class="discription">空调制冷系数COP</div>
            <input type="text" placeholder="空调制冷系数COP" class="input-box" v-model="detail.k">
        </div>
        <div class="six item">
            <div class="discription">天窗U值(W/(m²·K))</div>
            <input type="text" placeholder="天窗U值(W/(m²·K))" class="input-box" v-model="detail.l">
        </div>
        <div class="six item">
            <div class="discription">建筑外墙传热系数(W/(m²·K))</div>
            <input type="text" placeholder="天窗U值(W/(m²·K))" class="input-box" v-model="detail.m">
        </div>
        <div class="six item">
            <div class="discription">该地区各月份室外平均温度</div>
            <input type="text" placeholder="请输入平均温度" class="input-box" v-model="detail.n">
        </div><div class="six item">
            <div class="discription">该地区各月份室内设计温度</div>
            <input type="text" placeholder="该地区各月份室内设计温度" class="input-box" v-model="detail.o">
        </div>
    </div>
    <div>
        <hr>
        <div>
            hx: {{ detail.a }} <br>
            l: {{ detail.b }}
        </div>
        <div style="text-align: center;">
            <button>计算采光等级</button>
            <button>计算空调能耗增量</button>
            <el-button type="primary" @click="toMenu">登出</el-button>
        </div>
        <div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted, reactive } from 'vue'
const detail = reactive({
    count: null,
    a: null,// a:窗下沿距参考平面的高度hx（m）
    b: null,// b:房间长度l（m）
    c: null,// c:房间进深b（m）
    d: null,// d:窗玻璃的污染折减系数τc  （根据下表选择窗种类确定输入值）
    e: null,// e:窗结构的挡光折减系数τw （根据下表选择窗种类确定输入值（去掉“垂直”一列））
    f: null,// f:采光材料的透射比τ0（％）
    g: null,// g:顶棚反射比（％）
    h: null,// h:墙面反射比（％）  (f-h可根据相应玻璃以及建筑材料种类确定)
    i: null,// i:窗地面积比Ac/Ad
    j: null,// j:光气候系数K   （根据下表选择光气候区确定输入值）
    k: null,// k:空调制冷系数COP
    l: null,// l:天窗U值(W/(m²·K))
    m: null,// m:建筑外墙传热系数(W/(m²·K))
    n: null,// n:该地区各月份室外平均温度
    o: null,// o:该地区各月份室内设计温度
    s: null// s:天窗面积
})
const router = useRouter()
function toMenu() {
    router.push('/')

}
</script>
<style scoped>
.input-box {
    /* width: 90px; */
    position: relative;
    width: 30%;
    /* 宽度*/
    height: 30%;
    top: 30%;
    /* height+2*top==100% 美观*/
    outline-style: none;
    border: 1px solid #ccc;
    font-size: 0.8vw;
}

.discription {
    position: relative;
    float: left;
    height: 50%;
    top: 25%;
    width: 50%;
    font-size: 1vw;
    /* font-size: 1.8vh; */
}

.box1 {
    text-align: center;
    height: 10%;
    /* border-color: aqua; */
    background-color: bisque;
}

.wrapper {
    margin: 20px;
    height: 40%;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-gap: 5px;
    grid-template-rows: 20% 20% 20% 20% 20%;
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
    top: 5%;
    text-align: center;
    font-size: 100%;
    /* color: #fff; */
}
</style>