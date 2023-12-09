import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 如果你正在部署到 https://<USERNAME>.github.io/<REPO>/（例如你的仓库地址为 https://github.com<USERNAME>/<REPO>），那么请将 base 设置为 '/<REPO>/'。
  // base: '/threejs-blog'
});
