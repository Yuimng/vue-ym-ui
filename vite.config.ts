import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        modifyVars: {
          // 或者globalVars
          // `themeColor` is global variables fields name
          themeColor: "#1677FF", // #1890FF
        },
        javascriptEnabled: true,
      },
    },
  },
  // 构建为库
  build: {
    lib: {
      // 构建为库。如果指定了 build.lib，build.cssCodeSplit 会默认为 false。
      // __dirname的值是vite.config.ts文件所在目录
      entry: resolve(__dirname, "components", "index.ts"), // entry是必需的，因为库不能使用HTML作为入口。
      name: "VueYmUI", // 暴露的全局变量
      fileName: "vue-ym-ui", // 输出的包文件名，默认是package.json的name选项
    },
    rollupOptions: {
      // 自定义底层的Rollup打包配置
      // https://rollupjs.org/configuration-options/
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // format: 'es', // 默认es，可选 'amd' 'cjs' 'es' 'iife' 'umd' 'system'
        exports: 'named', // 用于指定导出模式，默认是 auto，指根据 input 模块导出推测你的意图
        //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    minify: "esbuild",
    sourcemap: false,
    // 禁用 gzip 压缩大小报告，可略微减少打包时间
    reportCompressedSize: true,
    // 规定触发警告的 chunk 大小
    chunkSizeWarningLimit: 2000,
  },
  esbuild: {
    pure: ["console.log", "debugger"],
  },
});
