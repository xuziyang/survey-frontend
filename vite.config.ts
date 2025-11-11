import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 代理所有 /api 请求到 mock 服务器
      '/api': {
        target: 'http://127.0.0.1:4523/m1/7391406-7123879-default', // mock 服务器地址
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
