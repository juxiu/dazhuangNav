import UnoCSS from "unocss/vite"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    base: mode === "production" ? "dazhuangNav" : "/",
    server: {
      hmr: true,
    },
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: path.resolve(__dirname, "src") + "/",
        },
      ],
    },
    plugins: [
      vue(),
      UnoCSS(),
      AutoImport({
        /* options */
        imports: [
          "vue",
          "vue-router",
          {
            "naive-ui": [
              "useDialog",
              "useMessage",
              "useNotification",
              "useLoadingBar",
            ],
          },
        ],
        dts: true,
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
  })
