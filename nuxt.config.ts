import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
  nitro: {
    preset: 'node-server'
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ["nuxt-swiper"],
});
