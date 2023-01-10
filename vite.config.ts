import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  plugins: [
    // 解析单文件组件的插件
    vue(),
    // 自动按需引入的插件
    Components({
      // 开启自动生成声明文件
      dts: true,
      resolvers: [VantResolver({ importStyle: false })]
    }),
    createSvgIconsPlugin({
      // 指定图标文件夹的绝对路径
      iconDirs: [path.resolve(process.cwd(), 'src/icons')]
    }),
    viteMockServe({
      mockPath: './src/mock',
      localEnabled: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 80,
    host: true,
    open: true
  }
})
