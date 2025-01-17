// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,
  devServer: {
    host: "0.0.0.0",
    port: 8000,
  },

  css: ['~/assets/styles/global.scss'],
})
