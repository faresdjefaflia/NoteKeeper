// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css'],
  modules: [[
    '@nuxtjs/google-fonts', {
  families: {
    Inter: {
      ital: [100, 900], // خط مائل
      wght: [100, 200, 300, 400, 500, 600, 700, 800, 900], // أوزان الخط
      opsz: '14..32',  // خاصية Optical Sizing
    },
  },
  display: 'swap', // تسريع عرض النصوص
    }
  ], '@pinia/nuxt'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  
})
