import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Electron from 'vite-plugin-electron'
import electronRender from 'vite-plugin-electron-renderer'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),Electron({
    entry: 'electron/index.ts'
  }),electronRender()],
  build:{
    emptyOutDir:false
  },
  server: {
    port: 8888,
    cors: true, // 允许跨域
    hmr: true, // 开启热更新
  },
  base:'./'
})
