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
  }
})
