import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'// 路由配置
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import myutils from './utils/index'

const app=createApp(App)
app.config.globalProperties.$myutils = myutils

app.use(router)
app.use(ElementPlus)
app.mount('#app')
