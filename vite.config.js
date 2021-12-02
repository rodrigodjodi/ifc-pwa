import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3500
  },
  plugins: [
    vue(),
    VitePWA({
      includeAssets: [
        "favicon.ico",
        "web-ifc.wasm"
      ],
      manifest: {
        name: "IFC PWA",
        short_name: "IFC PWA",
        description:
          "Installable, offline-ready IFC viewer based on IFC.js",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        start_url: "/",
        scope: ".",
        display: "standalone",
        orientation: "any",
        dir: "ltr",
        lang: "pt-BR",
      },
    })
  ]
})
